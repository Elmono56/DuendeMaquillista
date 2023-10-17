"use client";

import React, { useState } from "react";
import BasicCard from "@/app/components/BasicCard";
import Footer from "@/app/components/Footer";
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
        <BasicCard>
          <div className="text-2xl text-black font-bold lg:pb-[20px]">
            Categoría principal
          </div>
          <input
            type="text"
            className="input-global"
            placeholder="Categoría principal"
            value={mainCategory}
            onChange={(e) => setMainCategory(e.target.value)}
          />
          <input
            type="text"
            className="input-global"
            placeholder="Categoría"
            value={subcategory}
            onChange={(e) => setSubcategory(e.target.value)}
          />

          <button className="boton-global" onClick={handleAddSubcategory}>
            Agregar
          </button>
        </BasicCard>
      </div>
      <Footer />
    </div>
  );
};

export default AddSubcategory;
