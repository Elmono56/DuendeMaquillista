import React from "react";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

const AddProduct = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <div className="w-2/4 bg-white rounded-lg h-549 w-384">
          <div className="text-2xl text-black font-bold text-center">
            Agregar un producto
          </div>
          <div className="flex items-center space-between">
            <div className="w-80 h-64 rounded-xl border border-black m-4"></div>

            <div className="text-center w-72">
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
              <input
                type="text"
                className="input-global"
                placeholder="Precio"
              />{" "}
              <input
                type="text"
                className="input-global"
                placeholder="Cantidad"
              />
              <button className="boton-global ">Contactar</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default AddProduct;
