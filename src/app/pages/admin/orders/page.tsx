"use client";

import React, { useState, useEffect } from "react";
import Order from "@/app/components/Order";
import Navbar from "@/app/components/Navbar";
import BasicCard from "@/app/components/BasicCard";
import axios from "axios";

const Orders = () => {
  const [orderNum, setOrderNum] = useState("");
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get("http://localhost:4000/api/getOrders");
        console.log(res.data);
        const extractedIds = res.data.map((order: { _id: string }) => {
          const truncatedId = order._id.slice(0, 24); // Recorta a 24 dígitos (todos)
          return { _id: truncatedId };
        });
        console.log(extractedIds);
        setOrders(extractedIds);
        console.log(orders);
      } catch (error: any) {
        console.log("PASO ALGO ", error);
      }
    }
    getData();
  }, []);

  const handleAction = (actionType: string, idOrder: string) => {
    switch (actionType) {
      case "details":
        // Aquí se redirige a la página de detalles de la orden
        console.log("Detalles de la orden", idOrder);
        break;
      case "confirm":
        // Aquí se confirma la orden
        console.log("Confirmar orden", idOrder);
        break;
      case "decline":
        // Aquí se rechaza la orden
        console.log("Rechazar orden", idOrder);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Navbar />
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
