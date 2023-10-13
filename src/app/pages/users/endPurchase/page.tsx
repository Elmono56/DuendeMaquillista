import React from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import BasicCard from "@/app/components/BasicCard";

const EndPurchase = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <div className="w-2/4 bg-white rounded-lg h-549 w-384">
          <div className="flex items-center space-between">
            <div className="text-center w-72">
            </div>
            <div className="w-80 h-80 rounded-xl border border-black m-4"></div>
          </div>
          <button className="boton-global ml-96 mb-4">Finalizar compra</button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default EndPurchase;