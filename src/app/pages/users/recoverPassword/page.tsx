"use client";
import React, { useState } from "react";
import BasicCard from "@/app/components/BasicCard";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Link from "next/link";

const RecoverPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <BasicCard>
          <div className="text-2xl text-black font-bold lg:pb-[20px]">
            Recuperar contraseña
          </div>
          <input
            type="text"
            className="input-global"
            placeholder="Correo electrónico"
            value={email}
          />
          <Link href="/">
            <button className="boton-global">Recuperar</button>
          </Link>
          {message && <p>{message}</p>}
        </BasicCard>
      </div>
      <Footer />
    </div>
  );
};

export default RecoverPassword;
