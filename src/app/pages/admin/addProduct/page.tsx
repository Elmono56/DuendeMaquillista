"use client";

import React, { useState } from "react";
import Navbar from "@/app/components/Navbar";
import axios from "axios";

const AddProduct = () => {
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [isAvailable, setIsAvailable] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File>();

  const handleProductUpload = async () => {
    console.log("Categoría:", category);
    console.log("Subcategoría:", subCategory);
    console.log("Título:", title);
    console.log("Precio:", price);
    console.log("Cantidad:", quantity);
    console.log("¿Disponible?", isAvailable);

    try {
      const res = await axios.post("http://localhost:5000/api/addProduct", {
      name: title,
      price,
      cantStock: quantity,
      status: isAvailable,
      imageURL: selectedImage, //arreglar esto porque en la bd dice String
      // ESTO NO ESTA EN EL MODEL DE PRODUCT
      // subCategory,
      // ESTO NO ESTA EN EL FRONT
      // description,
      // brand,
      });
      console.log(res);
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <div className="bg-pink-lighter min-h-screen">
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <div className="w-2/4 bg-white rounded-lg p-8 shadow-lg">
          <div className="text-2xl text-gray-800 font-bold mb-8 text-center">
            Agregar a la tienda
          </div>
          <div className="flex items-start space-x-8">
            <div>
              <div
                id="prevImg"
                className="w-72 h-64 rounded-md border border-gray-300 mb-4 flex items-center justify-center"
              >
                {selectedImage && (
                  <img src={URL.createObjectURL(selectedImage)} />
                )}

                <span className="text-gray-400">Previsualización</span>
              </div>
              <div className="flex justify-center items-center">
                <input
                  type="file"
                  accept="image/*"
                  className="text-xs py-1 px-2" // Estilos con Tailwind
                  onChange={(e) => {
                    if (e.target.files && e.target.files.length > 0) {
                      setSelectedImage(e.target.files[0]);
                    }
                    //addImg();
                  }}
                />
              </div>
            </div>

            <div className="flex flex-col space-y-4 w-2/3 items-center">
              <input
                type="text"
                className="bg-gray-input border border-black rounded-lg p-2 w-full focus:outline-none"
                placeholder="Categoría"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
              <input
                type="text"
                className="bg-gray-input border border-black rounded-lg p-2 w-full focus:outline-none mb-4"
                placeholder="Subcategoría"
                value={subCategory}
                onChange={(e) => setSubCategory(e.target.value)}
              />
              <input
                type="text"
                className="bg-gray-input border border-black rounded-lg p-2 w-full focus:outline-none mb-4"
                placeholder="Título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                type="text"
                className="bg-gray-input border border-black rounded-lg p-2 w-full focus:outline-none mb-4"
                placeholder="Precio"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <input
                type="text"
                className="bg-gray-input border border-black rounded-lg p-2 w-full focus:outline-none mb-4"
                placeholder="Cantidad"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="checkbox1"
                  className="focus:ring-0 focus:outline-none"
                  checked={isAvailable}
                  onChange={() => setIsAvailable(!isAvailable)}
                />
                <label htmlFor="checkbox1" className="text-gray-700">
                  ¿El producto se encuentra disponible?
                </label>
              </div>
              <div className="mt-4">
                <button className="boton-global" onClick={handleProductUpload}>
                  Subir a la tienda
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
