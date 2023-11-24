"use client";

import React, { useState } from "react";
import AdminNavbar from "@/app/components/AdminNavbar";
import { useRouter } from "next/navigation";

const AddEventOption = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const router = useRouter();

  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };

  const handleOption = () => {
    if (selectedValue == "Entrega") {
      router.push("/pages/admin/addEventEntrega");
    } else if (selectedValue == "Taller") {
      router.push("/pages/admin/addEventTaller");
    } else if (selectedValue == "Maquillaje") {
      router.push("/pages/admin/addEventMaquillaje");
    }
  };

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
            Curso/Taller:
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
