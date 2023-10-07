import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <input
        type="text"
        className="bg-opacity-50 bg-gray-300 rounded-xl py-2 px-8 mb-4"
        placeholder="Escribe tu nombre de usuario"
      />
      <button className="bg-pink-200 px-4 py-2 rounded-3xl hover:bg-pink-300">
        Iniciar sesión
      </button>
    </div>
  );
};

export default Login;
