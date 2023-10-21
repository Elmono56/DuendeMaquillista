"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/app/components/Navbar";
import BasicCard from "@/app/components/BasicCard";
import Cart from "@/app/components/Cart";
import Link from "next/link";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([] as Array<{
    productName: string;
    productPrice: string;
    productImage: string;
    quantity: number;
  }>);

  useEffect(() => {
    // Aquí se obtienen los productos del carrito del usuario
    // y luego establecerlos en el estado cartItems.
    const userCart = [
      {
        productName: "Niacinamida",
        productPrice: "$550",
        productImage: "https://www.larocheposay-centroamerica.com/-/media/project/loreal/brand-sites/lrp/america/latam/products/niacinamide/pure-niacinamide-10-serum/3337875791885_1-1.jpg?cx=0&cy=0&cw=600&ch=600&hash=3C8F65B5BF784E6BA1165BFB424D6539D4628FC2",
        quantity: 2,
      },
    ];

    setCartItems(userCart);
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <BasicCard>
          <div className="text-2xl text-black font-bold lg:pb-[20px]">
            Carrito de compras
          </div>
          <div className="overflow-y-scroll">
          {cartItems.map((item, index) => (
              <Cart
                key={index}
                productName={item.productName}
                productPrice={item.productPrice}
                productImage={item.productImage}
                quantity={item.quantity}
              />
            ))}
          </div>
          <div className="flex flex-wrap space-x-52 mt-5">
            <div className="flex flex-grow-1 flex-col">
              <button className="bg-white text-black pb-5">
                + Agregar producto
              </button>
              <button className="bg-red-200 rounded-3xl text-black w-52">
                Ver mis pedidos
              </button>
            </div>
            <div className="flex flex-grow-1 flex-col">
              <p className="bg-white text-black text-center pb-5">
                Subtotal: 128
              </p>
              <Link href="/pages/users/endPurchase">
                <button className="bg-red-200 rounded-3xl text-black w-52">
                  Finalizar compra
                </button>
              </Link>
            </div>
          </div>
        </BasicCard>
      </div>
    </>
  );
};

export default ShoppingCart;
