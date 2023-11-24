"use client";

import React, { useState } from "react";
import AdminNavbar from "@/app/components/AdminNavbar";
import commitmentController from "../../../../../backend/controllers/commitmentController";
const AddEventEntrega = () => {
  const [asunto, setAsunto] = useState("");
  const [fecha, setFecha] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [numeroPedido, setNumeroPedido] = useState("");
  const [contacto, setContacto] = useState("");

  const handleEntrega = async () => {
    try{
      const response = await commitmentController.createCommitment("http://localhost:4000/api/createCommitment", {
        name: nombre + apellido,
        type: "Entrega",
        description: asunto,
        deadline: fecha,
        status: true,
        address: contacto
        });
        alert("Se añadió el evento de entrega correctamente. ")
    }
    catch(error){
      console.log("error: ", error);
    }

    
    // Logic to handle the form submission
    // Example: console.log({ asunto, fecha, nombre, apellido, numeroPedido, contacto });
  };

  return (
    <div>
      <AdminNavbar />
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white rounded-lg p-4 flex flex-col items-center justify-center w-[35.625rem] h-[32.6875rem] justify-between">
          <div className="text-2xl text-black font-semibold lg:pb-[20px]">
            Entrega
          </div>
          <input
            type="text"
            value={asunto}
            onChange={(e) => setAsunto(e.target.value)}
            placeholder="Asunto"
            className="input-global"
          />
          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            className="input-global"
          />

          <label>Datos del cliente</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Nombre"
            className="input-global"
          />
          <input
            type="text"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            placeholder="Apellido"
            className="input-global"
          />
          <input
            type="text"
            value={numeroPedido}
            onChange={(e) => setNumeroPedido(e.target.value)}
            placeholder="Número de pedido"
            className="input-global"
          />
          <input
            type="text"
            value={contacto}
            onChange={(e) => setContacto(e.target.value)}
            placeholder="Contacto"
            className="input-global"
          />

          <button className="boton-global" onClick={handleEntrega}>
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEventEntrega;
