import React from "react";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

const EditImage = () => {
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
              />{" "}
              <input
                type="text"
                className="input-global"
                placeholder="Subcategoria"
              />{" "}
              <input
                type="text"
                className="input-global"
                placeholder="Titulo"
              />{" "}
              <input type="text" className="input-global" placeholder="Tag" />{" "}
              <input
                type="text"
                className="input-global"
                placeholder="Descripción"
              />
              <div>
                <input
                  type="checkbox" // Primer checkbox
                  id="checkbox1"
                  className="input-global"
                />
                <label htmlFor="checkbox1" className="text-black">
                  {" "}
                  ¿Quieres subirlo público?
                </label>
              </div>
              <div className="m-4">
                <button className="boton-global ">Guardar</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default EditImage;
