"use client";

import React, { useState } from "react";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

const EditProduct = () => {
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [isAvailable, setIsAvailable] = useState(false);

  const handleSaveProduct = () => {
    console.log("Categoría:", category);
    console.log("Subcategoría:", subCategory);
    console.log("Título:", title);
    console.log("Precio:", price);
    console.log("Cantidad:", quantity);
    console.log("¿Disponible?", isAvailable);
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <div className="w-2/4 bg-white rounded-lg h-549 w-384">
          <div className="text-2xl text-black font-bold text-center m-4">
            Editar producto
          </div>
          <div className="flex items-center space-between">
            <div>
              <div className="w-72 h-64 rounded-xl border border-black m-4"></div>
              <div className="flex justify-center items-center m-4">
                <button className="boton-global">Seleccionar imagen</button>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center">
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
                placeholder="Subcategoría"
                value={subCategory}
                onChange={(e) => setSubCategory(e.target.value)}
              />
              <input
                type="text"
                className="input-global"
                placeholder="Título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                type="text"
                className="input-global"
                placeholder="Precio"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <input
                type="text"
                className="input-global"
                placeholder="Cantidad"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
              <div>
                <input
                  type="checkbox"
                  id="checkbox1"
                  className="input-global"
                  checked={isAvailable}
                  onChange={() => setIsAvailable(!isAvailable)}
                />
                <label htmlFor="checkbox1" className="text-black">
                  ¿El producto se encuentra disponible?
                </label>
              </div>
              <div className="m-4">
                <button className="boton-global" onClick={handleSaveProduct}>
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EditProduct;
