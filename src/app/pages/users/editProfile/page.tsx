"use client";

import React, { useState, useEffect } from "react";
import UserNavbar from "../../../components/UserNavBar";
import { useRouter } from "next/navigation";
import UserController from "../../../../../backend/controllers/userController";

const EditProfile = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    // necesito hacer un getUser con el id que se encuentra en localStorage.get('token')
    // y con esa data llenar los campos
    async function getData() {
      try {
        const userId = localStorage.getItem("token");
        const res = await UserController.getUser("https://us-central1-duendemaquillista-8f457.cloudfunctions.net/api/api/getUser", { params: {id: userId}});
        setNombre(res.name);
        setApellido(res.lastName);
        setEmail(res.email);
      } catch (error: any) {
        console.log(error);
      }
    }
    getData();
  }, []);


  const handleSaveChanges = async () => {
    // se necesita validar primero que la contraseña actual sea correcta
    try {
      const res = await UserController.validateAccess("https://us-central1-duendemaquillista-8f457.cloudfunctions.net/api/api/login", {
        email,
        password: currentPassword,
      });
      if (res.status == 401) {
        alert("La contraseña actual es incorrecta");
        return;
      }
      // si la contraseña es correcta, se procede a actualizar el usuario
      const userId = localStorage.getItem("token");
      const res2 = await UserController.updateUser("https://us-central1-duendemaquillista-8f457.cloudfunctions.net/api/api/updateUser", {
        id: userId,
        name: nombre,
        lastName: apellido,
        email,
        password: newPassword,
      });
      if (res2.status == 200) {
        alert("Usuario actualizado correctamente");
        router.push("/");
      } else {
        alert("No se pudo actualizar el usuario");
      }
    } catch (error: any) {
      console.log(error);
    }

  };

  return (
    <div>
      <UserNavbar />
      <div className="flex justify-center items-center h-screen">
        <div
          className={`bg-white rounded-lg p-4 flex flex-col items-center justify-center w-[35.625rem] h-[29.6875rem] justify-between`}
        >
          <div className="text-2xl text-black lg:pb-[20px]">Editar Perfil</div>
          <input
            type="text"
            className="input-global"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          <input
            type="text"
            className="input-global"
            placeholder="Apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            required
          />
          <input
            type="text"
            className="input-global"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
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
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
