"use client";

import React, { useState } from "react";
import UserNavbar from "../../../components/UserNavBar";
import Link from "next/link";
import axios from "axios";
import UserController from "../../../../../backend/controllers/userController";
import { useRouter } from "next/navigation";

const Register = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleSubmit = () => {
    console.log("Nombre:", name);
    console.log("Apellido:", lastName);
    console.log("Correo:", email);
    console.log("Contraseña:", password);

    let data = {
      name,
      lastName,
      email,
      password,
      status: true,
      isAdmin: false,
    };

      const res = UserController.register("https://us-central1-duendemaquillista-8f457.cloudfunctions.net/api/api/createUser", data);
      if(res){
        alert("Usuario registrado.");
      } 
      else{
        alert("El usuario ya existe.");
      }
      router.push("/");
  };

  return (
    <div>
      <UserNavbar />
      <div className="flex justify-center items-center h-screen">
        <div
          className={`bg-white rounded-lg p-4 flex flex-col items-center justify-center w-[35.625rem] h-[24.6875rem] justify-between`}
        >
          <div className="text-2xl text-black lg:pb-[20px]">Crear Cuenta</div>
          <input
            type="text"
            className="input-global"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            className="input-global"
            placeholder="Apellido"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
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
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link href="/">
            <button className="boton-global" onClick={handleSubmit}>
              Crear
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
