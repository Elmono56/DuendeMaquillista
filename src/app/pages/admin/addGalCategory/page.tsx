"use client";
import React, { useState } from "react";
import BasicCard from "@/app/components/BasicCard";
import AdminNavbar from "@/app/components/AdminNavbar";
import CategoryGalController from "../../../../../backend/controllers/categoryGalController";

const AddCategory = () => {
  const [category, setCategory] = useState("");

  const handleAddCategory = async () => {
    try {
      CategoryGalController.createCategory("https://us-central1-duendemaquillista-8f457.cloudfunctions.net/api/api/createCategory", {
        name: category,
      })
      alert("Categoría agregada");
    } catch (error: any) {
      console.log(error);
      alert("La categoría ya existe.");
    }
  };

  return (
    <div>
      <AdminNavbar />
      <div className="flex justify-center items-center h-screen">
        <BasicCard>
          <div className="text-2xl text-black font-bold lg:pb-[20px]">
            Categoría
          </div>
          <input
            type="text"
            className="input-global"
            placeholder="Categoría"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <button className="boton-global" onClick={handleAddCategory}>
            Agregar
          </button>
        </BasicCard>
      </div>
    </div>
  );
};

export default AddCategory;
