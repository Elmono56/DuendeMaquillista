import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white text-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Enchanted Cosmetics</div>
        <div className="space-x-4">
          <button className="bg-pink-200 hover:bg-red-300 text-black py-2 px-4 rounded-lg">
            Galería
          </button>
          <button className="bg-pink-200 hover:bg-red-300 text-black py-2 px-4 rounded-lg">
            Productos
          </button>
          <button className="bg-pink-200 hover:bg-red-300 text-black py-2 px-4 rounded-lg">
            Carrito
          </button>
          <button className="bg-pink-200 hover:bg-red-300 text-black py-2 px-4 rounded-lg">
            Registrarse
          </button>
          <button className="bg-pink-200 hover:bg-red-300 text-black py-2 px-4 rounded-lg">
            Iniciar sesión
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
