"use client";
import React, { useState } from "react";
import UserNavbar from "../../../components/UserNavBar";
import Link from "next/link";
import axios from "axios";
import emailjs from "emailjs-com";

const RecoverPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = async (email: string, name: string, password: string) => {
    const templateParams = {
      name,
      email,
      newPassword: password,
      pageName: "Enchanted Cosmetics",
    }
    await axios.put("http://localhost:4000/api/updatePassword", {
      email,
      newPassword: password,
      });
    await emailjs.send(
      "service_ai4lqh7",
      "template_b0quhn8",
      templateParams,
      "u3RlL4mLn_VSW5VgU"
    ).then((res) => {
      console.log("Email successfully sent!", res.text, res.status);
      setMessage("Se ha enviado un correo con la nueva contraseña");
    }).catch((err) => {
      console.log(err);
    });
  };

  const handleRecoverPassword = async () => {
    // se manda el correo con el password de recuperacion
    const res = await axios.get("http://localhost:4000/api/getUserByEmail", {
      params: {
        email,
      },
    });
    // generar contrasena nueva
    const newPassword = Math.random().toString(36).slice(-8);
    await sendEmail(email, res.data.name, newPassword);
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
            onChange={(e) => setEmail(e.target.value)}
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
