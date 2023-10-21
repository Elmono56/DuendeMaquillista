import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="flex flex-row justify-between bg-pink-lighter py-1">
        <div>
          <Image
            src="/img/makeup-woman-svgrepo-com.svg"
            width={48}
            height={48}
            alt="Makeup Woman"
          />
        </div>
        <div className="font-semibold text-2xl text-center">
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
            <button className="mr-4 font-semibold">Sing Up</button>
            <button className="mr-4 font-semibold">Sing In</button>
          </div>
          <div className="flex flex-row">
            <Image
              src="/img/cart-shopping-svgrepo-com.svg"
              width={24}
              height={24}
              alt="Cart"
            />
            <button className="font-semibold flex-grow">Carrito</button>
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
