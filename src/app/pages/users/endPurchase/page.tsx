// "use client";

import React from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Cart from "@/app/components/Cart";

const EndPurchase = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <div className="w-2/4 bg-white rounded-lg h-549 w-384">
          <div className="flex flex-row">
            <Cart
              productName="Niacinamida"
              productPrice="$550"
              productImage="https://www.larocheposay-centroamerica.com/-/media/project/loreal/brand-sites/lrp/america/latam/products/niacinamide/pure-niacinamide-10-serum/3337875791885_1-1.jpg?cx=0&cy=0&cw=600&ch=600&hash=3C8F65B5BF784E6BA1165BFB424D6539D4628FC2"
              quantity={2}
              editable={false}
            />
            <div className="pt-5">
              <div className="w-72 h-64 rounded-xl border border-black m-4">
              </div>
              <button className="boton-global">
                Añadir comprobante de sinpe
              </button>
            </div>
          </div>
          <div className="flex flex-wrap items-center">
            <div className="flex flex-col">
              <p className="flex justify-left items-center m-4 p-4 text-black">
                Total:
              </p>
              <p className="flex justify-left items-center m-4 p-4 text-black">
                Nombre:
              </p>
              <p className="flex justify-left items-center m-4 p-4 text-black">
                Apellido:
              </p>
              <div className="flex flex-col m-4">
                <input
                  type="text"
                  placeholder="Dirección de envío"
                  className="input-global"
                />
                <input
                  type="text"
                  placeholder="Detalles"
                  className="input-global"
                />
              </div>
            </div>
            <div className="flex flex-col self-start ml-16">
              <p className="flex justify-left mt-4 p-4 text-black self-start">
                Subtotal:
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center m-4">
            <button className="boton-global">Finalizar compra</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EndPurchase;