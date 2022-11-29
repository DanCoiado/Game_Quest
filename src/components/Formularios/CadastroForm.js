import Input from "../form/Input.js"
import SubmitButton from "../form/SubmitButton.js"
import "./CadastroForm.css"

function CadastroForm( {btnText} ) {
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
                type="text" 
                text="Senha" 
                name="name" 
                placeholder="Senha" 
            />
            <Input 
                type="text" 
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