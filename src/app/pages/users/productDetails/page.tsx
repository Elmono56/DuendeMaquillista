"use client";

import Link from "next/link";
import Navbar from "@/app/components/Navbar";

const ProductDetails = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <div
          className={`bg-white rounded-lg p-4 w-[45.625rem] h-[24.6875rem] justify-between`}
        >
          <h1 className="text-center text-3xl py-3">Detalles del producto</h1>
          <div className=" flex flex-row items-center justify-center justify-between">
            <div className="flex-1 flex justify-center items-center">
              <div className="rounded-md border border-black w-72 h-72"></div>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div className="flex flex-col items-center space-y-8">
                <label>Categoría:</label>
                <label>Subcategoría:</label>
                <label>Descripción:</label>
                <label>Disponibles:</label>
                <label>Precio:</label>
              </div>
            </div>

            <div className="flex-1 flex items-center justify-center">
              <div className="flex flex-col items-center space-y-8">
                <div className="flex flex-row items-center">
                  <label className="text-sm">Cantidad:</label>
                </div>
                <input
                  type="number"
                  id="cantidad"
                  className="w-20 h-8 p-2 text-sm border rounded"
                  value="2"
                />
                <label>Total: </label>
                <Link href="/pages/users/shoppingCart">
                  <button className="boton-global">Agregar al carrito</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
