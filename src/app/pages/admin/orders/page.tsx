"use client";

import React, { useState, useEffect } from "react";
import Order from "@/app/components/Order";
import AdminNavbar from "@/app/components/AdminNavbar";
import BasicCard from "@/app/components/BasicCard";
import axios from "axios";
import { useRouter } from "next/navigation";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const router = useRouter();
  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get("https://us-central1-duendemaquillista-8f457.cloudfunctions.net/api/api/getOrders");
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

  const handleAction = async (actionType: string, idOrder: string) => {
    switch (actionType) {
      case "details":
        // Aquí se redirige a la página de detalles de la orden
        console.log("ID: ", idOrder);
        localStorage.setItem("idOrder", idOrder);
        router.push("/pages/users/orderDetails");
        break;
      case "confirm":
        // Aquí se confirma la orden
        await axios.put('http://localhost:4000/api/updateOrderStatus', {id: idOrder, status: "Confirmado"})
        break;
      case "decline":
        // Aquí se rechaza la orden
        console.log("ID: ", idOrder);
        await axios.put('http://localhost:4000/api/updateOrderStatus', { id: idOrder, status: "Rechazado"})
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
