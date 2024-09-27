import React from 'react';
import { useCarrinho } from '../contexts/CarrinhoContext';
import ConteudoCarrinho from './ConteudoCarrinho';
import { Link } from 'react-router-dom';

const CarrinhoModal = () => {
  const { carrinho, valorTotal, itens } = useCarrinho();

  return (
    <div className='top-[56px] fixed right-0 w-[65%] md:w-[25%] h-screen text-white shadow-md shadow-black bg-[#F5DECB]'>

      {carrinho.length === 0 ? (
        <p className='text-black p-4'>Carrinho vazio</p>
      ) : (

        <div className='overflow-y-auto h-[75%]'>
          <div className='text-black mx-4 my-8'>
            <ConteudoCarrinho />
          </div>
        </div>

      )}

      {carrinho.length > 0 && (
        <div className='text-black ml-4 mt-3'>

          <h4 className='font-bold text-md'>Valor total: R$ {valorTotal.toFixed(2)}</h4>
          <h5 className='font-bold text-md'>Total Itens: {itens}</h5>

          <button className='bg-blue-600 text-white hover:bg-blue-800 hover:text-black px-2 font-bold mt-1 py-1'>
            <Link to='/ProjetoFakeStore/carrinhoDeCompras'>
              Finalizar Pedido
            </Link>
          </button>

        </div>
      )}
    </div>
  );
};

export default CarrinhoModal;
