import React, { useEffect, useState } from 'react';
import CardProduto from './CardProduto';
import { useCarrinho } from '../contexts/CarrinhoContext';

const ListaProdutos = () => {
    const [listaProdutos, setListaProdutos] = useState([]);
    const [produtosFiltrados, setProdutosFiltrados] = useState([]);
    const { adicionarProduto } = useCarrinho();
    const [ativo, setAtivo] = useState("Todos");

    const botaoCategorias = [
        { id: 0, categoria: "Todos" },
        { id: 1, categoria: "electronics" },
        { id: 2, categoria: "jewelery" },
        { id: 3, categoria: "men's clothing" },
        { id: 4, categoria: "women's clothing" }
    ];

    const buscarProdutos = async () => {
        try {
            const dados = await fetch('https://fakestoreapi.com/products');
            const resposta = await dados.json();
            setListaProdutos(resposta);
            setProdutosFiltrados(resposta); // Mostra todos os produtos inicialmente
        } catch (error) {
            console.error('Erro ao buscar os produtos:', error);
        }
    };

    useEffect(() => {
        buscarProdutos(); // Busca os produtos ao carregar o componente
    }, []);

    const handleCategoria = (categoria) => {
        setAtivo(categoria);
        if (categoria === 'Todos') {
            setProdutosFiltrados(listaProdutos); // Mostra todos os produtos
        } else {
            const produtos = listaProdutos.filter((item) => item.category === categoria);
            setProdutosFiltrados(produtos); // Filtra os produtos pela categoria selecionada
        }
    };

    return (
        <section className='flex mx-4 flex-col mb-24 justify-center items-center mt-8'>
            <div className='mb-8'>
                <div className='flex flex-wrap md:flex-nowrap justify-center gap-4'>
                    {botaoCategorias.map((el) => (
                        <button
                            key={el.id}
                            onClick={() => handleCategoria(el.categoria)}
                            className={`px-4 py-2 shadow-sm shadow-black text-black rounded ${ativo === el.categoria ? 'bg-[#201b17] text-white' : 'bg-[#DEC8B2]'}`}
                        >
                            {el.categoria}
                        </button>
                    ))}
                </div>
            </div>
            
            <div className='max-w-screen-xl mx-1 md:mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {produtosFiltrados.length > 0 ? (
                    produtosFiltrados.map((item) => (
                        <CardProduto
                            key={item.id}
                            id={item.id}
                            imagem={item.image}
                            nome={item.title}
                            preco={item.price}
                            onClickCarrinho={() => adicionarProduto(item)} 
                        />
                    ))
                ) : (
                    <p>Nenhum produto encontrado.</p>
                )}
            </div>
        </section>
    );
};

export default ListaProdutos;
