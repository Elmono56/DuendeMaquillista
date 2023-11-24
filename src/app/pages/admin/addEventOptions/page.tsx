"use client";

import React, { useState } from "react";
import AdminNavbar from "@/app/components/AdminNavbar";

const AddEventOption = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleOption = async () => {};

  return (
    <div>
      <AdminNavbar />
      <div className="flex flex-col justify-center items-center h-screen">
        <div
          className={`bg-white rounded-lg p-4 flex flex-col items-center justify-center w-[35.625rem] h-[24.6875rem] justify-between`}
        >
          {" "}
          <label>
            Maquillaje:
            <input
              type="radio"
              value="Maquillaje"
              checked={selectedValue === "Maquillaje"}
              onChange={handleChange}
            />
          </label>
          <label>
            Taller-taller:
            <input
              type="radio"
              value="Taller"
              checked={selectedValue === "Taller"}
              onChange={handleChange}
            />
          </label>
          <label>
            Entrega:
            <input
              type="radio"
              value="Entrega"
              checked={selectedValue === "Entrega"}
              onChange={handleChange}
            />
          </label>
          <button
            className="boton-global w-28"
            onClick={() => {
              handleOption();
            }}
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEventOption;
