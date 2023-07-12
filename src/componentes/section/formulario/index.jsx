import '@/componentes/section/formulario/formulario.css'


import React, { useState } from "react";


const FormularioContato = () => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [mensagem, setMensagem] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Dados enviados:", { nome, email, telefone, mensagem });
        setNome("");
        setEmail("");
        setTelefone("");
        setMensagem("");
    };

    function sendEmail(e){
        e.preventDefault();

        if (nome === '' | email === '' | telefone  === '' | mensagem === '' ){
             alert("preencha todos os campos");
             return;
        }

        alert("teste")
    }



    return (

        <form className="formulario-contato" onSubmit={sendEmail}>
            <h2 className='tituloForm'>Compre Conosco</h2>
            <p className='subtituloForm'>Você tem alguma dúvida? Já escolheu o seu produto? Entre em contato conosco</p>
            <hr />
            <label htmlFor="nome">Nome:</label>
            <input
                type="text"
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
            />

            <label htmlFor="email">E-mail:</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <label htmlFor="telefone">Telefone:</label>
            <input
                type="tel"
                id="telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                required
            />

            <label htmlFor="mensagem">Mensagem:</label>
            <textarea
                id="mensagem"
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                required
            ></textarea>

            <button type="submit">Enviar</button>
        </form>
    );
};

export default FormularioContato;
