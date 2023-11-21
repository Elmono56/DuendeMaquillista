"use client";
import React, { useState } from "react";
import UserNavbar from "@/app/components/UserNavBar";

const Chats = () => {
  const [chats, setChats] = useState([
    { asunto: "Pedido confirmado", fecha: "2023-11-20" },
    { asunto: "Mensaje de Daniela", fecha: "2023-11-19" },
    { asunto: "Recordatorio de Ariel", fecha: "2023-11-18" },
    // Añade más chats aquí
  ]);

  return (
    <div>
      <UserNavbar />
      <div className="flex justify-center items-center h-screen">
        <div className="max-w-md w-full mx-auto overflow-y-auto max-h-[400px] bg-white rounded-md shadow-lg">
          <div className="text-center py-4 border-b border-gray-300">
            <h1 className="text-2xl font-bold">Centro de Notificaciones</h1>
          </div>
          {chats.map((chat, index) => (
            <div
              key={index}
              className="flex flex-col p-4 border-b border-gray-300 hover:bg-gray-100 transition duration-300"
            >
              <button className="text-lg font-semibold hover:underline">
                {chat.asunto}
              </button>
              <span className="text-sm text-gray-600">Fecha: {chat.fecha}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chats;
