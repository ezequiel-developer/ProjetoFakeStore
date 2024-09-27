import React from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

const CardProduto = ({ imagem, nome, preco, onClickCarrinho, id }) => {
    const navigate = useNavigate();
    

    const handleClickDetalhes = () => {
        navigate(`/detalhesProduto/${id}`); // Navega para a página de detalhes do produto
    };

    return (
        <div className='border-2 bg-white p-4 flex flex-col justify-between shadow-md items-center h-72 rounded-xl text-center'>
            <div className=''>
                <img
                    src={imagem}
                    alt={nome}
                    className='h-28 w-28'
                />
            </div>

            <h3 className='font-bold text-sm'>{nome}</h3>
            <p className='font-semibold text-xl'>R$ {preco.toFixed(2)}</p>

            <div className='flex justify-between w-full'>
                <button
                    onClick={onClickCarrinho}
                    className='px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-700'
                >
                    <FontAwesomeIcon icon={faShoppingCart} />
                </button>

                <button
                    onClick={handleClickDetalhes}
                    className='px-4 py-1 bg-[#F5DECB] text-black rounded hover:bg-black hover:text-white'
                >
                    Detalhes
                </button>
            </div>
        </div>
    );
};

export default CardProduto;
