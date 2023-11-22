"use client";

import React, { useState } from "react";
import AdminNavbar from "@/app/components/AdminNavbar";

const AddEvent = () => {
  const [event, setEvent] = useState("");
  const [date, setDate] = useState("");
  const [InitialHour, setInitialHour] = useState("");
  const [FinalHour, setFinalHour] = useState("");

  // PARA CUANDO SE AGREGUE EL DATE A LA BD
  // let dateString = "11/10/2023";
  // let parts = dateString.split('/');
  // // Se asume el formato dd/mm/aaaa
  // let day = parseInt(parts[0], 10);
  // let month = parseInt(parts[1], 10) - 1; // Se resta 1 al mes, ya que en JavaScript los meses van de 0 a 11
  // let year = parseInt(parts[2], 10);
  
  // let date = new Date(year, month, day);
  // console.log(date);

  return (
    <div>
      <AdminNavbar />
      <div className="flex justify-center items-center h-screen">
        <div
          className={`bg-white rounded-lg p-4 flex flex-col items-center justify-center w-[35.625rem] h-[24.6875rem] justify-between`}
        >
          <div className="text-2xl text-black font-semibold lg:pb-[20px]">
            Agregar compromiso
          </div>
          <label className="text-black font-semibold">Asunto</label>
          <input
            type="text"
            className="input-global"
            placeholder="Asunto"
            value={event}
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

          <button className="boton-global">Añadir compromiso</button>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;
