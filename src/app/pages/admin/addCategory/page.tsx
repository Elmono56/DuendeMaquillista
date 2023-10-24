"use client";
import React, { useState } from "react";
import BasicCard from "@/app/components/BasicCard";
import AdminNavbar from "@/app/components/AdminNavbar";
import axios from "axios";

// async function doGetRequest() {
//   let res = await axios.get("http://localhost:4000/");

//   let data = res.data;
//   console.log("Prueba> ", data);
// }
// doGetRequest();

const AddCategory = () => {
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleAddCategory = async () => {
    console.log("Categoría:", category);
    console.log("Descripción:", description);
    try {
      const res = await axios.post("http://localhost:4000/api/createCategory", {
        name: category,
        description,
      });
      console.log(res.data);
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
          <input
            type="text"
            className="input-global"
            placeholder="Descripción"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
