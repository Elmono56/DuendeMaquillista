"use client";

import Link from "next/link";
import Navbar from "@/app/components/Navbar";

const ProductDetails = () => {
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
              <label>Precio:</label>
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
                  value="2"
                />
              </div>
              <label>Total: </label>
              <Link href="/pages/users/shoppingCart">
                <button className="boton-global">Agregar al carrito</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
