import React from "react";
import Navbar from "@/app/components/Navbar";
import BasicCard from "@/app/components/BasicCard";
import Footer from "@/app/components/Footer";
import Cart from "@/app/components/Cart";

const ShoppingCart = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <BasicCard>
          <div className="text-2xl text-black font-bold lg:pb-[20px]">
            Carrito de compras
          </div>
          <Cart
            productName="Niacinamida"
            productPrice="$550"
            productImage="https://www.larocheposay-centroamerica.com/-/media/project/loreal/brand-sites/lrp/america/latam/products/niacinamide/pure-niacinamide-10-serum/3337875791885_1-1.jpg?cx=0&cy=0&cw=600&ch=600&hash=3C8F65B5BF784E6BA1165BFB424D6539D4628FC2"
            quantity={2}
          />
          <Cart
            productName="Effaclar Duo"
            productPrice="$790"
            productImage="https://www.larocheposay-centroamerica.com/-/media/project/loreal/brand-sites/lrp/america/latam/products/effaclar/effaclar-duo-plus/larocheposayfacecareeffaclarduo40ml3337875598071front.png?cx=0.49&cy=0.63&cw=600&ch=600&hash=76733EBC9BE84DB9AB9209813CF22F46FD2CD4F8"
            quantity={1}
          />
          <div className="flex flex-wrap space-x-72">
            <div className="flex flex-grow-1 flex-col">
              <button className="bg-white text-black pb-5">
                + Agregar producto
              </button>
              <button className="bg-red-200 rounded-3xl text-black w-52">
                Ver mis pedidos
              </button>
            </div>
            <div className="flex flex-grow-1 flex-col">
              <p className="bg-white text-black text-center pb-5">
                Subtotal: 128
              </p>
              <button className="bg-red-200 rounded-3xl text-black w-52">
                Finalizar compra
              </button>
            </div>
          </div>
        </BasicCard>
      </div>
      <Footer />
    </>
  );
};

export default ShoppingCart;
