import React from "react";
import BasicCard from "@/app/components/BasicCard";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <BasicCard>
          <div className="text-2xl text-black font-bold lg:pb-[20px]">
            Categoría
          </div>
          <input type="text" className="input-global" placeholder="Categoría" />

          <button className="boton-global">Agregar</button>
        </BasicCard>
      </div>
      <Footer />
    </div>
  );
};

export default page;
