import Input from "../form/Input.js"
import SubmitButton from "../form/SubmitButton.js"
import "./LoginForm.css"
import * as React from 'react'

function LoginForm( {btnText} ) {
    return (
        <form>
            <Input 
                type="email" 
                text="E-mail" 
                name="email" 
                placeholder="E-mail" 
                id="log"
            />
            <Input 
                type="password" 
                text="Senha" 
                name="senha" 
                placeholder="Senha" 
                id="log"
            />
            <div class="d-flex justify-content-center mt-3 login_container">
                <SubmitButton text={btnText} />
            </div>
        </form>
    )
}

export default LoginForm