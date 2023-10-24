"use client";

import React, { useState } from "react";
import UserNavbar from "@/app/components/UserNavbar";
import Link from "next/link";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

    try {
      const res = axios.post("http://localhost:4000/api/createUser", data);
      console.log(res);
    } catch (error: any) {
      console.log(error);
      alert("La categoría ya existe. ");
    }
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
