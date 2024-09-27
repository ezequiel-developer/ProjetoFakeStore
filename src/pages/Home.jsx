import React from 'react'
import HeaderNavbar from '../components/HeaderNavbar'
import Headline from '../components/Headline'
import ListaProdutos from '../components/ListaProdutos'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <main>
        <HeaderNavbar />
        <Headline />
        <ListaProdutos />
        <Footer />
    </main>
  )
}

export default Home
