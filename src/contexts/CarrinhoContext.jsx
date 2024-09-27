import React, { createContext, useState, useContext, useEffect } from "react";

// Cria o contexto
const CarrinhoContext = createContext();

// Fornece o contexto para os componentes
export const CarrinhoProvider = ({ children }) => {
    const [carrinho, setCarrinho] = useState([]);
    const [itens, setItens] = useState(0)
    const [valorTotal, setValorTotal] = useState(0)

    const adicionarProduto = (produto) => {
        // Verifica se o produto já está no carrinho
        const produtoExistente = carrinho.find((el) => el.id === produto.id);

        if (!produtoExistente) {
            // Adiciona o produto ao carrinho
            setCarrinho((prev) => [...prev, { ...produto, quantidade: 1 }]);
        } else {
            setCarrinho((prev) => prev.map((item) => (
                item.id === produto.id
                    ? { ...item, quantidade: item.quantidade + 1 }
                    : item
            )))
        }

        console.log('Carrinho:', carrinho);
    };
    const removerProduto = (produto) => {
        // Filtra os produtos, mantendo apenas aqueles que não têm o id igual ao produto a ser removido
        setCarrinho((prev) => prev.filter((item) => item.id !== produto.id));
    };

    const limparCarrinho = () =>{
        setCarrinho([])
    }

    const calculoValorTotal = () => {
        const total = carrinho.reduce((acc, item) => acc + item.price * item.quantidade, 0)
        setValorTotal(total)
        console.log('valor Total', valorTotal)
    }


    const totalItens = () => {
        const total = carrinho.reduce((acc, item) => acc + item.quantidade, 0)
        setItens(total)
        console.log('itens quantidade', itens)
    }

    useEffect(() => {
        totalItens()
        calculoValorTotal()
    }, [carrinho])

    
    const atualizarQuantidade = (produtoID, novaQuantidade) => {
        if (novaQuantidade < 1) {
            novaQuantidade = 1
        }

        setCarrinho((prev) =>
            prev.map((item) =>
                item.id === produtoID
                    ? { ...item, quantidade: novaQuantidade }
                    : item
            )
        )
    }

    return (
        <CarrinhoContext.Provider value={{ carrinho, adicionarProduto, itens, removerProduto, valorTotal, atualizarQuantidade, limparCarrinho }}>
            {children}
        </CarrinhoContext.Provider>
    );
};

// Hook customizado para usar o contexto
export const useCarrinho = () => {
    return useContext(CarrinhoContext);
};
