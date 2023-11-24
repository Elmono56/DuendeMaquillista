'use client';
import React, { useEffect, useState } from "react";
import UserNavbar from "../../../components/UserNavBar";
import Head from "next/head";
import Image from "next/image";
import OrderController from "../../../../../backend/controllers/orderController";

const Orders = () => {
  const [orders, setOrders] = useState([] as Array<{
    id: string;
    status: string;
  }>);
  
  useEffect(() => {
    async function getData() {
      const idUser = localStorage.getItem("token");
      const res = await OrderController.getOrdersByUser("http://localhost:4000/api/getOrdersById", { params: { user_id: idUser } });
      setOrders(res.data.map((order: { _id: string; status: string; }) => ({
        id: order._id,
        status: order.status
      })));
    } getData();
  }
  , []);

  const handleOrderDetails = (id: string) => () => {
    localStorage.setItem("order_id", id);
    window.location.href = "/pages/users/orderDetails";
  }

  return (
    <div>
      <UserNavbar />
      <div className="min-h-screen bg-pink-lighter flex items-center justify-center">
        <Head>
          <title>Pedidos</title>
        </Head>
        <div className="bg-white p-6 rounded-xl shadow-md space-y-4 max-h-[600px] overflow-y-auto w-[600px]">
          <h1 className="text-xl font-semibold text-center">Pedidos</h1>
          {orders.map((_, idx) => (
            <div key={idx} className="flex items-center space-x-4">
              <div className="w-24 h-24 relative rounded">
                <Image
                  src="/images/placeholder.jpg"
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                />
              </div>
              <div className="flex-1 border-b">
                <div className="pb-2">ID: { _.id }</div>
              </div>
              <div className="flex flex-col space-y-2">
                {/* <Link href="/pages/users/orderDetails"> */}
                  <button className="boton-global mr-3" onClick={handleOrderDetails(_.id)}>Detalles</button>
                {/* </Link> */}

                <label className="text-sm">
                  Estado: {_.status}
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
