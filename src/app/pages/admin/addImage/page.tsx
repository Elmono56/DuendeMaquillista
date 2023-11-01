"use client";

import React, { useState } from "react";
import AdminNavbar from "@/app/components/AdminNavbar";
import axios from "axios";
import { useEffect } from "react";
import { storage } from "../../../../../backend/firebase/connection"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
const AddImage = () => {
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [description, setDescription] = useState("");
  const [isPublic, setIsPublic] = useState(false);
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
  const handleImageUpload = async () => {
    console.log("Categoría:", category);
    console.log("Subcategoría:", subCategory);
    console.log("Título:", title);
    console.log("Tag:", tag);
    console.log("Descripción:", description);
    console.log("¿Público?", isPublic);
    console.log("Imagen:", data.img);
    if (file !== undefined) {
      try {
        const res = await axios.post("http://localhost:4000/api/addGalPhoto", {
          name: title,
          imageURL: data.img,
          description,
          status: isPublic,
          tags: tag,
          category, 
          subCategory,
        });

        console.log(res.data);
        alert("Se ha subido la imagen a la galería.");
      } catch (error: any) {
        alert("No se agregó la imagen.");
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
            Agregar Imagen
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
                className="bg-gray-input border border-black rounded-lg p-2 w-full focus:outline-none "
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
                placeholder="Tag"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
              />
              <textarea
                className="bg-gray-input border border-black rounded-lg p-2 w-full focus:outline-none mb-4"
                placeholder="Descripción"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="checkbox1"
                  className="focus:ring-0 focus:outline-none"
                  checked={isPublic}
                  onChange={() => setIsPublic(!isPublic)}
                />
                <label htmlFor="checkbox1" className="text-gray-700">
                  ¿Quieres subirlo público?
                </label>
              </div>
              <div className="mt-4">
                <button className="boton-global" onClick={handleImageUpload}>
                  Subir a la galería
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddImage;
