"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import UserNavbar from "../../../components/UserNavBar";
import axios from "axios";

const ImageDetails = () => {
  const [image, setImage] = useState({});
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    async function getData() {
      const id = localStorage.getItem("imageId");
      const res = await axios.get('https://us-central1-duendemaquillista-8f457.cloudfunctions.net/api/api/getGalPhoto', { params: { id } });
      setName(res.data.name);
      setImage(res.data.imageURL);
      setCategory(res.data.category);
      setSubcategory(res.data.subCategory);
      setDescription(res.data.description);
    } getData();
  }, []);


  return (
    <div className="bg-pink-lighter min-h-screen">
      <UserNavbar />
      <div className="flex justify-center items-center h-screen p-6">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-xl transition-all transform hover:scale-105">
          <div className="text-center text-3xl py-3 mb-4 border-b-2">
            {name}
          </div>
          <div className="flex items-center justify-between space-x-6">
            <div className="w-96 h-96 rounded-md border border-gray-300 transition duration-300 hover:border-blue-500"></div>
            <div className="text-center w-72 flex flex-col space-y-4">
              <div className="text-gray-700 font-semibold">Categoría: {category}</div>
              <div className="text-gray-700 font-semibold">Subcategoría: {subcategory}</div>
              <div className="text-gray-700 font-semibold">Descripción: {description}</div>
              <div className="mt-4">
                <Link href="/pages/users/productDetails">
                  <button className="boton-global">Contactar</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageDetails;
