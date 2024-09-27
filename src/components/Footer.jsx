import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black text-white  py-8">
            <div className="container text-center mx-auto grid grid-cols-1 md:grid-cols-4 gap-8  md:text-left">

                {/* Seção Logo */}
                <div>
                    <h4 className="text-xl font-bold mb-4">Logo</h4>
                    <p className="text-gray-400">Lorem ipsum dolor sit adipisicing elit.</p>
                </div>

                {/* Seção Localização */}
                <div>
                    <h4 className="text-xl font-bold mb-4">Localização</h4>
                    <p className="mb-8 text-gray-400">
                        Av. Principal, 123 - Centro<br />
                        Cidade Exemplo
                    </p>
                </div>


                <div>
                    <h4 className="text-xl font-bold mb-4">Funcionamento</h4>
                    <p className="text-gray-400">Segunda a Sexta: 9h - 18h</p>
                    <p className="text-gray-400">Sábado: 9h - 14h</p>
                    <p className="text-gray-400">Domingo: Fechado</p>
                </div>

                <div className='flex gap-2 justify-center'>
                    <FaFacebook
                        className="text-white hover:text-gray-600 cursor-not-allowed"
                        size={40}
                    />
                    <FaInstagram
                        className="text-white hover:text-gray-600 cursor-not-allowed"
                        size={40}
                    />
                    <FaWhatsapp
                        className="text-white hover:text-gray-600 cursor-not-allowed"
                        size={40}
                    />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
