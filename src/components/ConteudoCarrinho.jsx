import React from 'react'
import { useCarrinho } from '../contexts/CarrinhoContext'

const ConteudoCarrinho = () => {

    const {carrinho, removerProduto, atualizarQuantidade, valorTotal, itens} = useCarrinho()

  return (
   <div>
            {carrinho.map((item) => (
              <div
                className='flex justify-between items-center mb-4 border-b-2 pb-2 border-gray-700'
                key={item.id}
              >
                {/* Imagem do produto */}
                <div className='flex-shrink-0'>
                  <img src={item.image} alt={item.title} className='h-20 w-20' />
                </div>

                {/* Informações do produto */}
                <div className='flex-1 mx-4'>
                  <h3 className='text-[14px] font-semibold'>{item.title}</h3>
                  <div className='flex items-center gap-1'>
                    <span className='text-sm'>Quantidade</span>
                    <input
                      type="number"
                      min="1"
                      value={item.quantidade}
                      onChange={(e) => atualizarQuantidade(item.id, parseInt(e.target.value))}
                      className="bg-white text-black w-12 text-center"
                    />
                  </div>
                  <p className='font-bold text-sm'>Preço: R$ {item.price.toFixed(2)}</p>
                </div>

                {/* Botão de remover */}
                <div>
                  <button
                    onClick={() => removerProduto(item)}
                    className='bg-red-500 hover:bg-red-700 text-white text-[12px] px-2 py-1'
                  >
                    Remover
                  </button>
                </div>
              </div>
            ))}
          </div>
  )
}

export default ConteudoCarrinho
