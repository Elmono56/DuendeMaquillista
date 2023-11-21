"use client";

import React, { useState } from "react";
import AdminNavbar from "@/app/components/AdminNavbar";

import { useRouter } from "next/navigation";
import Link from "next/link";

const EditEvent = () => {
  const [event, setEvent] = useState("");
  const [date, setDate] = useState("");
  const [InitialHour, setInitialHour] = useState("");
  const [FinalHour, setFinalHour] = useState("");

  return (
    <div>
      <AdminNavbar />
      <div className="flex justify-center items-center h-screen">
        <div
          className={`bg-white rounded-lg p-4 flex flex-col items-center justify-center w-[35.625rem] h-[24.6875rem] justify-between`}
        >
          <div className="text-2xl text-black font-semibold lg:pb-[20px]">
            Editar compromiso
          </div>
          <label className="text-black font-semibold">Asunto</label>
          <input
            type="text"
            className="input-global"
            placeholder="Asunto"
            disabled
          />

          <label className="text-black font-semibold">Fecha</label>

          <input
            type="date"
            className="input-global"
            placeholder="Fecha"
            value={date}
          />
          <label className="text-black font-semibold">Duración</label>
          <div className="flex items-center justify-center justtify-between">
            <input
              type="time"
              className="input-global mr-4"
              placeholder="HorarioInicial"
              value={InitialHour}
            />

            <input
              type="time"
              className="input-global"
              placeholder="HorarioFinal"
              value={FinalHour}
            />
          </div>

          <button className="boton-global">Editar compromiso</button>
        </div>
      </div>
    </div>
  );
};

export default EditEvent;
