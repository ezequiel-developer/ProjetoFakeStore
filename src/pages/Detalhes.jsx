import React, { useEffect, useState } from 'react';
import HeaderNavbar from '../components/HeaderNavbar';
import { useParams } from 'react-router-dom';
import { useCarrinho } from '../contexts/CarrinhoContext';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../components/Footer';

const Detalhes = () => {
    const { id } = useParams(); // Pega o ID do produto da URL
    const [produtoDetalhes, setProdutoDetalhes] = useState(null); // Estado inicial nulo
    const [carregando, setCarregando] = useState(true); // Estado de carregamento
    const [erro, setErro] = useState(false); // Estado de erro
    const { adicionarProduto } = useCarrinho();

    const buscarprodutoDetalhes = async () => {
        try {
            const dados = await fetch(`https://fakestoreapi.com/products/${id}`);
            const resposta = await dados.json();
            setProdutoDetalhes(resposta); // Atualiza o estado com os detalhes do produto
            setCarregando(false); // Fim do carregamento
        } catch (error) {
            console.error('Erro ao buscar os detalhes do produto:', error);
            setErro(true); // Marca que houve erro
            setCarregando(false); // Fim do carregamento mesmo com erro
        }
    };

    useEffect(() => {
        buscarprodutoDetalhes(); // Chama a função ao carregar o componente
    }, [id]);

    if (carregando) {
        return <p>Carregando detalhes do produto...</p>;
    }

    if (erro) {
        return <p>Erro ao carregar o produto. Tente novamente mais tarde.</p>;
    }

    return (
        <>
            <HeaderNavbar />
            <section className="h-screen mx-4 md:mx-0 mt-[60px] border-2 flex justify-center items-center">
                <div className='grid mx-auto  md:grid-cols-12 md:gap-8'>
                    {produtoDetalhes && (
                        <>
                            <div className='grid mx-auto md:col-span-4'>
                                <img 
                                    src={produtoDetalhes.image} 
                                    alt={produtoDetalhes.title} 
                                    className="h-64 w-64 object-contain" 
                                />
                            </div>

                            <div className='md:col-span-7'>
                                <h2 className="text-2xl font-bold">{produtoDetalhes.title}</h2>
                                <p className="mt-2 text-gray-600 text-justify">{produtoDetalhes.description}</p>

                                <div className='flex gap-4 justify-center md:justify-start items-center'>

                                <button
                                    onClick={() => adicionarProduto(produtoDetalhes)}
                                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                                >
                        <FontAwesomeIcon icon={faShoppingCart} />
                                </button>
                                <p className="text-xl font-bold mt-4">$ {produtoDetalhes.price?.toFixed(2)}</p>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Detalhes;
