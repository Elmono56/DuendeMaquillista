import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-pink-lighter">
      <div className="container mx-auto flex justify-between items-center py-4 px-8">
        <div className="flex items-center">
          <Image
            src="/img/makeup-woman-svgrepo-com.svg"
            width={60}
            height={60}
            alt="Makeup Woman"
          />
          <span className="ml-4 font-semibold text-2xl">
            Enchanted Cosmetics
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <Image
            src="/img/user-svgrepo-com.svg"
            width={24}
            height={24}
            alt="User"
          />
          <Link href="/pages/users/register" className="mr-4 hover:underline">
            <button>Sign Up</button>
          </Link>

          <Link href="/" className="mr-4 hover:underline">
            <button>Sign In</button>
          </Link>

          <Link
            href="/pages/users/shoppingCart"
            className="mr-4 hover:underline"
          >
            <button>CARRITO</button>
          </Link>

          <Image
            src="/img/cart-shopping-svgrepo-com.svg"
            width={24}
            height={24}
            alt="Cart"
          />
        </div>
      </div>
      <div className="border-t border-pink-400 bg-red-200">
        <div className="container mx-auto flex justify-between items-center py-2">
          <Link
            href="/pages/users/gallery"
            className="flex-grow border border-black text-center py-1 hover:bg-hover-pink transition duration-300"
          >
            <button>Galería</button>
          </Link>
          <Link
            href="/pages/admin/Shop"
            className="flex-grow border border-black text-center py-1 hover:bg-hover-pink transition duration-300"
          >
            <button>Tienda</button>
          </Link>
          <button
            className="flex-grow border border-black text-center py-1 hover:bg-hover-pink transition duration-300"
            onClick={() => alert("Función en desarrollo")}
          >
            Agenda
          </button>
          <Link
            href="/"
            className="flex-grow border border-black text-center py-1 hover:bg-hover-pink transition duration-300"
          >
            <button>Sign Out</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
