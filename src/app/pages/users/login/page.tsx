import React from "react";
import BasicCard from "@/app/components/BasicCard";
import Navbar from "@/app/components/Navbar";

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <BasicCard>
          <input
            type="text"
            className="input-global"
            placeholder="Escribe tu nombre de usuario"
          />
          <button className="boton-global">Iniciar</button>
        </BasicCard>
      </div>
    </div>
  );
};
export default Login;
