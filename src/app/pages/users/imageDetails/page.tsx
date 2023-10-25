"use client";

import React from "react";
import Link from "next/link";
import UserNavbar from "../../../components/UserNavBar";

const ImageDetails = () => {
  return (
    <div className="bg-pink-lighter min-h-screen">
      <UserNavbar />
      <div className="flex justify-center items-center h-screen p-6">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-xl transition-all transform hover:scale-105">
          <div className="text-center text-3xl py-3 mb-4 border-b-2">
            Nombre del producto
          </div>
          <div className="flex items-center justify-between space-x-6">
            <div className="w-96 h-96 rounded-md border border-gray-300 transition duration-300 hover:border-blue-500"></div>
            <div className="text-center w-72 flex flex-col space-y-4">
              <div className="text-gray-700 font-semibold">Categoría:</div>
              <div className="text-gray-700 font-semibold">Subcategoría:</div>
              <div className="text-gray-700 font-semibold">Descripción:</div>
              <div className="mt-4">
                <Link href="/pages/users/productDetails">
                  <button className="boton-global">Contactar</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageDetails;
