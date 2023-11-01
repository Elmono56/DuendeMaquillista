"use client";
import React, { useState, useEffect } from "react";
import UserNavbar from "../../../components/UserNavBar";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

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
        const res = await axios.get("http://localhost:4000/api/getShopCategories");
        const categoriesData = res.data;

        // Mapear las categorías y obtener las subcategorías para cada categoría
        const formattedCategories = await Promise.all(
          categoriesData.map(async (category: { name: string }) => {
            const subRes = await axios.get(
              "http://localhost:4000/api/getShopSubCategoriesFromCategory",
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
      category: "Categoría",
      subCategory: "Subcategoría",
    })
  );

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

  // Función para manejar el cambio en la selección de categoría
  const handleCategoryChange = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  // Función para manejar el cambio en la selección de subcategoría
  const handleSubCategoryChange = (subcategory: string) => {
    if (selectedSubcategories.includes(subcategory)) {
      setSelectedSubcategories(selectedSubcategories.filter((subcat) => subcat !== subcategory));
    } else {
      setSelectedSubcategories([...selectedSubcategories, subcategory]);
    }
  };

  // Estado para el buscador
  const [searchQuery, setSearchQuery] = useState<string>("");
  // Renderiza los items 
  const [searchResults, setSearchResults] = useState<Array<{ id: string, imgSrc: string, title: string, price: string, category: string, subCategory: string }>>([]);

  const handleSearch = () => {
    // Realiza la búsqueda utilizando la consulta de búsqueda (searchQuery)
    // Puedes realizar la búsqueda en el estado gallery o hacer una nueva solicitud al servidor, dependiendo de tus necesidades.

    const results = gallery.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  };

  // Filtrar productos según las selecciones de categoría y subcategoría
  useEffect(() => {
    const filteredByCategory = selectedCategories.length > 0
      ? gallery.filter((product) => selectedCategories.includes(product.category))
      : gallery;

    const filteredBySubcategory = selectedSubcategories.length > 0
      ? filteredByCategory.filter((product) => selectedSubcategories.includes(product.subCategory))
      : filteredByCategory;

    setFilteredProducts(filteredBySubcategory);
  }, [selectedCategories, selectedSubcategories, gallery]);

  const renderItems = searchResults.length > 0 ? searchResults : (filteredProducts.length > 0 ? filteredProducts : gallery);

  useEffect(() => {
    // Aqui se hace la peticion para obtener los productos
    // y se actualiza el estado de la tienda
    async function getProducts() {
      const res = await axios.get("http://localhost:4000/api/getProducts");
      // Actualiza el estado gallery con la matriz de productos
      setGallery(res.data.map((product: { _id: string, imageURL: string, name: string, price: string, category: string, subCategory: string }) => ({
        id: product._id,
        imgSrc: product.imageURL,
        title: product.name,
        price: "$" + product.price,
        category: product.category,
        subCategory: product.subCategory
      })));
    } getProducts();
  }
    , []);

  const handleViewDetails = (id: string) => {
    // Navegar a la página de productDetails y pasar el ID del producto como un parámetro en la URL
    localStorage.setItem('productID', id);
    router.push("/pages/users/productDetails");
  };

  return (
    <div>
      <UserNavbar />
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
                <button className="boton-global ml-2" onClick={handleSearch} >Buscar</button>
              </div>
            </div>
            <h2 className="text-xl font-bold mb-4">Categorías</h2>
            <ul className="mb-8 space-y-2">
              {categories.map((category) => (
                <li key={category.name}>
                  <div className="flex items-center">
                    <input type="checkbox"
                      onChange={() => handleCategoryChange(category.name)} />
                    <span className="ml-2">{category.name}</span>
                  </div>
                  {category.subcategories.length > 0 && (
                    <ul className="ml-6 space-y-2 mt-2">
                      {category.subcategories.map((subcategory) => (
                        <li className="flex items-center" key={subcategory}>
                          <input type="checkbox"
                            onChange={() => handleSubCategoryChange(subcategory)} />
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
                href="/pages/users/orders"
                className="boton-global mb-4 ml-4"
              >
                <button>Pedidos</button>
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {renderItems.map((image, idx) => (
                <div key={idx} className="border rounded-md p-4">
                  <div className="mb-4">
                    <img
                      src={image.imgSrc}
                      className="w-full h-32 object-cover rounded-md"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-gray-700">{image.title}</div>
                    {/* <Link
                      href="/pages/users/productDetails"
                      className="text-blue-500"
                    > */}
                    <button onClick={() => handleViewDetails(image.id)}>Ver más</button>
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
