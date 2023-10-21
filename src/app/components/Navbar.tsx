import React from "react";
import Link from "next/link";
import Image from "next/image"; // Import the Image component

const Navbar = () => {
  return (
    <nav>
      <div className="flex flex-row justify-between bg-pink-lighter py-1">
        <div>
          <Image
            src="/img/makeup-woman-svgrepo-com.svg"
            width={48} // width based on w-12
            height={48} // height based on h-12
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
              width={24} // width based on w-6
              height={24} // height based on h-6
              alt="User"
            />
            <button className="mr-4 font-semibold">Sing Up</button>
            <button className="mr-4 font-semibold">Sing In</button>
          </div>
          <div className="flex flex-row">
            <Image
              src="/img/cart-shopping-svgrepo-com.svg"
              width={24} // width based on w-6
              height={24} // height based on h-6
              alt="Cart"
            />
            <button className="font-semibold flex-grow">Carrito</button>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-between bg-red-200">
        <button className="flex-grow border border-black text-center py-1">
          Galería
        </button>
        <button className="flex-grow border border-black text-center py-1">
          Tienda
        </button>
        <button className="flex-grow border border-black text-center py-1">
          Agenda
        </button>
        <button className="flex-grow border border-black text-center py-1">
          Sing out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
