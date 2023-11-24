"use client";

import React, { useState } from "react";
import UserNavbar from "./components/UserNavBar";
import { useRouter } from "next/navigation";
import Link from "next/link";
import UserController from "../../backend/controllers/userController"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const req = await UserController.login("https://us-central1-duendemaquillista-8f457.cloudfunctions.net/api/api/login", email, password);
      console.log("email y pass: ", email, password)
      const type = req.type;
      if (type == "admin") {
        console.log("se logueó un admin");
        localStorage.setItem("token", req.user._id);
        router.push("/pages/admin/Catalog");
      } else if (type == "user") {
        console.log(" se logueó un user");
        localStorage.setItem("token", req.user._id);
        router.push("/pages/users/Catalog");
      }
      else{
        alert("Este usuario no existe o la contraseña es incorrecta. ");
      }
    }
    catch (error: any) {
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
