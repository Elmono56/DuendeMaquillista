"use client";

import React, { useState } from "react";
import Navbar from "@/app/components/Navbar";
import BasicCard from "@/app/components/BasicCard";
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
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <BasicCard>
          <div className="text-2xl text-black font-bold lg:pb-[20px]">
            Crear Cuenta
          </div>
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
              Iniciar
            </button>
          </Link>
        </BasicCard>
      </div>
    </div>
  );
};

export default Register;
