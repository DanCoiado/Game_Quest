import { useState } from "react"

import Input from "../form/Input.js"
import SubmitButton from "../form/SubmitButton.js"
import "./CadastroForm.css"

function CadastroForm( {btnText} ) {
    const [users, setUsers] = useState([])

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
        <form className="form">
            <Input 
                type="text" 
                text="Nome" 
                name="name" 
                placeholder="Nome" 
            />
            <Input 
                type="text" 
                text="Nickname" 
                name="name" 
                placeholder="Nickname" 
            />            
            <Input 
                type="text" 
                text="E-mail" 
                name="name" 
                placeholder="E-mail" 
            />
            <Input 
                type="password" 
                text="Senha" 
                name="name" 
                placeholder="Senha" 
            />
            <Input 
                type="password" 
                text="ConfirmaSenha" 
                name="name" 
                placeholder="Confirmar senha" 
            />
            <div className="form_btn">
                <SubmitButton text={btnText} />
            </div>
        </form>
    )
}

export default CadastroForm