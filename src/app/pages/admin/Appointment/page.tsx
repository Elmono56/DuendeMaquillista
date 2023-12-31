"use client";

import React, { useState, useEffect } from "react";
import AdminNavbar from "@/app/components/AdminNavbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import axios from "axios";
import CommitmentController from "../../../../../backend/controllers/commitmentController";

const Shop = () => {
  const [categories, setCategories] = useState([
    { name: "Día", subcategories: [] },
    { name: "Semana", subcategories: [] },
    { name: "Mes", subcategories: [] },
  ]);

  const [gallery, setGallery] = useState(

    new Array(20).fill({
      id: "1",
      name: "Título de la imagen",
      deadline: "$100.00",
    })
  );
  const transformDate = (date: string): string => {
    const newDate = new Date(date); // Convertir la cadena a un objeto Date
    const transformed = newDate.toISOString().split('T')[0]; // Obtener la parte de la fecha y formatearla

    return transformed;
  };
  useEffect(() => {

    getAppointments().then((res: any) => {
      setGallery(res.data.map(
        (commitment: {
          _id: string;
          name: string;
          deadline: string;
        }) => ({
          id: commitment._id,
          name: commitment.name,
          deadline: transformDate(commitment.deadline),
        })
      ));

    }, []);
  });
  // Estado para el menú desplegable
  const [dropdownVisible, setDropdownVisible] = useState(null);

  const toggleDropdown = (idx: any) => {
    if (dropdownVisible === idx) {
      setDropdownVisible(null);
    } else {
      setDropdownVisible(idx);
    }
  };
  async function getAppointments() {
    const res = await CommitmentController.getCommitments(
      "http://localhost:4000/api/getCommitments"
    );
    return res;
  }

  const handleDelete = async (id: string) => {
    await CommitmentController.changeVisibility("http://localhost:4000/api/changeVisibility", { id, status: "false" });
    alert("Se ha eliminado el compromiso");
  };

  return (
    <div>
      <AdminNavbar />
      <div className="bg-pink-lighter min-h-screen p-6">
        <div className="flex">
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
              </div>
            </div>
            <h2 className="text-xl font-bold mb-4">Visualización</h2>
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
              <Link href="/pages/admin/addEventOptions" className="boton-global mb-4">
                <button>+ Agregar</button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {gallery.map((commitment, idx) => (
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
                        <Link
                          className="block w-full text-left px-2 py-1 text-sm"
                          href="/pages/admin/editEvent"
                        >
                          <button>Editar</button>
                        </Link>
                        <button className="block w-full text-left px-2 py-1 text-sm" onClick={() => handleDelete(commitment.id)}>
                          Eliminar
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col items-center justify-between">
                    <div className="text-gray-700">{commitment.name}</div>
                    <div className="mt-2 text-center text-gray-800">
                      {commitment.deadline}
                    </div>
                    <Link
                      href="/pages/admin/eventDetails"
                      className="text-blue-500"
                    >
                      <button>Ver más</button>
                    </Link>
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
