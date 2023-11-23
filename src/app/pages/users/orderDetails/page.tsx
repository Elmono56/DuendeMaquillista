'use client';
import React, { useState, useEffect, use } from "react";
import UserNavbar from "../../../components/UserNavBar";
import axios from "axios";

const OrderDetails = () => {
  const [customer, setCustomer] = useState({} as {
    name: string;
    email: string;
  });
  const [products, setProducts] = useState([] as Array<{
    name: string;
    quantity: number;
    price: number;
  }>);
  const [shipping, setShipping] = useState({} as {
    address: string;
    method: string;
    cost: number;
  });
  const [orderTotal, setOrderTotal] = useState(0);
  const [paymentReceipt, setPaymentReceipt] = useState("");

  useEffect(() => {
    async function getData() {
      const idOrder = localStorage.getItem("idOrder");
      const response = await axios.get("http://localhost:4000/api/getOrder", { params: { id: idOrder } });
      let costShipping = response.data.pay * 0.05;
      setOrderTotal(response.data.pay);
      setProducts(response.data.products.map((product: { productName: string; productPrice: number; quantity: number; }) => ({
        name: product.productName,
        quantity: product.quantity,
        price: product.productPrice
      })));
      const responseUser = await axios.get("http://localhost:4000/api/getUser", { params: { id: response.data.user_id } });
      setCustomer({
        name: responseUser.data.name + " " + responseUser.data.lastName,
        email: responseUser.data.email
      });
      const responseShipping = await axios.get("http://localhost:4000/api/getAddressById", { params: { id: response.data.address } });
      setShipping({
        address: responseShipping.data.province + ", " + responseShipping.data.canton + ", " + responseShipping.data.district + ", " + responseShipping.data.details,
        method: "Envío estándar",
        cost: costShipping
      });
    } getData();
  }
  , []);

  return (
    <div>
      <UserNavbar />
      <div className="p-4 flex flex-wrap justify-center">
        <h1 className="text-lg font-medium mb-3 w-full text-center">
          Detalles de la Orden
        </h1>

        <div className="mb-4 w-1/3 bg-white shadow-md m-2 p-4 rounded text-center">
          <h2 className="text-md font-semibold mb-1">
            Información del Cliente
          </h2>
          <p className="text-sm">
            <strong>Nombre:</strong> {customer.name}
          </p>
          <p className="text-sm">
            <strong>Email:</strong> {customer.email}
          </p>
        </div>

        <div className="mb-4 w-1/3 bg-white shadow-md m-2 p-4 rounded text-center">
          <h2 className="text-md font-semibold mb-1">Productos</h2>
          <div style={{ maxHeight: "300px", overflowY: "auto" }}>
            {products.map((product, idx) => (
              <div key={idx} className="border p-1 mb-2">
                <p className="text-sm">
                  <strong>Nombre:</strong> {product.name}
                </p>
                <p className="text-sm">
                  <strong>Cantidad:</strong> {product.quantity}
                </p>
                <p className="text-sm">
                  <strong>Precio unitario:</strong> ${product.price}
                </p>
                <p className="text-sm">
                  <strong>Subtotal:</strong> ${orderTotal}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-4 w-1/3 bg-white shadow-md m-2 p-4 rounded text-center">
          <h2 className="text-md font-semibold mb-1">Información de Envío</h2>
          <p className="text-sm">
            <strong>Dirección:</strong> {shipping.address}
          </p>
          <p className="text-sm">
            <strong>Método:</strong> {shipping.method}
          </p>
          <p className="text-sm">
            <strong>Costo:</strong> ${shipping.cost}
          </p>
        </div>

        <div className="mb-4 w-1/3 bg-white shadow-md m-2 p-4 rounded text-center">
          <h2 className="text-md font-semibold mb-1">Total de la Orden</h2>
          <p className="text-md">${orderTotal + shipping.cost}</p>
        </div>

        <div className="mb-4 w-1/3 bg-white shadow-md m-2 p-4 rounded text-center">
          <h2 className="text-md font-semibold mb-1">Comprobante de Pago</h2>
          <img src={paymentReceipt} className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
