"use client";

import { useState } from "react";
import Link from "next/link";
import UserNavbar from "../../../components/UserNavBar";

const ProductDetails = () => {
  // Suponiendo un precio fijo para el producto. Esto deberías obtenerlo de tus datos.
  const precioProducto = 100;

  const [cantidad, setCantidad] = useState(2);
  const [total, setTotal] = useState(precioProducto * cantidad);

  const handleCantidadChange = (e) => {
    const newCantidad = Number(e.target.value); // Convertir el valor a número
    setCantidad(newCantidad);
    setTotal(precioProducto * newCantidad);
  };

  return (
    <div className="bg-pink-lighter min-h-screen">
      <UserNavbar />
      <main className="flex justify-center items-center h-screen p-5">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl transition-all transform hover:scale-105">
          <h1 className="text-center text-2xl py-2 mb-3 border-b-2">
            Detalles del producto
          </h1>

          <div className="flex flex-row items-start justify-between mt-5 space-x-6">
            <div className="flex-1 flex justify-center items-center">
              <div className="rounded-md border border-gray-300 w-80 h-80 transition duration-300 hover:border-blue-500"></div>
            </div>

            <div className="flex-1 flex flex-col items-start space-y-3">
              <label className="text-gray-700">Categoría:</label>
              <label className="text-gray-700">Subcategoría:</label>
              <label className="text-gray-700">Descripción:</label>
              <label className="text-gray-700">Disponibles:</label>
              <label className="text-gray-700 font-medium">
                Precio: ${precioProducto}
              </label>
              <div className="flex items-center space-x-2 mt-3">
                <label className="text-sm font-medium text-gray-700">
                  Cantidad:
                </label>
                <input
                  type="number"
                  id="cantidad"
                  className="w-20 h-8 p-1 text-sm border rounded bg-gray-50 focus:border-blue-500"
                  value={cantidad}
                  onChange={handleCantidadChange}
                />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <label className="text-lg font-medium text-gray-700 block mb-3">
              Total: ${total}
            </label>
            <Link href="/pages/users/shoppingCart">
              <button className="boton-global">Agregar al carrito</button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetails;
