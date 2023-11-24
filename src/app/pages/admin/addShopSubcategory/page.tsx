"use client";

import React, { useState } from "react";
import AdminNavbar from "@/app/components/AdminNavbar";
import SubCategoryShopController from "../../../../../backend/controllers/subCategoryShopController";

const AddShopSubcategory = () => {
  const [mainCategory, setMainCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");

  const handleClean = () => {
    setMainCategory("");
    setSubcategory("");
  };

  const handleAddSubcategory = async () => {
    try {
      SubCategoryShopController.createShopSubCategory("http://localhost:4000/api/createShopSubCategory", {
        name: subcategory,
        upperC: mainCategory,
      });
      alert("Subcategoría agregada");
      handleClean();
    } catch (error: any) {
      console.log(error.response.status);
      if (error.response.status === 400) {
        console.log(error.response.data.ErrorN);
        if (error.response.data.ErrorN === 1) {
          alert("La subcategoría ya existe");
        } else if (error.response.data.ErrorN === 2) {
          alert("La categoría base no existe");
        }
      }
    }
  };

  return (
    <div>
      <AdminNavbar />
      <div className="flex justify-center items-center h-screen">
        <div
          className={`bg-white rounded-lg p-4 flex flex-col items-center justify-center w-[35.625rem] h-[20.6875rem] justify-between`}
        >
          <div className="text-2xl text-black font-bold lg:pb-[20px]">
            Subcategoría
          </div>
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

export default AddShopSubcategory;
