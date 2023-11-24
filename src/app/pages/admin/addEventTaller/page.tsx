"use client";
import React, { useState } from "react";
import AdminNavbar from "@/app/components/AdminNavbar";

const AddEventTaller = () => {
  const [asunto, setAsunto] = useState("");
  const [horaInicial, setHoraInicial] = useState("");
  const [horaFinal, setHoraFinal] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [fecha, setFecha] = useState("");

  const handleTaller = async () => {
    // Logic for handling form submission
    // Example: console.log({ asunto, fecha, horaInicial, horaFinal, descripcion });
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
          <label>Fecha</label>
          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            className="input-global"
          />
          <label>Rango de horas</label>
          <div className="flex">
            <input
              type="time"
              value={horaInicial}
              onChange={(e) => setHoraInicial(e.target.value)}
              className="input-global mr-4"
            />
            <input
              type="time"
              value={horaFinal}
              onChange={(e) => setHoraFinal(e.target.value)}
              className="input-global"
            />
          </div>
          <input
            type="text"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            placeholder="Descripción"
            className="input-global"
          />
          <button className="boton-global" onClick={handleTaller}>
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEventTaller;
