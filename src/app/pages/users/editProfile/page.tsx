"use client";

import React, { useState } from "react";
import Navbar from "@/app/components/Navbar";
import BasicCard from "@/app/components/BasicCard";
import Footer from "@/app/components/Footer";

const EditProfile = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSaveChanges = () => {
    console.log("Nombre:", nombre);
    console.log("Apellido:", apellido);
    console.log("Email:", email);
    console.log("Contraseña actual:", currentPassword);
    console.log("Contraseña nueva:", newPassword);
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <BasicCard>
          <div className="text-2xl text-black font-bold lg:pb-[20px]">
            Editar Perfil
          </div>
          <input
            type="text"
            className="input-global"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            type="text"
            className="input-global"
            placeholder="Apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
          <input
            type="text"
            className="input-global"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="input-global"
            placeholder="Contraseña actual"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          <input
            type="password"
            className="input-global"
            placeholder="Contraseña nueva"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <button className="boton-global" onClick={handleSaveChanges}>
            Guardar cambios
          </button>
        </BasicCard>
      </div>
      <Footer/>
    </div>
  );
};

export default EditProfile;
