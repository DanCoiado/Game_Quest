import { useState } from "react";
import React, { Component }  from 'react';
import Input from "../form/Input.js"
import SubmitButton from "../form/SubmitButton.js"
import "./CadastroForm.css"

function CadastroForm( {btnText} ) {

    const [users, setUsers] = useState({
        name:'',
        nickname:'',
        email: '',
        senha: ''
    });

    const [status, setStatus] = useState({
        type:'',
        menseagem:''
    }) 

    fetch("http://localhost:5000/users", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((resp) => resp.json())
        .then((data) => {
            setUsers(data)
        })
        .catch((err) => console.log(err))

    return (
        <form>
            <Input 
                type="text" 
                text="Nome" 
                name="name" 
                placeholder="Nome" 
                id="cad"
            />
            <Input 
                type="text" 
                text="Nickname" 
                name="nickname" 
                placeholder="Nickname" 
                id="cad"
            />            
            <Input 
                type="email" 
                text="E-mail" 
                name="email" 
                placeholder="E-mail" 
                id="cad"
            />
            <Input 
                type="text" 
                text="Senha" 
                name="senha" 
                placeholder="Senha" 
                id="cad"
            />
            <Input 
                type="text" 
                text="ConfirmaSenha" 
                name="senha" 
                placeholder="Confirmar senha" 
                id="cad"
            />
            <div class="d-flex justify-content-center mt-3 login_container">
                <SubmitButton text={btnText} />
            </div>
        </form>
    )
}

export default CadastroForm