"use client";
import React, { useState } from "react";
import UserNavbar from "@/app/components/Navbar";
import Link from "next/link";

const RecoverPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleRecoverPassword = async () => {
    // se manda el correo con el password de recuperacion
  };

  return (
    <div>
      <UserNavbar />
      <div className="flex justify-center items-center h-screen">
        <div
          className={`bg-white rounded-lg p-4 flex flex-col items-center justify-center w-[35.625rem] h-[24.6875rem]`}
        >
          <div className="text-2xl text-black lg:pb-[20px] my-8">
            Recuperación de contraseña
          </div>
          <input
            type="text"
            className="input-global"
            placeholder="Correo electrónico"
            value={email}
          />
          <Link href="/" className="my-8">
            <button className="boton-global" onClick={handleRecoverPassword}>
              Recuperar contraseña
            </button>
          </Link>
          {message && <p>{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default RecoverPassword;
