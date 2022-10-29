import logoquest from './../../images/logoQuest.svg';
import styles from './CSS/Login.css';

function Login() {
    return (
        <div className='login-FundoTotal'>
            <div className="login-FundoApp" >
                <div className='login-FundoBranco'>
                    <div className='login-DivEsquerda'>
                        <div className='login-gradient-LogoQuest'>
                            <img className="login-LogoQuest" src={logoquest} alt="logo" />
                        </div>
                        <div className='login-Cadastro'>
                            <p> Ainda não tem conta ?</p>
                            <button className='botao-Cadastro'>Cadastre-se</button>
                        </div>

                    </div>
                    <div className='login-DivDireita'>
                        <div className='login-Texto-Login'>
                            <p>Login</p>
                        </div>
                        <div className='login-Div-Forms'>
                            <form className='login-Forms-Containt'>
                                <div className='login-Forms-Input-Container'>
                                    {/* <label>E-mail</label> */}
                                    <input placeholder='E-mail' type='text' name='E-mail' />
                                </div>
                                <div className='login-Forms-Input-Container'>
                                    {/* <label>Senha</label> */}
                                    <input placeholder='Senha' type='text' name='Senha' />
                                </div>
                            </form>
                        </div>
                        
                        <div className='login-Login'>
                            <button className='botao-Login'>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login