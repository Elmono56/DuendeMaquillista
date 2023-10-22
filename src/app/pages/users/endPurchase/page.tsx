// "use client";

import React from "react";
import Navbar from "@/app/components/Navbar";
import Cart from "@/app/components/Cart";

const EndPurchase = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <div className="h-3/5 bg-white rounded-lg overflow-y-scroll">
          <div className="flex flex-row">
            <div className="overflow-y-scroll">
              <Cart
                productName="Niacinamida"
                productPrice="$550"
                productImage="https://www.larocheposay-centroamerica.com/-/media/project/loreal/brand-sites/lrp/america/latam/products/niacinamide/pure-niacinamide-10-serum/3337875791885_1-1.jpg?cx=0&cy=0&cw=600&ch=600&hash=3C8F65B5BF784E6BA1165BFB424D6539D4628FC2"
                quantity={2}
                editable={false}
              />
            </div>
            <div className="flex flex-col pt-5">
              <div className="w-72 h-64 rounded-xl border border-black m-4"></div>
              <button className="boton-global">
                Añadir comprobante de sinpe
              </button>
              <p className="flex justify-center mt-4 p-4 text-black self-center">
                Envio:
              </p>
              <p className="flex justify-center mt-4 p-4 text-black self-center">
                Subtotal:
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center">
            <div className="flex flex-col">
              <p className="flex justify-left items-center m-4 p-4 text-black">
                Total:
              </p>
              <div className="flex flex-row space-x-14">
                <p className="flex justify-left items-center m-4 p-4 text-black">
                  Nombre:
                </p>
                <p className="flex justify-left items-center m-4 p-4 text-black">
                  Apellidos:
                </p>
              </div>
              <div className="flex flex-col p-4">
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
          </div>
          <div className="flex justify-center items-center m-4">
            <button className="boton-global">Finalizar compra</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EndPurchase;
