import logoquest from './../../images//logoQuest.svg';
import styles from './CSS/Cadastro.css';

function Cadastro() {
    return (
        <div className='cadastro-FundoTotal'>
            <div className="cadastro-FundoApp" >
                <div className='cadastro-FundoBranco'>
                    <div className='cadastro-DivEsquerda'>
                        <div className='cadastro-gradient-LogoQuest'>
                            <img className="cadastro-LogoQuest" src={logoquest} alt="logo" />
                        </div>
                        <div className='cadastro-Cadastro'>
                            <p> Já possui cadastro ?</p>
                            <button className='botao-Cadastro'>Login</button>
                        </div>

                    </div>
                    <div className='cadastro-DivDireita'>
                        <div className='cadastro-Texto-Login'>
                            <p>Login</p>
                        </div>
                        <div className='cadastro-Div-Forms'>
                            <form className='cadastro-Forms-Containt'>
                                <div className='cadastro-Forms-Input-Container'>
                                    {/* <label>E-mail</label> */}
                                    <input placeholder='E-mail' type='text' name='E-mail' />
                                </div>
                                <div className='cadastro-Forms-Input-Container'>
                                    {/* <label>Senha</label> */}
                                    <input placeholder='Senha' type='text' name='Senha' />
                                </div>
                            </form>
                        </div>
                        
                        <div className='cadastro-Login'>
                            <button className='botao-Login'>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cadastro