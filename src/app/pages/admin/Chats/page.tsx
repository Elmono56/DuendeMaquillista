"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";
import UserNavbar from "@/app/components/UserNavBar";

const Chats = () => {
  const [chats, setChats] = useState([
    { name: "Juan", status: "pendiente" },
    { name: "Daniela", status: "pendiente" },
    { name: "Ariel", status: "pendiente" },
    { name: "Juan", status: "pendiente" },
    { name: "Daniela", status: "pendiente" },
    { name: "Ariel", status: "pendiente" },
    { name: "Juan", status: "pendiente" },
    { name: "Daniela", status: "pendiente" },
    { name: "Ariel", status: "pendiente" },
  ]);

  return (
    <div>
      <UserNavbar />
      <div className="flex justify-center items-center h-screen">
        <div className="max-w-md w-full mx-auto overflow-y-auto max-h-[400px] bg-white rounded-md">
          {chats.map((chat, index) => (
            <div
              key={index}
              className="flex justify-between p-4 border-b border-gray-300"
            >
              <button>{chat.name}</button>
              <span>Estado: {chat.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chats;
