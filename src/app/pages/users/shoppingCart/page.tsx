"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/app/components/AdminNavbar";
import axios from "axios";

const ShoppingCart = () => {
  const idUser = localStorage.getItem("token");
  const router = useRouter();

  const [cartItems, setCartItems] = useState(
    [] as Array<{
      productName: string;
      productPrice: number;
      productImage: string;
      quantity: number;
    }>
  );

  useEffect(() => {
    async function getShopCart() {
      try {
        const res = await axios.get("http://localhost:4000/api/getShopCart", { params: { user_id: idUser } });
        const transformedProducts = res.data.products.map((product: { name: string; price: number; image: string; quantity: number; }) => ({
          productName: product.name,
          productPrice: product.price,
          productImage: product.image,
          quantity: product.quantity
        }));
        setCartItems(transformedProducts);
      } catch (error) {
        console.error(error);
      }
    }
    getShopCart();
  }, []);

  const handleQuantityChange = (
    index: number,
    direction: "increase" | "decrease"
  ) => {
    const newItems = [...cartItems];
    if (direction === "increase") {
      newItems[index].quantity += 1;
    } else if (newItems[index].quantity > 1) {
      newItems[index].quantity -= 1;
    }
    setCartItems(newItems);
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.productPrice * item.quantity,
    0
  );

  const handleGoShopping = () => {
    router.push("/pages/users/Shop");
  };

  const handleEndPurchase = () => {
    router.push("/pages/users/endPurchase");
  };

  return (
    <div>
      <Navbar />

      <div className="flex justify-center items-center min-h-screen bg-pink-100">
        <div className="p-6 rounded-lg bg-white shadow-lg w-96">
          <header className="text-center">
            <h2 className="text-3xl font-bold mb-5">Carrito de compras</h2>
          </header>

          <main>
            <div style={{ maxHeight: "300px", overflowY: "auto" }}>
              {" "}
              {/* Add this div */}
              {cartItems.map((item, index) => (
                <div key={index} className="flex items-center mb-4">
                  <img
                    src={item.productImage}
                    alt={item.productName}
                    className="w-8 h-8 mr-4"
                  />
                  <span className="flex-grow">{item.productName}</span>
                  <div className="flex items-center space-x-1">
                    <button
                      className="text-gray-500"
                      onClick={() => handleQuantityChange(index, "decrease")}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="text-gray-500"
                      onClick={() => handleQuantityChange(index, "increase")}
                    >
                      +
                    </button>
                  </div>
                  <span className="ml-4">${item.productPrice}</span>
                </div>
              ))}
            </div>{" "}
            {/* End the div */}
          </main>

          <footer className="mt-4">
            <button className="w-full mb-3 py-2 border border-black text-black hover:bg-gray-100 transition duration-300"
              onClick={handleGoShopping}>
              + Agregar producto
            </button>
            <div className="flex justify-between items-center mb-3">
              <span>Subtotal:</span>
              <span className="font-bold">{subtotal.toFixed(2)}</span>
            </div>
            <Link
              href="/pages/users/endPurchase"
              className="block w-full flex justify-center items-center"
            >
              <button className="boton-global" onClick={handleEndPurchase}>Finalizar compra</button>
            </Link>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
