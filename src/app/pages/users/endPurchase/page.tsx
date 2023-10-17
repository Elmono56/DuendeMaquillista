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
          <div className="flex items-center space-between">
            <div className="flex flex-col justify-center items-center pb-40 overflow-hidden">
              <Cart productName="Niacinamida" productPrice="$550"
                productImage="https://www.larocheposay-centroamerica.com/-/media/project/loreal/brand-sites/lrp/america/latam/products/niacinamide/pure-niacinamide-10-serum/3337875791885_1-1.jpg?cx=0&cy=0&cw=600&ch=600&hash=3C8F65B5BF784E6BA1165BFB424D6539D4628FC2"
                quantity={2} editable={false} />
              <Cart productName="Niacinamida" productPrice="$550"
                productImage="https://www.larocheposay-centroamerica.com/-/media/project/loreal/brand-sites/lrp/america/latam/products/niacinamide/pure-niacinamide-10-serum/3337875791885_1-1.jpg?cx=0&cy=0&cw=600&ch=600&hash=3C8F65B5BF784E6BA1165BFB424D6539D4628FC2"
                quantity={2} editable={false} />
              <Cart productName="Niacinamida" productPrice="$550"
                productImage="https://www.larocheposay-centroamerica.com/-/media/project/loreal/brand-sites/lrp/america/latam/products/niacinamide/pure-niacinamide-10-serum/3337875791885_1-1.jpg?cx=0&cy=0&cw=600&ch=600&hash=3C8F65B5BF784E6BA1165BFB424D6539D4628FC2"
                quantity={2} editable={false} />
            </div>
            <div className="pt-5">
              <div className="w-72 h-64 rounded-xl border border-black m-4"></div>
              <div className="flex justify-center items-center m-4">
                <button className="boton-global">Añadir comprobante de sinpe</button>
              </div>
              <p className="flex justify-center items-center m-4 text-black">Envio: </p>
              <p className="flex justify-center items-center m-4 text-black">Subtotal: </p>
              <div className="flex justify-center items-center m-4">
                <button className="boton-global">Finalizar compra</button>
              </div>
            </div>
          </div>
          {/* <div>
            <p className="flex justify-start items-center m-4 text-black">Total: </p>
            <p className="flex justify-start items-center m-4 text-black">Nombre: </p>
            <p className="flex justify-start items-center m-4 text-black">Apellidos: </p>
            <div className="flex flex-wrap space-x-4">
              <p className="flex justify-start items-center m-4 text-black">Agregar direccion: </p>
              <input
                type="text"
                className="input-global"
                placeholder="Provincia-Canton-Distrito"
              />
            </div>
            <div className="flex flex-wrap space-x-4">
              <p className="flex justify-start items-center m-4 text-black">Detalles: </p>
              <input
                type="text"
                className="input-global"
                placeholder=""
              />
            </div>
          </div> */}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default EndPurchase;