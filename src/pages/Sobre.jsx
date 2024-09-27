import React from 'react';
import HeaderNavbar from '../components/HeaderNavbar';
import Footer from '../components/Footer';

const Sobre = () => {
  return (
    <>

    <HeaderNavbar />

    <section className='h-screen bg-[#A48065] flex flex-col lg:flex-row items-center'>
      <div className='w-full lg:w-1/2 h-[50%] lg:h-full flex justify-center items-center'>
  
        <img src="./bg_loja.jpg" alt="Descrição da imagem" className='w-full h-full object-cover' />
      </div>

      <div className='w-full h-full lg:w-1/2 p-4 lg:p-10 flex flex-col justify-center items-center lg:items-start'>
        <h2 className='mb-4 lg:mb-10 font-bold uppercase text-2xl lg:text-3xl text-center lg:text-left'>
          Lorem ipsum dolor sit amet.
        </h2>
        <p className='mb-4 lg:mb-5 text-lg lg:text-xl text-center lg:text-left'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, omnis libero, dicta amet reiciendis voluptates rerum corporis adipisci accusamus magnam quo cupiditate! Officiis veniam id architecto ratione consectetur, voluptate minus?
        </p>
        <p className='text-lg lg:text-xl text-center lg:text-left'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea culpa autem earum, voluptate ab perspiciatis libero hic voluptates suscipit laborum tenetur fugiat mollitia cupiditate eius cum animi voluptatibus esse optio.
        </p>
      </div>
    </section>

    <Footer/>
    </>
  );
};

export default Sobre;