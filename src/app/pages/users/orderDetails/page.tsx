import React from "react";
import UserNavbar from "@/app/components/Navbar";

const OrderDetails = () => {
  // Ejemplo de datos para la orden
  const order = {
    customer: {
      name: "Juan Pérez",
      email: "juanperez@email.com",
      phone: "123-456-7890",
    },
    products: [
      { name: "Producto A", quantity: 2, price: 10 },
      { name: "Producto B", quantity: 1, price: 20 },
      { name: "Producto B", quantity: 1, price: 20 },
      { name: "Producto B", quantity: 1, price: 20 },
      { name: "Producto B", quantity: 1, price: 20 },
      // ... (puedes agregar más productos para probar el scroll) ...
    ],
    shipping: {
      address: "Provincia, Canton, Distrito, Ubicación exacta",
      method: "Envío estándar",
      cost: 5,
    },
    paymentReceipt: "/path/to/payment-receipt.jpg", // Asegúrate de poner el path correcto al comprobante de pago
  };

  // Calcular el subtotal para cada producto
  const productSubtotals = order.products.map(
    (product) => product.quantity * product.price
  );

  // Calcular el total general sumando todos los subtotales y el costo de envío
  const orderTotal =
    productSubtotals.reduce((acc, curr) => acc + curr, 0) + order.shipping.cost;

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
            <strong>Nombre:</strong> {order.customer.name}
          </p>
          <p className="text-sm">
            <strong>Email:</strong> {order.customer.email}
          </p>
          <p className="text-sm">
            <strong>Teléfono:</strong> {order.customer.phone}
          </p>
        </div>

        <div className="mb-4 w-1/3 bg-white shadow-md m-2 p-4 rounded text-center">
          <h2 className="text-md font-semibold mb-1">Productos</h2>
          <div style={{ maxHeight: "300px", overflowY: "auto" }}>
            {order.products.map((product, idx) => (
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
                  <strong>Subtotal:</strong> ${productSubtotals[idx]}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-4 w-1/3 bg-white shadow-md m-2 p-4 rounded text-center">
          <h2 className="text-md font-semibold mb-1">Información de Envío</h2>
          <p className="text-sm">
            <strong>Dirección:</strong> {order.shipping.address}
          </p>
          <p className="text-sm">
            <strong>Método:</strong> {order.shipping.method}
          </p>
          <p className="text-sm">
            <strong>Costo:</strong> ${order.shipping.cost}
          </p>
        </div>

        <div className="mb-4 w-1/3 bg-white shadow-md m-2 p-4 rounded text-center">
          <h2 className="text-md font-semibold mb-1">Total de la Orden</h2>
          <p className="text-md">${orderTotal}</p>
        </div>

        <div className="mb-4 w-1/3 bg-white shadow-md m-2 p-4 rounded text-center">
          <h2 className="text-md font-semibold mb-1">Comprobante de Pago</h2>
          <img src={order.paymentReceipt} className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
