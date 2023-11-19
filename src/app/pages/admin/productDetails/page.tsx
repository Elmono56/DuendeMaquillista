"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import UserNavbar from "../../../components/UserNavBar";
import axios from "axios";

const ProductDetails = () => {
  // Suponiendo un precio fijo para el producto. Esto deberías obtenerlo de tus datos.
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [isAvailable, setIsAvailable] = useState(false);
  const [total, setTotal] = useState(0);
  const [quantityToBuy, setQuantityToBuy] = useState(1);
  const [image, setImage] = useState("");

  useEffect(() => {
    setTotal(Number(price) * quantityToBuy);
  }, [price, quantityToBuy]);

  useEffect(() => {
    async function getProduct() {
      let idProduct = localStorage.getItem("productID");
      const res = await axios.get(
        "https://us-central1-duendemaquillista-8f457.cloudfunctions.net/api/api/getProductById",
        { params: { id: idProduct } }
      );
      const product = res.data;
      setCategory(product.category);
      setSubCategory(product.subCategory);
      setDescription(product.description);
      setTitle(product.name);
      setPrice(product.price);
      setQuantity(product.cantStock);
      setIsAvailable(product.status);
      //falta el set de la imagen
    }
    getProduct();
  }, []);

  const handleAddToCart = async () => {
    const newQuantity = quantity - quantityToBuy;
    const idUser = localStorage.getItem("token");
    const idProduct = localStorage.getItem("productID");
    if (newQuantity < 0) {
      alert("No hay suficientes productos en stock");
      return;
    }
    const res = await axios.post("http://localhost:4000/api/updateShopCart", {
      user_id: idUser,
      products: {
        id: idProduct,
        name: title,
        price: price,
        image: image,
        quantity: quantityToBuy,
      },
    });
    console.log(res.status);
    if (res.status !== 400) {
      await axios.put("http://localhost:4000/api/updateQuantity", {
        id: idProduct,
        quantity: quantityToBuy,
      });
    }
    alert("Producto agregado al carrito");
  };

  return (
    <div className="bg-pink-lighter min-h-screen">
      <UserNavbar />
      <main className="flex justify-center items-center h-screen p-5">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl transition-all transform hover:scale-105">
          <h1 className="text-center text-2xl py-2 mb-3 border-b-2">
            Detalles del producto
          </h1>

          <div className="flex flex-row items-start justify-between mt-5 space-x-6">
            <div className="flex-1 flex justify-center items-center">
              <div className="rounded-md border border-gray-300 w-80 h-80 transition duration-300 hover:border-blue-500"></div>
            </div>

            <div className="flex-1 flex flex-col items-start space-y-3">
              <label className="text-gray-700">Categoría: {category}</label>
              <label className="text-gray-700">
                Subcategoría: {subCategory}
              </label>
              <label className="text-gray-700">
                Descripción: {description}
              </label>
              <label className="text-gray-700">Disponibles: {quantity}</label>
              <label className="text-gray-700 font-medium">
                Precio: ${price}
              </label>
              <div className="flex items-center space-x-2 mt-3">
                <label className="text-sm font-medium text-gray-700">
                  Cantidad: {quantity}
                </label>
                <input
                  type="number"
                  id="cantidad"
                  className="w-20 h-8 p-1 text-sm border rounded bg-gray-50 focus:border-blue-500"
                  value={quantityToBuy}
                  onChange={(e) => setQuantityToBuy(parseInt(e.target.value))}
                />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <label className="text-lg font-medium text-gray-700 block mb-3">
              Total: ${total}
            </label>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetails;
