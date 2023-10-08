import React from "react";
import Navbar from "@/app/components/Navbar";
import BasicCard from "@/app/components/BasicCard";
import Footer from "@/app/components/Footer";

const EditProfile = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <BasicCard>
          <div className="text-2xl text-black font-bold lg:pb-[20px]">
            Editar Perfil
          </div>
          <input type="text" className="input-global" placeholder="Nombre" />
          <input type="text" className="input-global" placeholder="Apellido" />
          <input
            type="text"
            className="input-global"
            placeholder="Correo electrónico"
          />
          <input
            type="text"
            className="input-global"
            placeholder="Contraseña actual"
          />
          <input
            type="text"
            className="input-global"
            placeholder="Contraseña nueva"
          />
          <button className="boton-global">Guardar cambios</button>
        </BasicCard>
      </div>
      <Footer />
    </div>
  );
};

export default EditProfile;
