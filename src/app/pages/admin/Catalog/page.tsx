"use client";

import React, { useState, useEffect } from "react";
import AdminNavbar from "@/app/components/AdminNavbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CategoryGalController from "../../../../../backend/controllers/categoryGalController";
import SubCatagoryGalController from "../../../../../backend/controllers/subCatagoryGalController";
import GalPhotoController from "../../../../../backend/controllers/galPhotoController";

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
  const router = useRouter();

  useEffect(() => {
    async function getData() {
      try {
        const res = await CategoryGalController.getCategories("https://us-central1-duendemaquillista-8f457.cloudfunctions.net/api/api/getCategories");
        const categoriesData = res.data;
        // Mapear las categorías y obtener las subcategorías para cada categoría
        const formattedCategories = await Promise.all(
          categoriesData.map(async (category: { name: string }) => {
            const subRes =
              await SubCatagoryGalController.getSubCategoriesFromCategory(
                "https://us-central1-duendemaquillista-8f457.cloudfunctions.net/api/api/getSubCategoriesFromCategory",
                {
                  params: { category: category.name },
                }
              );

            const subcategories = subRes.data.map(
              (subcategory: { name: string }) => subcategory.name
            );
            return {
              name: category.name,
              subcategories,
            };
          })
        );
        // Guardar el resultado en el estado
        setCategories(formattedCategories);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  // Galería de fotos dinámica
  const [gallery, setGallery] = useState(
    new Array(20).fill({
      id: "11111",
      imgSrc: "/path/to/image.jpg",
      title: "Título de imagen",
      category: "Maquillaje básico",
      subCategory: "Bodas",
    })
  );

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>(
    []
  );
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

  // Función para manejar el cambio en la selección de categoría
  const handleCategoryChange = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  // Función para manejar el cambio en la selección de subcategoría
  const handleSubCategoryChange = (subcategory: string) => {
    if (selectedSubcategories.includes(subcategory)) {
      setSelectedSubcategories(
        selectedSubcategories.filter((subcat) => subcat !== subcategory)
      );
    } else {
      setSelectedSubcategories([...selectedSubcategories, subcategory]);
    }
  };

  // Filtrar productos según las selecciones de categoría y subcategoría
  useEffect(() => {
    const filteredByCategory =
      selectedCategories.length > 0
        ? gallery.filter((image) => selectedCategories.includes(image.category))
        : gallery;

    const filteredBySubcategory =
      selectedSubcategories.length > 0
        ? filteredByCategory.filter((image) =>
            selectedSubcategories.includes(image.subCategory)
          )
        : filteredByCategory;

    setFilteredProducts(filteredBySubcategory);
  }, [selectedCategories, selectedSubcategories, gallery]);

  // Estado para el menú desplegable
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    const results = gallery.filter((image) =>
      image.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  };

  const [searchResults, setSearchResults] = useState<
    Array<{
      id: string;
      imgSrc: string;
      title: string;
      category: string;
      subCategory: string;
    }>
  >([]);
  const renderItems =
    searchResults.length > 0
      ? searchResults
      : filteredProducts.length > 0
      ? filteredProducts
      : gallery;

  const toggleDropdown = (idx) => {
    if (dropdownVisible === idx) {
      setDropdownVisible(null);
    } else {
      setDropdownVisible(idx);
    }
  };

  //useEffect para conseguir las imagenes de la base de datos
  useEffect(() => {
    async function getImages() {
      const res = await GalPhotoController.getGalPhotos("https://us-central1-duendemaquillista-8f457.cloudfunctions.net/api/api/getGalPhotos");
      setGallery(
        res.data.map(
          (image: {
            _id: string;
            imageURL: string;
            name: string;
            category: string;
            subCategory: string;
          }) => ({
            id: image._id,
            imgSrc: image.imageURL,
            title: image.name,
            category: image.category,
            subCategory: image.subCategory,
          })
        )
      );
    }
    getImages();
  }, []);

  const handleEditImage = (id: string) => {
    localStorage.setItem("imageId", id);
    router.push("/pages/admin/editImage");
  };

  const handleViewDetails = (id: string) => {
    localStorage.setItem("imageId", id);
    router.push("/pages/admin/imageDetails");
  };

  const handleDeleteImage = async (id: string) => {
    const confirm = window.confirm(
      "¿Estás seguro de que quieres eliminar esta imagen?"
    );
    if (confirm) {
      await GalPhotoController.setimageVisibility("https://us-central1-duendemaquillista-8f457.cloudfunctions.net/api/api/setImageVisibility",
      { id, status: false });
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
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="boton-global ml-2" onClick={handleSearch}>
                  Buscar
                </button>

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
              </div>
            </div>
            <h2 className="text-xl font-bold mb-4">Categorías</h2>
            <ul className="mb-8 space-y-2">
              {categories.map((category) => (
                <li key={category.name}>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      onChange={() => handleCategoryChange(category.name)}
                    />
                    <span className="ml-2">{category.name}</span>
                  </div>
                  {category.subcategories.length > 0 && (
                    <ul className="ml-6 space-y-2 mt-2">
                      {category.subcategories.map((subcategory) => (
                        <li className="flex items-center" key={subcategory}>
                          <input
                            type="checkbox"
                            onChange={() =>
                              handleSubCategoryChange(subcategory)
                            }
                          />
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
              {renderItems.map((image, idx) => (
                <div key={idx} className="border rounded-md p-4 relative">
                  <div className="absolute top-0 right-0 mt-2 mr-2">
                    <button
                      onClick={() => toggleDropdown(idx)}
                      style={{ fontSize: "10px", lineHeight: "10px" }}
                    >
                      •<br />•<br />•
                    </button>
                    {dropdownVisible === idx && (
                      <div className="absolute mt-2 right-0 w-24 bg-white border rounded-md overflow-hidden">
                        <button onClick={() => handleEditImage(image.id)}>
                          Editar
                        </button>
                        {/* </Link> */}
                        <button
                          className="block w-full text-left px-2 py-1 text-sm"
                          onClick={() => handleDeleteImage(image.id)}
                        >
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
                    {/* <Link
                      href="/pages/users/imageDetails"
                      className="text-blue-500"
                    > */}
                    <button onClick={() => handleViewDetails(image.id)}>
                      Ver más
                    </button>
                    {/* </Link> */}
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
