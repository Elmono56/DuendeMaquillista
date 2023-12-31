"use client";

import React, { useState, useEffect } from "react";
import AdminNavbar from "@/app/components/AdminNavbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CategoryShopController from "../../../../../backend/controllers/categoryShopController";
import SubCategoryShopController from "../../../../../backend/controllers/subCategoryShopController";
import ProductController from "../../../../../backend/controllers/productController";

const Shop = () => {
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
        const res = await CategoryShopController.getShopCategories(
          "https://us-central1-duendemaquillista-8f457.cloudfunctions.net/api/api/getShopCategories"
        );
        const categoriesData = res.data;

        // Mapear las categorías y obtener las subcategorías para cada categoría
        const formattedCategories = await Promise.all(
          categoriesData.map(async (category: { name: string }) => {
            const subRes = await SubCategoryShopController.getShopSubCategoriesFromCategory(
              "https://us-central1-duendemaquillista-8f457.cloudfunctions.net/api/api/getShopSubCategoriesFromCategory",
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
      id: "1111111",
      imgSrc: "/path/to/image.jpg",
      title: "Título de la imagen",
      price: "$100.00",
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
        ? gallery.filter((product) =>
            selectedCategories.includes(product.category)
          )
        : gallery;

    const filteredBySubcategory =
      selectedSubcategories.length > 0
        ? filteredByCategory.filter((product) =>
            selectedSubcategories.includes(product.subCategory)
          )
        : filteredByCategory;

    setFilteredProducts(filteredBySubcategory);
  }, [selectedCategories, selectedSubcategories, gallery]);

  // Estado para el menú desplegable
  const [dropdownVisible, setDropdownVisible] = useState<number | null>(null);

  // Estado para el buscador
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = () => {
    // Realiza la búsqueda utilizando la consulta de búsqueda (searchQuery)
    // Puedes realizar la búsqueda en el estado gallery o hacer una nueva solicitud al servidor, dependiendo de tus necesidades.

    const results = gallery.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  };

  // Renderiza los items
  const [searchResults, setSearchResults] = useState<
    Array<{
      id: string;
      imgSrc: string;
      title: string;
      price: string;
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

  useEffect(() => {
    // Aqui se hace la peticion para obtener los productos
    // y se actualiza el estado de la tienda
    async function getProducts() {
      const res = await ProductController.getProducts("https://us-central1-duendemaquillista-8f457.cloudfunctions.net/api/api/getProducts");
      // Actualiza el estado gallery con la matriz de productos
      setGallery(
        res.data.map(
          (product: {
            _id: string;
            imageURL: string;
            name: string;
            price: string;
            category: string;
            subCategory: string;
          }) => ({
            id: product._id,
            imgSrc: product.imageURL,
            title: product.name,
            price: "$" + product.price,
            category: product.category,
            subCategory: product.subCategory,
          })
        )
      );
    }
    getProducts();
  }, []);

  const handleDeleteProduct = async (id: string) => {
    console.log("ID: ", id);
    const confirm = window.confirm("¿Estás seguro?");
    if (confirm) {
      // Aqui se hace la peticion para eliminar el producto
      await ProductController.setProductVisible(
        "https://us-central1-duendemaquillista-8f457.cloudfunctions.net/api/api/setProductVisible",
        { id, status: false }
      );
    }
  };

  const handleEditProduct = (id: string) => {
    // Navegar a la página de editProduct y pasar el ID del producto como un parámetro en la URL
    localStorage.setItem("productID", id);
    router.push("/pages/admin/editProduct");
  };

  const handleViewDetails = (id: string) => {
    // Navegar a la página de productDetails y pasar el ID del producto como un parámetro en la URL
    localStorage.setItem("productID", id);
    router.push("/pages/admin/productDetails");
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
                      <Link href={"/pages/admin/addShopCategory"}>
                        <button className="block w-full text-left px-2 py-1 text-sm">
                          Agregar categoría
                        </button>
                      </Link>
                      <Link href={"/pages/admin/addShopSubcategory"}>
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
              <Link
                href="/pages/admin/addProduct"
                className="boton-global mb-4"
              >
                <button>+ Agregar</button>
              </Link>
              <Link
                href="/pages/admin/orders"
                className="boton-global mb-4 ml-4"
              >
                <button>Pedidos</button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {renderItems.map((image, idx) => (
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
                        {/* <Link
                          className="block w-full text-left px-2 py-1 text-sm"
                          href="/pages/admin/editProduct"
                        > */}
                        <button onClick={() => handleEditProduct(image.id)}>
                          Editar
                        </button>
                        {/* </Link> */}
                        <button
                          className="block w-full text-left px-2 py-1 text-sm"
                          onClick={() => handleDeleteProduct(image.id)}
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

export default Shop;
