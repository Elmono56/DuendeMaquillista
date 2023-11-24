"use client";

import React, { useState, useEffect } from "react";
import Order from "@/app/components/Order";
import AdminNavbar from "@/app/components/AdminNavbar";
import BasicCard from "@/app/components/BasicCard";
import { useRouter } from "next/navigation";
import OrderController from "../../../../../backend/controllers/orderController";
import UserController from "../../../../../backend/controllers/userController";
import CommitmentController from "../../../../../backend/controllers/commitmentController";

import { NotificationSubject } from "../../../../../backend/observer/NotificationSubject";
import { UserNotificationObserver } from "../../../../../backend/observer/UserNotificationObserver";

import { AgendaConcrete } from "../../../../../backend/AgendaDecorator/AgendaConcrete";
import { EventoPedido } from "../../../../../backend/AgendaDecorator/AgendaTypes";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const router = useRouter();
  useEffect(() => {
    async function getData() {
      try {
        const res = await OrderController.getOrders('https://us-central1-duendemaquillista-8f457.cloudfunctions.net/api/api/getOrders');
        const extractedIds = res.data.map((order: { _id: string }) => {
          const truncatedId = order._id.slice(0, 24); // Recorta a 24 dígitos (todos)
          return { _id: truncatedId };
        });
        setOrders(extractedIds);
      } catch (error: any) {
        console.log("PASO ALGO ", error);
      }
    }
    getData();
  }, []);

  const nombreDelDiaSegunFecha = (fecha: Date) => [
    'domingo',
    'lunes',
    'martes',
    'miércoles',
    'jueves',
    'viernes',
    'sábado',
    'domingo',
  ][new Date(fecha).getDay()];

  const getDeliveryDate = (): Date => {
    const fechaActual = Date.now();
    const fechaEntrega = new Date(fechaActual);
    let check = false;
    let counter = 0;
    while (!check) {
      fechaEntrega.setDate(fechaEntrega.getDate() + 1);
      console.log(nombreDelDiaSegunFecha(fechaEntrega));
      if (nombreDelDiaSegunFecha(fechaEntrega) == "martes" || nombreDelDiaSegunFecha(fechaEntrega) == "jueves" || nombreDelDiaSegunFecha(fechaEntrega) == "sábado") {
        check = true;
      } else {
        counter++;
        // fechaEntrega.setDate(fechaEntrega.getDate() + 1);
      }
    }
    return fechaEntrega;
  };

  const handleAction = async (actionType: string, idOrder: string) => {
    const notificationSubject = new NotificationSubject();
    const observer = new UserNotificationObserver();
    notificationSubject.attach(observer);
    switch (actionType) {
      case "details":
        // Aquí se redirige a la página de detalles de la orden
        localStorage.setItem("idOrder", idOrder);
        router.push("/pages/users/orderDetails");
        break;
      case "confirm":
        // Aquí se confirma la orden
        // AQUI SE DEBE MANEJAR EL COMPROMISO
        // CREARLO CON EL TIPO DE COMPROMISO "ENTREGA"
        const res = await OrderController.getOrder('http://localhost:4000/api/getOrder', { params: { id: idOrder } });
        const resUser = await UserController.getUser('http://localhost:4000/api/getUser', { params: { id: res.data.user_id } });
        let data = {
          name: `Entrega de Pedido`,
          type: "Entrega",
          userDetail: {
            name: resUser.data.name,
            lastName: resUser.data.lastName,
            contact: resUser.data.email,
            orderId: idOrder
          },
          deadline: getDeliveryDate(),
          status: "true"
        }
        const eventoAgenda = new AgendaConcrete(data.name, data.deadline.toString(), data.status);
        const eventoPedido = new EventoPedido(eventoAgenda, "Entrega", [
          { name: resUser.data.name, apellido: resUser.data.lastName, contacto: resUser.data.email, numeroPedido: idOrder },
        ]);
        await CommitmentController.createCommitment('http://localhost:4000/api/createCommitment', eventoPedido);
        await OrderController.updateOrderStatus('http://localhost:4000/api/updateOrderStatus', { id: idOrder, status: "Confirmado" });
        // FALTA AGREGAR AL CENTRO DE NOTIFICACIONES
        // En el lugar donde cambias el estado de las órdenes
        notificationSubject.notifyObservers("Se ha confirmado una orden #" + idOrder, res.data.user_id,  idOrder);
        // se debe desuscribir el observer despues de notificar

        break;
      case "decline":
        // Aquí se rechaza la orden
        const res1 = await OrderController.getOrder('http://localhost:4000/api/getOrder', { params: { id: idOrder } });
        await OrderController.updateOrderStatus('http://localhost:4000/api/updateOrderStatus', { id: idOrder, status: "Rechazado" });
        notificationSubject.notifyObservers("Se ha rechazado una orden #" + idOrder, res1.data.user_id,  idOrder);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <AdminNavbar />
      <div className="flex justify-center items-center h-screen">
        <BasicCard>
          <div className="text-2xl text-black font-bold lg:pb-[20px]">
            Pedidos
          </div>
          <div className="scrolling-auto">
            {orders.map((order: { _id: string }) => (
              <Order
                key={order._id}
                idOrder={order._id}
                onAction={handleAction}
              />
            ))}
          </div>
        </BasicCard>
      </div>
    </>
  );
};

export default Orders;
