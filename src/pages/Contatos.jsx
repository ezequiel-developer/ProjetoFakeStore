import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import HeaderNavbar from '../components/HeaderNavbar';
import Footer from '../components/Footer';

const Contatos = () => {
  return (
    <>
    <HeaderNavbar />
    <section className="flex flex-col justify-center items-center h-screen mt-[60px]">
      <div className="text-center">
        <img src="/contatos.png" alt="Loja de Roupas" className="h-[300px] md:h-[400px] mb-4" />
        <div className="flex justify-center space-x-8 mb-5">
          {/* Ícones de redes sociais desabilitados */}
          <FaFacebook
            className="text-[#6D1C18] hover:text-gray-600 cursor-not-allowed"
            size={40}
          />
          <FaInstagram
            className="text-[#6D1C18] hover:text-gray-600 cursor-not-allowed"
            size={40}
          />
          <FaWhatsapp
            className="text-[#6D1C18] hover:text-gray-600 cursor-not-allowed"
            size={40}
          />
        </div>
        <p className="mb-4 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, vitae!.</p>
        <p className="mb-8 text-gray-600">Localização: Av. Principal, 123 - Centro, Cidade Exemplo</p>

      </div>
    </section>

    <Footer />
    </>
  );
};

export default Contatos;
