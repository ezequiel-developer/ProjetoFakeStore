import React, { useState } from 'react';
import HeaderNavbar from '../components/HeaderNavbar';
import ConteudoCarrinho from '../components/ConteudoCarrinho';
import { useCarrinho } from '../contexts/CarrinhoContext';

const Carrinho = () => {
    const { carrinho, valorTotal, limparCarrinho } = useCarrinho(); // 
    const [compraFinalizada, setCompraFinalizada] = useState(false);
    const [dadosCompra, setDadosCompra] = useState({
        nome: '',
        sobrenome: '',
        cpf: '',
        telefone: '',
        cep: '',
        logradouro: '',
        cidade: '',
        numero: '',
        pagamento: '',
        numeroCartao: '',
        nomeTitular: '',
        validade: '',
        codigoSeguranca: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDadosCompra((prev) => ({ ...prev, [name]: value }));
    };

    const handleFinalizarCompra = () => {
        if (validarFormulario()) {
   

            setCompraFinalizada(true);
           // delay antes de limpar o carrinho
        setTimeout(() => {
            limparCarrinho();
            setDadosCompra({
                nome: '',
                sobrenome: '',
                cpf: '',
                telefone: '',
                cep: '',
                logradouro: '',
                cidade: '',
                numero: '',
                pagamento: '',
                numeroCartao: '',
                nomeTitular: '',
                validade: '',
                codigoSeguranca: '',
            });
        }, 5000);
        } else {
            alert('Preencha todos os campos corretamente!');
        }
    };

    const validarFormulario = () => {
        // Verifica se todos os campos obrigatórios estão preenchidos
        const { nome, sobrenome, cpf, telefone, cep, logradouro, cidade, numero, pagamento, numeroCartao, nomeTitular, validade, codigoSeguranca } = dadosCompra;
        return nome && sobrenome && cpf && telefone && cep && logradouro && cidade && numero && pagamento && numeroCartao && nomeTitular && validade && codigoSeguranca;
    };

    return (
        <>
            <HeaderNavbar />

            {carrinho.length === 0 ? (
        <p className='text-black text-center mt-[80px] p-4'>Carrinho vazio</p>
      ) : (

        <section className='grid gap-4 grid-cols-12 w-full mt-[80px]'>
        {/* Coluna para dados pessoais e entrega */}
        <div className='col-span-12 md:col-span-5 border-2 h-screen p-4'>
            <div className='flex flex-col'>
                {/* Coluna para conteúdo do carrinho */}
                <div className='md:hidden col-span-12 md:col-span-7 p-4'>
                    <div className='w-full'>
                        <ConteudoCarrinho className='w-full h-full' />
                    </div>
                </div>

                <h2 className='text-center font-bold text-lg mt-4 uppercase'>Dados Pessoais</h2>
                <div className='flex flex-col w-full'>


                    <label className='text-sm font-semibold'>
                        Nome
                        <input
                            type="text"
                            name="nome"
                            value={dadosCompra.nome}
                            onChange={handleChange}
                            className='mt-1 p-1 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
                            required
                        />
                    </label>
                    <label className='text-sm font-semibold'>
                        Sobrenome
                        <input
                            type="text"
                            name="sobrenome"
                            value={dadosCompra.sobrenome}
                            onChange={handleChange}
                            className='mt-1 p-1 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
                            required
                        />
                    </label>
                    <label className='text-sm font-semibold'>
                        CPF:
                        <input
                            type="text"
                            name="cpf"
                            value={dadosCompra.cpf}
                            onChange={handleChange}
                            className='mt-1 p-1 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
                            required
                        />
                    </label>
                    <label className='text-sm font-semibold'>
                        Telefone
                        <input
                            type="text"
                            name="telefone"
                            value={dadosCompra.telefone}
                            onChange={handleChange}
                            className='mt-1 p-1 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
                            required
                        />
                    </label>
                </div>

                <h2 className='text-center font-bold text-lg mt-4 uppercase'>Dados Entrega</h2>
                <div className='flex flex-col w-full'>
                    <label className='text-sm font-semibold'>
                        CEP:
                        <input
                            type="text"
                            name="cep"
                            value={dadosCompra.cep}
                            onChange={handleChange}
                            className='mt-1 p-1 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
                            required
                        />
                    </label>
                    <label className='text-sm font-semibold'>
                        Logradouro
                        <input
                            type="text"
                            name="logradouro"
                            value={dadosCompra.logradouro}
                            onChange={handleChange}
                            className='mt-1 p-1 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
                            required
                        />
                    </label>
                    <label className='text-sm font-semibold'>
                        Cidade:
                        <input
                            type="text"
                            name="cidade"
                            value={dadosCompra.cidade}
                            onChange={handleChange}
                            className='mt-1 p-1 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
                            required
                        />
                    </label>
                    <label className='text-sm font-semibold'>
                        Número:
                        <input
                            type="text"
                            name="numero"
                            value={dadosCompra.numero}
                            onChange={handleChange}
                            className='mt-1 p-1 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
                            required
                        />
                    </label>
                </div>

                <h2 className='text-center font-bold text-lg mt-4 uppercase'>Pagamento</h2>

                <div className='flex justify-center gap-10'>
                    <label>
                        <input
                            type="radio"
                            name="pagamento"
                            value="Crédito"
                            checked={dadosCompra.pagamento === 'Crédito'}
                            onChange={handleChange}
                        />
                        Crédito
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="pagamento"
                            value="Débito"
                            checked={dadosCompra.pagamento === 'Débito'}
                            onChange={handleChange}
                        />
                        Débito
                    </label>
                </div>

                <div className='flex flex-col w-full'>
                    <label className='text-sm font-semibold'>Número do Cartão:</label>
                    <input
                        type="text"
                        name="numeroCartao"
                        value={dadosCompra.numeroCartao}
                        onChange={handleChange}
                        placeholder="1234 5678 9012 3456"
                        className='mt-1 p-1 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
                        required
                    />
                    <label className='text-sm font-semibold'>Nome do Titular:</label>
                    <input
                        type="text"
                        name="nomeTitular"
                        value={dadosCompra.nomeTitular}
                        onChange={handleChange}
                        placeholder="Nome Completo"
                        className='mt-1 p-1 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
                        required
                    />
                    <div className="flex gap-4">
                        <div className="flex-1">
                            <label className='text-sm font-semibold'>Data de Validade:</label>
                            <input
                                type="text"
                                name="validade"
                                value={dadosCompra.validade}
                                onChange={handleChange}
                                placeholder="MM/AA"
                                className='mt-1 p-1 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
                                required
                            />
                        </div>
                        <div className="flex-1">
                            <label className='text-sm font-semibold'>Código de Segurança:</label>
                            <input
                                type="text"
                                name="codigoSeguranca"
                                value={dadosCompra.codigoSeguranca}
                                onChange={handleChange}
                                placeholder="123"
                                className='mt-1 p-1 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
                                required
                            />
                        </div>
                    </div>

                </div>

                {!compraFinalizada ? (
                    <button
                        className='bg-green-600 text-white hover:bg-green-700 hover:text-black font-bold py-2 my-8'
                        onClick={handleFinalizarCompra}
                    >
                        Comprar
                    </button>
                ) : (
                    <div className="text-center my-4">
                        <h2 className='text-lg font-bold'>Compra finalizada com sucesso!</h2>
                        <p className='text-sm'>Obrigado por comprar conosco!</p>
                    </div>
                )}
            </div>

        </div>

        {/* Coluna para conteúdo do carrinho */}
        <div className='hidden md:block md:col-span-7 p-4'>
            <div className='w-full'>
                <ConteudoCarrinho className='w-full h-full' />
                <h4 className='font-bold'>Total: R${valorTotal.toFixed(2)}</h4>
            </div>
        </div>

        {compraFinalizada && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-5 rounded shadow-lg text-center">
                        <h2 className='text-lg font-bold'>Compra finalizada com sucesso!</h2>
                        <p className='text-sm'>Obrigado por comprar conosco!</p>
                        <button
                            className='mt-4 bg-green-500 text-white py-2 px-4 rounded'
                            onClick={() => setCompraFinalizada(false)} // Fecha o overlay
                        >
                            Fechar
                        </button>
                    </div>
                </div>
        )}
    </section>

      )}
           
        </>
    );
};

export default Carrinho;
