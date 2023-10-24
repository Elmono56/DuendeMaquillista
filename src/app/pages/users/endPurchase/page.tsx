"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import UserNavbar from "@/app/components/UserNavbar";

const EndPurchase = () => {
  const [cartItems, setCartItems] = useState(
    [] as Array<{
      productName: string;
      productPrice: number;
      productImage: string;
      quantity: number;
    }>
  );

  const [address, setAddress] = useState("");
  const [shipping, setShipping] = useState(3);

  useEffect(() => {
    const userCart = [
      {
        productName: "Producto 1",
        productPrice: 4,
        productImage: "",
        quantity: 100,
      },
      {
        productName: "Producto 2",
        productPrice: 5,
        productImage: "",
        quantity: 2,
      },
      {
        productName: "Producto 3",
        productPrice: 7,
        productImage: "",
        quantity: 1,
      },
      {
        productName: "Producto 4",
        productPrice: 9,
        productImage: "",
        quantity: 3,
      },
      {
        productName: "Producto 5",
        productPrice: 2,
        productImage: "",
        quantity: 1,
      },
      {
        productName: "Producto 6",
        productPrice: 6,
        productImage: "",
        quantity: 2,
      },
      {
        productName: "Producto 7",
        productPrice: 4,
        productImage: "",
        quantity: 1,
      },
    ];

    setCartItems(userCart);
  }, []);

  const calculateTotal = () => {
    let total = cartItems.reduce(
      (acc, item) => acc + item.productPrice * item.quantity,
      0
    );
    return total + shipping;
  };

  return (
    <div>
      <UserNavbar />
      <div className="flex justify-center items-center min-h-screen bg-pink-100">
        <div className="p-6 rounded-lg bg-white shadow-lg w-3/4 flex justify-between">
          <div className="w-1/2 pr-5">
            <h3 className="text-lg font-semibold mb-4">Resumen del Carrito</h3>
            <div style={{ maxHeight: "300px", overflowY: "auto" }}>
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center mb-4 border-b pb-2"
                >
                  <img
                    src={item.productImage}
                    alt={item.productName}
                    className="w-8 h-8 mr-4"
                  />
                  <span className="flex-grow">{item.productName}</span>
                  <span className="mx-4">{item.quantity}x</span>
                  <span className="font-medium w-9">
                    ${item.productPrice * item.quantity}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <label className="block text-sm font-bold mb-2">Dirección:</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Provincia, Canton, Distrito, Ubicación exacta"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>

          <div className="w-1/2 pl-5">
            <div className="border p-4 mb-4">
              <h3 className="mb-2 font-bold">Añadir comprobante sinpe</h3>
              <input
                className="w-full p-2 border"
                type="file"
                placeholder="Subir archivo"
              />
            </div>
            <div className="flex justify-between items-center mb-3">
              <span>Envío:</span>
              <span className="font-bold">${shipping}</span>
            </div>
            <div className="mt-6 flex justify-between items-center">
              <span>Total:</span>
              <span className="font-bold">${calculateTotal()}</span>
            </div>
            <div className="mt-6 flex justify-center">
              <Link href="/pages/users/endPurchase py-4">
                <button className="boton-global">Finalizar compra</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EndPurchase;
