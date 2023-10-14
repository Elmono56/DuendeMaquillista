import React, { useState } from "react";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

const AddImage = () => {
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [description, setDescription] = useState("");
  const [isPublic, setIsPublic] = useState(false);

  const handleImageUpload = () => {
    console.log("Categoría:", category);
    console.log("Subcategoría:", subCategory);
    console.log("Título:", title);
    console.log("Tag:", tag);
    console.log("Descripción:", description);
    console.log("¿Público?", isPublic);
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <div className="w-2/4 bg-white rounded-lg h-549 w-384">
          <div className="text-2xl text-black font-bold text-center m-4">
            Agregar a la galería
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
                placeholder="Tag"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
              />
              <input
                type="text"
                className="input-global"
                placeholder="Descripción"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <div>
                <input
                  type="checkbox"
                  id="checkbox1"
                  className="input-global"
                  checked={isPublic}
                  onChange={() => setIsPublic(!isPublic)}
                />
                <label htmlFor="checkbox1" className="text-black">
                  ¿Quieres subirlo público?
                </label>
              </div>
              <div className="m-4">
                <button className="boton-global" onClick={handleImageUpload}>
                  Subir a la galería
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

export default AddImage;
