import Input from "../form/Input.js"
import SubmitButton from "../form/SubmitButton.js"
import "./LoginForm.css"

function LoginForm( {btnText} ) {
    return (
        <form className="form">
            <Input 
                type="text" 
                text="E-mail" 
                name="name" 
                placeholder="E-mail" 
            />
            <Input 
                type="text" 
                text="Senha" 
                name="name" 
                placeholder="Senha" 
            />
            <div className="form_btn">
                <SubmitButton text={btnText} />
            </div>
        </form>
    )
}

export default LoginForm