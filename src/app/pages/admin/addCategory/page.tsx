"use client";
import React, { useState } from "react";
import BasicCard from "@/app/components/BasicCard";
import Navbar from "@/app/components/Navbar";
import axios from "axios";

// async function doGetRequest() {
//   let res = await axios.get("http://localhost:5000/");

//   let data = res.data;
//   console.log(data);
// }
// doGetRequest();


const AddCategory = () => {
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleAddCategory = () => {
    console.log("Categoría:", category);
    console.log("Descripción:", description);
  }

  return (
    <div>
      <Navbar />
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

          <button
            className="boton-global"
            onClick={handleAddCategory}
          >
            Agregar
          </button>
        </BasicCard>
      </div>
    </div>
  );
};

export default AddCategory;
