"use client";

import React from "react";
import Link from "next/link";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

const ImageDetails = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white rounded-lg h-549 w-384">
          <div className="text-2xl text-black font-bold text-center">
            Nombre del producto
          </div>
          <div className="flex items-center space-between">
            <div className="w-80 h-80 rounded-xl border border-black m-4"></div>
            <div className="text-center w-72">
              <div className="text-base text-black mt-10">Categoría:</div>
              <div className="text-base text-black mt-10">Subcategoría:</div>
              <div className="text-base text-black mt-10">Descripción:</div>
              <div className="mt-10">
                <Link href="/pages/users/productDetails">
                  <button className="boton-global ">Contactar</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ImageDetails;
