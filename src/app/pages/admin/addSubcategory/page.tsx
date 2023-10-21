"use client";

import React, { useState } from "react";
import BasicCard from "@/app/components/BasicCard";
import Navbar from "@/app/components/Navbar";

const AddSubcategory = () => {
  const [mainCategory, setMainCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");

  const handleAddSubcategory = () => {
    console.log("Categoría principal:", mainCategory);
    console.log("Subcategoría:", subcategory);
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <div
          className={`bg-white rounded-lg p-4 flex flex-col items-center justify-center w-[35.625rem] h-[20.6875rem] justify-between`}
        >
          <div className="text-2xl text-black lg:pb-[20px]">Subcategoría</div>
          <input
            type="text"
            className="input-global"
            placeholder="Categoría base"
            value={mainCategory}
            onChange={(e) => setMainCategory(e.target.value)}
          />
          <input
            type="text"
            className="input-global"
            placeholder="Subcategoría"
            value={subcategory}
            onChange={(e) => setSubcategory(e.target.value)}
          />

          <button className="boton-global" onClick={handleAddSubcategory}>
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddSubcategory;
