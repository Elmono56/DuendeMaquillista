import React from "react";

interface CardProps {
  productName: string;
  productPrice: string;
  productImage: string;
  quantity: number;
  editable?: boolean;
}

const Card = ({ productName, productPrice, productImage, quantity, editable = true }: CardProps) => {

  return (
    <div className="bg-white rounded-lg p-4 w-904px h-94px p-4 bg-white">
      <div className="flex flex-wrap space-x-4 justify-center items-center">
      {editable && ( // Renderizamos el botón "X" si es editable
          <button type="button" className="btn btn-danger rounded-full bg-red-200 w-[40px] h-[50px] p-4 text-black text-center">
            X
          </button>
        )}
        <img className="object-cover border-black rounded-2xl" src={productImage} width={81} height={59} />
        <h2 className="text-base text-black lg:w-[30%] p-4" >{productName}</h2>
        <input className="bg-red-200 rounded-3xl h-[17px] w-[60px] p-4 text-black" type="number" min={1} value={quantity}/>
        <p className="text-base text-black lg:w-[10%] p-4">{productPrice}</p>
      </div>
    </div>
  );
}

export default Card;