import React from 'react';

interface OrderProps {
  idOrder: string;
  onAction: (actionType: string, idOrder: string) => void;
}

const Order = ({ idOrder, onAction }: OrderProps) => {
  return (
    <div className="bg-white rounded-lg p-4 w-920px h-94px p-4 bg-white">
    <div className="flex flex-wrap space-x-4 items-center">
      <button type="button" className="btn btn-danger rounded-full bg-red-200 w-[30px] h-[30px] text-black text-center"
        onClick={() => onAction('decline', idOrder)}>
        X
      </button>
      <h2 className="text-base text-black p-4" >ID: {idOrder}</h2>
      <div className='flex w-1/3 space-x-2'>
        <button className='boton-global'
          onClick={() => onAction('details', idOrder)}>Detalles</button>
        <button className='boton-global'
          onClick={() => onAction('confirm', idOrder)}>Confirmar</button>
        <button className='boton-global'
          onClick={() => onAction('decline', idOrder)}>Rechazar</button>
      </div>
    </div>
  </div>
  );
}

export default Order;