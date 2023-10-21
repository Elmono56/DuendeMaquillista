import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="flex flex-row justify-between bg-pink-lighter py-4 ml-4">
        <div>
          <Image
            src="/img/makeup-woman-svgrepo-com.svg"
            width={60}
            height={60}
            alt="Makeup Woman"
          />
        </div>
        <div className="font-semibold text-2xl flex items-center">
          Enchanted Cosmetics
        </div>
        <div>
          <div className="flex flex-row">
            <Image
              src="/img/user-svgrepo-com.svg"
              width={24}
              height={24}
              alt="User"
            />
            <button className="mr-4 ">Sing Up</button>
            <button className="mr-4 ">Sing In</button>
          </div>
          <div className="flex py-2">
            <button className="mr-2">CARRITO</button>
            <Image
              src="/img/cart-shopping-svgrepo-com.svg"
              width={24}
              height={24}
              alt="Cart"
            />
          </div>
        </div>
      </div>
      <div className="flex w-full justify-between bg-red-200">
        <Link
          href="/pages/admin/Catalog"
          className="flex-grow border border-black text-center py-1"
        >
          <button>Galería</button>
        </Link>

        <Link
          href="/pages/admin/Shop"
          className="flex-grow border border-black text-center py-1"
        >
          <button>Tienda</button>
        </Link>

        <Link
          href="/"
          className="flex-grow border border-black text-center py-1"
        >
          <button>Agenda</button>
        </Link>

        <Link
          href="/"
          className="flex-grow border border-black text-center py-1"
        >
          <button>Sing out</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
