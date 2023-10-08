import React from "react";
import Navbar from "@/app/components/Navbar";
import BasicCard from "@/app/components/BasicCard";
import Footer from "@/app/components/Footer";

const Register = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <BasicCard>
          <div className="text-2xl text-black font-bold lg:pb-[20px]">
            Crear Cuenta
          </div>
          <input type="text" className="input-global" placeholder="Nombre" />
          <input type="text" className="input-global" placeholder="Apellido" />
          <input
            type="text"
            className="input-global"
            placeholder="Correo electrónico"
          />
          <input
            type="password"
            className="input-global"
            placeholder="Contraseña"
          />
          <button className="boton-global">Iniciar</button>
        </BasicCard>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
