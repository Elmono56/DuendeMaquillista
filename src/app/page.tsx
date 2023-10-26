"use client";

import React, { useState } from "react";
import UserNavbar from "./components/UserNavBar";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

async function makeRequest() {
  const config = {
    method: "get",
    url: "http://localhost:4000/",
  };

  let res = await axios(config);

  console.log(res.data);
}

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:4000/api/login", {
        email,
        password,
      });

      const { type, user } = res.data;
      console.log("Usuario: ", user._id);

      if (type == "admin") {
        console.log("se logueó un admin");
        localStorage.setItem("token", user._id);
        router.push("/pages/admin/Catalog");
      } else if (type == "user") {
        console.log(" se logueó un user");
        localStorage.setItem("token", user._id);
        router.push("/pages/users/Catalog");
      }
    } catch (error: any) {
      console.log(error);
      alert("Este usuario no existe o la contraseña es incorrecta. ");
    }
  };

  return (
    <div>
      <UserNavbar />
      <div className="flex justify-center items-center h-screen">
        <div
          className={`bg-white rounded-lg p-4 flex flex-col items-center justify-center w-[35.625rem] h-[24.6875rem] justify-between`}
        >
          <div className="text-2xl text-black font-semibold lg:pb-[20px]">
            Ingresar
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
          <Link href="/pages/users/recoverPassword"> 
          <div>¿Olvidó la contraseña?</div>
          </Link>
          <button
            className="boton-global"
            onClick={() => {
              handleLogin();
            }}
          >
            Iniciar sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
