"use client";

import React, { use, useState, useEffect } from "react";
import AdminNavbar from "@/app/components/AdminNavbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

const Catalog = () => {
  // Categorías y subcategorías dinámicas
  const [categories, setCategories] = useState([
    { name: "Maquillaje básico", subcategories: [] },
    {
      name: "Social para eventos",
      subcategories: ["Bodas", "Celebraciones especiales"],
    },
    {
      name: "Caracterización",
      subcategories: ["Catrinas", "Hadas", "Villanos", "Zombis"],
    },
    // ... puedes añadir más categorías y subcategorías
  ]);
  const [token, setToken] = useState("");
  const router = useRouter();

  // useEffect(() => {
  //   // Intenta obtener el token desde el almacenamiento local
  //   const storedToken = localStorage.getItem("token");
  //   console.log("Token: ", storedToken);
  //   if (storedToken) {
  //     // Si se encuentra un token en el almacenamiento local, configúralo en el estado
  //     setToken(storedToken);
  //   } else {
  //     // Si no hay token en el almacenamiento local, redirige a la página de inicio de sesión
  //     router.push("/");
  //   }
  // }, []);

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get("http://localhost:4000/api/getCategories");
        const categoriesData = res.data;

        // Mapear las categorías y obtener las subcategorías para cada categoría
        const formattedCategories = await Promise.all(
          categoriesData.map(async (category: { name: string }) => {
            const subRes = await axios.get(
              "http://localhost:4000/api/getSubCategoriesFromCategory",
              {
                params: { category: category.name },
              }
            );
            console.log("Subcategoria: ", subRes);

            const subcategories = subRes.data.map(
              (subcategory: { name: string }) => subcategory.name
            );
            return {
              name: category.name,
              subcategories,
            };
          })
        );

        // Imprimir el resultado
        console.log(formattedCategories);

        // Guardar el resultado en el estado
        setCategories(formattedCategories);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  useEffect(() => {
    //get all images for a catalog
    async function getData() {
      try {
        const res = await axios.get("http://localhost:4000/api/getImages");
        const imagesData = res.data;
        console.log("Images: ", imagesData);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }
  );
  

  // Galería de fotos dinámica
  const [gallery, setGallery] = useState(
    new Array(20).fill({
      imgSrc: "/path/to/image.jpg",
      title: "Título de pinga",
    })
  );

  // Estado para el menú desplegable
  const [dropdownVisible, setDropdownVisible] = useState(null);

  const toggleDropdown = (idx) => {
    if (dropdownVisible === idx) {
      setDropdownVisible(null);
    } else {
      setDropdownVisible(idx);
    }
  };

  return (
    <div>
      <AdminNavbar />
      <div className="bg-pink-lighter min-h-screen p-6">
        <h1>
          <title>Tienda</title>
        </h1>
        <div className="flex">
          {/* Sección de Categorías y Subcategorías */}
          <div
            className="w-1/4 bg-white border rounded-md p-4 overflow-y-auto"
            style={{ maxHeight: "80vh" }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Buscar en la tienda..."
                  className="border rounded-md p-1.5 text-sm w-2/3"
                />
                <button className="boton-global ml-2">Buscar</button>

                {/* Botones replicados */}
                <div className="ml-2 relative">
                  <button
                    onClick={() => toggleDropdown(-1)} // Aquí usamos -1 para identificar este menú desplegable específico
                    style={{ fontSize: "10px", lineHeight: "10px" }}
                  >
                    •<br />•<br />•
                  </button>
                  {dropdownVisible === -1 && ( // Aquí mostramos el menú si dropdownVisible es -1
                    <div className="absolute mt-2 right-0 w-24 bg-white border rounded-md overflow-hidden">
                      <Link href={"/pages/admin/addGalCategory"}>
                        <button className="block w-full text-left px-2 py-1 text-sm">
                          Agregar categoría
                        </button>
                      </Link>
                      <Link href={"/pages/admin/addGalSubcategory"}>
                        <button className="block w-full text-left px-2 py-1 text-sm">
                          Agregar subcategoría
                        </button>
                      </Link>

                      <button className="block w-full text-left px-2 py-1 text-sm">
                        Eliminar
                      </button>
                    </div>
                  )}
                </div>
                {/* Fin de botones replicados */}
              </div>
            </div>
            <h2 className="text-xl font-bold mb-4">Categorías</h2>
            <ul className="mb-8 space-y-2">
              {categories.map((category) => (
                <li key={category.name}>
                  <div className="flex items-center">
                    <input type="checkbox" />
                    <span className="ml-2">{category.name}</span>
                  </div>
                  {category.subcategories.length > 0 && (
                    <ul className="ml-6 space-y-2 mt-2">
                      {category.subcategories.map((subcategory) => (
                        <li className="flex items-center" key={subcategory}>
                          <input type="checkbox" />
                          <span className="ml-2">{subcategory}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div
            className="flex-1 bg-white border rounded-md p-4 overflow-y-auto ml-6"
            style={{ maxHeight: "80vh" }}
          >
            <div className="my-4">
              <Link href="/pages/admin/addImage" className="boton-global mb-4">
                <button>+ Agregar</button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {gallery.map((image, idx) => (
                <div key={idx} className="border rounded-md p-4 relative">
                  {/* Menú desplegable */}
                  <div className="absolute top-0 right-0 mt-2 mr-2">
                    <button
                      onClick={() => toggleDropdown(idx)}
                      style={{ fontSize: "10px", lineHeight: "10px" }}
                    >
                      •<br />•<br />•
                    </button>
                    {dropdownVisible === idx && (
                      <div className="absolute mt-2 right-0 w-24 bg-white border rounded-md overflow-hidden">
                        <Link
                          className="block w-full text-left px-2 py-1 text-sm"
                          href="/pages/admin/editImage"
                        >
                          <button>Editar</button>
                        </Link>
                        <button className="block w-full text-left px-2 py-1 text-sm">
                          Eliminar
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="mb-4">
                    <img
                      src={image.imgSrc}
                      className="w-full h-32 object-cover rounded-md"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-gray-700">{image.title}</div>
                    <Link
                      href="/pages/users/imageDetails"
                      className="text-blue-500"
                    >
                      <button>Ver más</button>
                    </Link>
                  </div>
                  <div className="mt-2 text-center text-gray-800">
                    {image.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Catalog;
