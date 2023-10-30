"use client";

import React, { useState } from "react";
import AdminNavbar from "@/app/components/AdminNavbar";
import axios from "axios";
import { useEffect } from "react";
import { storage } from "../../../../../backend/firebase/connection"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const AddProduct = () => {
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [isAvailable, setIsAvailable] = useState(false);
  const [file, setFile] = useState<File>();
  const [data, setData] = useState({});
  useEffect(() => {
    const uploadFile = () => {
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setPerc(progress);
        },
        (error) => {
          console.log(error)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  const handleProductUpload = async () => {

    if (file !== undefined) {
      try {
        const res = await axios.post("http://localhost:4000/api/addProduct", {
          name: title,
          price,
          cantStock: quantity,
          status: isAvailable,
          imageURL: data.img,
          description,
          category,
          subCategory,
        });

        console.log(res);
        alert("Se ha subido el producto a la tienda.");
      } catch (error: any) {
        alert("No se agregó el producto.");
        console.log(error);
      }
    } else {
      alert("No se ha seleccionado ningún archivo.");
    }
  };

  return (
    <div className="bg-pink-lighter min-h-screen">
      <AdminNavbar />
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
                {file && (
                  <img
                    src={URL.createObjectURL(file)}
                    className="rounded-sm w-72 h-64 object-cover"
                  />
                )}
              </div>
              <div className="flex justify-center items-center">
                <input
                  type="file"
                  accept="image/*"
                  className="text-xs py-1 px-2"
                  onChange={(e) => {
                    if (e.target.files && e.target.files.length > 0) {
                      setFile(e.target.files[0]);
                    }
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
                placeholder="Descripción"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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
