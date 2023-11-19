"use client";

import React, { useState } from "react";
import UserNavbar from "@/app/components/UserNavBar";

const Chat = () => {
  const [chats, setChats] = useState([{ name: "Juan", message: "Hola!" }]);
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (message.trim() !== "") {
      setChats([...chats, { name: "Tú", message: message }]);
      setMessage("");
    }
  };

  const changeStatus = (index, newStatus) => {
    const updatedChats = [...chats];
    updatedChats[index].status = newStatus;
    setChats(updatedChats);
  };

  return (
    <div>
      <UserNavbar />
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col h-[600px] w-[400px] bg-white border border-gray-300">
          <div className="p-2">
            <div className="flex justify-end">
              <select
                className="cursor-pointer text-sm"
                onChange={(e) => changeStatus(0, e.target.value)}
              >
                <option value="pendiente">Pendiente</option>
                <option value="en revision">En revisión</option>
                <option value="denegar">Rechazar</option>
              </select>
            </div>
            <div className="mt-2 overflow-y-auto">
              {chats.map((chat, index) => (
                <div
                  key={index}
                  className="p-1 border-b border-gray-300 text-sm"
                >
                  <strong>{chat.name}:</strong> {chat.message}
                </div>
              ))}
            </div>
          </div>
          <div className="p-2 mt-auto bg-gray-100">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border p-1 w-full text-sm"
              placeholder="Escribe un mensaje..."
            />
            <button
              onClick={sendMessage}
              className=" bg-hover-pink text-white p-1 mt-1 w-full text-sm"
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
