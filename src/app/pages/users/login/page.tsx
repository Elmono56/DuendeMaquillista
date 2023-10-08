import React from "react";
import BasicCard from "@/app/components/BasicCard";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <BasicCard>
          <div className="text-2xl text-black font-bold lg:pb-[20px]">
            Inicio de seisón
          </div>
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
          <button className="boton-global">Iniciar sesión</button>
        </BasicCard>
      </div>
      <Footer />
    </div>
  );
};
export default Login;
