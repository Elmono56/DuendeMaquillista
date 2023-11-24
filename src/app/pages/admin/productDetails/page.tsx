"use client";

import { useState, useEffect } from "react";
import AdminNavbar from "@/app/components/AdminNavbar";
import ProductController from "../../../../../backend/controllers/productController";

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
      const res = await ProductController.getProductById(
        "https://us-central1-duendemaquillista-8f457.cloudfunctions.net/api/api/getProductById",
        { params: { id: idProduct } }
      );
      const product = res.data;
      setCategory(product.category);
      setSubCategory(product.subCategory);
      setDescription(product.description);
      setImage(product.imageURL);
      setTitle(product.name);
      setPrice(product.price);
      setQuantity(product.cantStock);
      setIsAvailable(product.status);
      //falta el set de la imagen
    }
    getProduct();
  }, []);

  return (
    <div className="bg-pink-lighter min-h-screen">
      <AdminNavbar />
      <main className="flex justify-center items-center h-screen p-5">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl transition-all transform hover:scale-105">
          <h1 className="text-center text-2xl py-2 mb-3 border-b-2">
            Detalles del producto
          </h1>

          <div className="flex flex-row items-start justify-between mt-5 space-x-6">
            <div className="flex-1 flex justify-center items-center">
              <div className="rounded-md border border-gray-300 w-80 h-80 transition duration-300 hover:border-blue-500"><img src={image} alt="" /></div>
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
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetails;
