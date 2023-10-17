"use client";

import React, { useState } from "react";
import BasicCard from "@/app/components/BasicCard";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
const axios = require('axios');

async function makeRequest() {

    const config = {
        method: 'get',
        url: 'http://localhost:4000/'
    }

    let res = await axios(config)

    console.log(res.data);
}

const Login = () => {
  makeRequest();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <BasicCard>
          <div className="text-2xl text-black font-bold lg:pb-[20px]">
            Inicio de sesión
          </div>
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
          <button className="boton-global" onClick={handleLogin}>
            Iniciar sesión
          </button>
        </BasicCard>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
