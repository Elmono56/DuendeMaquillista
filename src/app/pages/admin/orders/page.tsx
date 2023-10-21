"use client";

import React from "react";
import Order from "@/app/components/Order";
import Navbar from "@/app/components/Navbar";
import BasicCard from "@/app/components/BasicCard";

const Orders = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <BasicCard>
          <div className="text-2xl text-black font-bold lg:pb-[20px]">
            Pedidos
          </div>
          <div className="scrolling-auto">
            <Order idOrder="11928663" />
            <Order idOrder="11928664" />
            <Order idOrder="11928665" />
            <Order idOrder="11928666" />
            <Order idOrder="11928667" />
            <Order idOrder="11928668" />
          </div>
        </BasicCard>
      </div>
    </>
  );
};

export default Orders;
