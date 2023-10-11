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
          <Cart productName="Niacinamida" productPrice="$550" 
                productImage="https://www.larocheposay-centroamerica.com/-/media/project/loreal/brand-sites/lrp/america/latam/products/niacinamide/pure-niacinamide-10-serum/3337875791885_1-1.jpg?cx=0&cy=0&cw=600&ch=600&hash=3C8F65B5BF784E6BA1165BFB424D6539D4628FC2" 
                quantity={2} />
          <Cart productName="Effaclar Duo" productPrice="$790" 
                productImage="https://www.larocheposay-centroamerica.com/-/media/project/loreal/brand-sites/lrp/america/latam/products/effaclar/effaclar-duo-plus/larocheposayfacecareeffaclarduo40ml3337875598071front.png?cx=0.49&cy=0.63&cw=600&ch=600&hash=76733EBC9BE84DB9AB9209813CF22F46FD2CD4F8" 
                quantity={1} />
        </BasicCard>
      </div>
      <Footer />
    </>
  );
};

export default ShoppingCart;