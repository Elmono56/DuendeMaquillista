import React from "react";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

const ProductDetails = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <div className="w-2/4 bg-white rounded-lg h-549 w-384">
          <div className="text-2xl text-black font-bold text-center">
            Nombre del producto
          </div>
          <div className="flex items-center space-between">
            <div className="w-80 h-80 rounded-xl border border-black m-4"></div>
            <div className="text-center w-72">
              <div className="text-base text-black mt-10">Descripción:</div>
              <div className="text-base text-black mt-10">Disponibles: 2</div>
              <div className="text-base text-black mt-10">Precio: 4.00</div>
              <div className="mt-10">
                <button className="boton-global ">Contactar</button>
              </div>
            </div>
            <div className="text-center w-72">
              <div className="text-base text-black mt-10">Cantidad:</div>
              <input className="border border-black w-6  mt-10"></input>
              <div className="text-base text-black mt-10">Total: 0.00</div>
              <div className="mt-10">
                <button className="boton-global ">Agregar al carrito</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default ProductDetails;
