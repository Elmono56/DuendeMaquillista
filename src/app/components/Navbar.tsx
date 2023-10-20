import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white text-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Enchanted Cosmetics</div>
        <div className="space-x-4">
          <Link href="pages/admin/Catalog">
            <button className="bg-pink-200 hover:bg-red-300 text-black py-2 px-4 rounded-lg">
              Galería
            </button>
          </Link>
          <Link href="/pages/admin/Shop">
            <button className="bg-pink-200 hover:bg-red-300 text-black py-2 px-4 rounded-lg">
              Productos
            </button>
          </Link>
          <Link href="/pages/users/shoppingCart">
            <button className="bg-pink-200 hover:bg-red-300 text-black py-2 px-4 rounded-lg">
              Carrito
            </button>
          </Link>
          <Link href="/pages/users/register">
            <button className="bg-pink-200 hover:bg-red-300 text-black py-2 px-4 rounded-lg">
              Registrarse
            </button>
          </Link>
          <Link href="/">
            <button className="bg-pink-200 hover:bg-red-300 text-black py-2 px-4 rounded-lg">
              Iniciar sesión
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
