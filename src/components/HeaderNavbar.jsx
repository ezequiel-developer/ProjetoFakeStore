import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useCarrinho } from '../contexts/CarrinhoContext';
import { Link } from 'react-router-dom';
import CarrinhoModal from './CarrinhoModal';

const HeaderNavbar = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [isOpenCarrinho, setIsOpenCarrinho] = useState(false);
    const { itens } = useCarrinho();
    const refCarrinho = useRef(null);
    const refMenu = useRef(null)

    const handleMenu = () => {
        setIsOpenMenu(!isOpenMenu);
    };

    const handleCarrinho = () => {
        setIsOpenCarrinho(!isOpenCarrinho);
    };

    const handleCarrinhoClickFora = (event) => {
        if (!refCarrinho.current.contains(event.target)) {
            setIsOpenCarrinho(false);
        }
    };

    const handleMenuClickFora = (event) =>{
        if(!refMenu.current.contains(event.target)){
            setIsOpenMenu(false)
        }
    }

    // Adiciona e remove o evento de clique fora quando o carrinho está aberto/fechado
    useEffect(() => {
        if (isOpenCarrinho) {
            document.addEventListener('mousedown', handleCarrinhoClickFora);
        }

        if(isOpenMenu){
            document.addEventListener('mousedown', handleMenuClickFora)
        }
    }, [isOpenCarrinho, isOpenMenu]);


    return (
        <header>
            {/* MENU TELAS MD */}
            <div className="hidden md:flex justify-around items-center bg-black text-white h-[60px] fixed w-full top-0 left-0 z-10">
                <span>
                <Link to="/ProjetoFakeStore/">FakeStore</Link>
                </span>
                <nav>
                    <ul className="flex gap-6">
                        <li>
                            <Link to="/ProjetoFakeStore/">Home</Link>
                        </li>
                        <li>
                            <Link to="/ProjetoFakeStore/sobre">Sobre</Link>
                        </li>
                        <li>
                            <Link to="/ProjetoFakeStore/contatos">Contatos</Link>
                        </li>
                    </ul>
                </nav>

                <div>
                    <button onClick={handleCarrinho}>
                        <FontAwesomeIcon icon={faShoppingCart} />
                        <span className="ml-2">( {itens} )</span>
                    </button>
                </div>
            </div>

            {/* MENU MOBILE */}
            <div className="md:hidden bg-black text-white fixed w-full top-0 left-0 px-6 z-20">
                <div className="flex justify-between items-center h-[60px]">
                    <span>
                    <Link to="/ProjetoFakeStore/">FakeStore</Link>
                    </span>

                    <div className='flex gap-6'>

                        <div>

                            <span className="ml-2">
                                <Link to='/ProjetoFakeStore//carrinhoDeCompras'>

                                    <FontAwesomeIcon icon={faShoppingCart} className='cursor-default mr-2' />
                                    ( {itens} )
                                </Link>
                            </span>

                        </div>
                        <button
                            onClick={handleMenu}
                            aria-expanded={isOpenMenu}
                            aria-label="Toggle menu"
                        >
                            <FontAwesomeIcon icon={isOpenMenu ? faTimes : faBars} />
                        </button>
                    </div>


                </div>
            </div>

            {/* MENU MOBILE VISÍVEL */}
            <nav
                className={`transition-transform ${isOpenMenu ? 'block' : 'hidden'} fixed top-[62px] shadow-black shadow-md text-center text-xl right-0 w-[50%] h-full bg-[#F5DECB]  py-4 z-30`}
                ref={refMenu}
            >
                <nav>
                    <ul className="flex flex-col">
                        <li className='hover:bg-black hover:text-white py-3 w-full'>
                            <Link to="/ProjetoFakeStore/">Home</Link>
                        </li>
                        <li className='hover:bg-black hover:text-white py-3 w-full'>
                            <Link to="/ProjetoFakeStore/sobre">Sobre</Link>
                        </li>
                        <li className='hover:bg-black hover:text-white py-3 w-full'>
                            <Link to="/ProjetoFakeStore/contatos">Contatos</Link>
                        </li>

                        <li className='hover:bg-black hover:text-white py-3 w-full'>
                            <Link to='/ProjetoFakeStore/carrinhoDeCompras'>
                                Carrinho
                            </Link>
                        </li>
                    </ul>
                </nav>
            </nav>

            {/* CARRINHO MODAL */}
            {isOpenCarrinho && (
                <div ref={refCarrinho}>
                    <CarrinhoModal />
                </div>
            )}
        </header>
    );
};

export default HeaderNavbar;
