"use client";
import React, { useEffect, useState } from "react";
import UserNavbar from "@/app/components/UserNavBar";
import axios from "axios";

const Chats = () => {
  const [chats, setChats] = useState([
    { asunto: "Notificacion 1", fecha: "2023-11-20" },
  ]);

  const transformDate = (date: string): string => {
    const newDate = new Date(date); // Convertir la cadena a un objeto Date
    const transformed = newDate.toISOString().split('T')[0]; // Obtener la parte de la fecha y formatearla
  
    return transformed;
  };
  
  useEffect(() => {
    async function fetchData() {
      try {
        const user = localStorage.getItem("token");
        console.log(user);
        const res = await axios.get("http://localhost:4000/api/getNotifications", { params: { userId: user } });
        console.log(res.data[0].timestamp);
        const transformedChats = res.data.map((chat: { message: string; timestamp: string; }) => ({
          asunto: chat.message,
          fecha: transformDate(chat.timestamp),
        }));
        setChats(transformedChats);
        console.log(chats);
      } catch (error) {
        // Handle the error here
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <UserNavbar />
      <div className="flex justify-center items-center h-screen">
        <div className="max-w-md w-full mx-auto overflow-y-auto max-h-[400px] bg-white rounded-md shadow-lg">
          <div className="text-center py-4 border-b border-gray-300">
            <h1 className="text-2xl font-bold">Centro de Notificaciones</h1>
          </div>
          {chats.length === 0 ? (
            <div className="text-center p-4">
              <p>No hay notificaciones</p>
            </div>
          ) : (
            chats.map((chat, index) => (
              <div
                key={index}
                className="flex flex-col p-4 border-b border-gray-300 hover:bg-gray-100 transition duration-300"
              >
                <button className="text-lg font-semibold hover:underline">
                  {chat.asunto}
                </button>
                <span className="text-sm text-gray-600">Fecha: {chat.fecha}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );

};

export default Chats;
