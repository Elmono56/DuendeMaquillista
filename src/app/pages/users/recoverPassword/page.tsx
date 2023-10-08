import React from "react";
import BasicCard from "@/app/components/BasicCard";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

const RecoverPassword = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <BasicCard>
          <div className="text-2xl text-black font-bold lg:pb-[20px]">
            Recuperar contraseña
          </div>
          <input
            type="text"
            className="input-global"
            placeholder="Correo electrónico"
          />
          <button className="boton-global">Recuperar</button>
        </BasicCard>
      </div>
      <Footer />
    </div>
  );
};

export default RecoverPassword;
