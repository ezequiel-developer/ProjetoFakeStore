import React from 'react';
import './App.css';
import Home from './pages/Home';
import { CarrinhoProvider } from './contexts/CarrinhoContext';
import Carrinho from './pages/Carrinho';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Detalhes from './pages/Detalhes';
import Sobre from './pages/Sobre';
import Contatos from './pages/Contatos';

function App() {
    return (
        <CarrinhoProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/carrinhoDeCompras" element={<Carrinho />} />
                    <Route path="/detalhesProduto/:id" element={<Detalhes />} />
                    <Route path="/sobre" element={<Sobre />} />
                    <Route path="/contatos" element={<Contatos />} />
                </Routes>
            </Router>
        </CarrinhoProvider>
    );
}

export default App;
