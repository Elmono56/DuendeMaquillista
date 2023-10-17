import React from 'react';

interface OrderProps {
  idOrder: string;
}

const Order = ({ idOrder }: OrderProps) => {
  return (
    <div className="bg-white rounded-lg p-4 w-920px h-94px p-4 bg-white">
    <div className="flex flex-wrap space-x-4 items-center">
      <button type="button" className="btn btn-danger rounded-full bg-red-200 w-[40px] h-[50px] p-4 text-black text-center">X</button>
      <h2 className="text-base text-black lg:w-[24%] p-4" >ID: {idOrder}</h2>
      <button className='boton-global'>Detalles</button>
      <button className='boton-global'>Confirmar</button>
      <button className='boton-global'>Rechazar</button>
    </div>
  </div>
  );
}

export default Order;