"use client";

import { useState } from "react"; // Importa useState desde React
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

const ProductDetails = () => {
  const [cantidad, setCantidad] = useState(1);
  const precioUnitario = 10;

  const actualizarTotal = () => {
    const total = cantidad * precioUnitario;

    setCantidad(total);
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white rounded-lg h-[18rem] w-[40.5rem] flex flex-row">
          <div className="flex-1 flex justify-center items-center">
            <div className="rounded-xl border border-black w-48 h-48"></div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="flex flex-col items-center space-y-8">
              <label>Descripción:</label>
              <label>Disponibles:</label>
              <label>Precio: {precioUnitario}</label>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <div className="flex flex-col items-center space-y-8">
              <div className="flex flex-row items-center">
                <label className="text-sm">Cantidad:</label>
                <input
                  type="number"
                  id="cantidad"
                  className="w-20 h-8 p-2 text-sm border rounded"
                  value={cantidad}
                  onChange={(e) => setCantidad(parseInt(e.target.value))}
                />
              </div>
              <label>Total: {cantidad * precioUnitario}</label>
              <button className="boton-global" onClick={actualizarTotal}>
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
