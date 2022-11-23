import logoquest from './../../images/logoQuest.svg';
import caminho from './../../images/sair.svg';
import './CSS/Default.css';
import './CSS/Login.css';
import LinkImagem from '../layout/LinkImagem';
import LoginForm from '../Formularios/LoginForm';
import LinkButton from '../layout/LinkButton';
import * as React from 'react';

function Login() {
    return (
        <div class="container h-100">
		<div class="d-flex justify-content-center h-100">
			<div class="user_card">
				<div className="sair">
                <LinkImagem to = "/" text="brand_logo" caminho={caminho} alt="Sair">
                </LinkImagem>
				</div>
				<div class="d-flex justify-content-around">
					<div class="d-flex flex-column">
						<div class="brand_logo_container">
							<img className="brand_logo" src={logoquest} alt="Logo" />
							<div class="mt-4">
							<div class="d-flex flex-column">
                                <p>Não tem conta? </p>
								<div class="d-flex justify-content-center mt-3 login_container">
				 			        <button type="button" name="button" class="btn secundario_btn">
                                     <LinkButton to = "/Cadastro" text='Cadastre-se'/>
                                    </button>
				   		        </div>
							</div>
							</div>
						</div>
					</div>
					<div class="d-flex flex-column form_container">
					<h2 id="login-cadastro">Login</h2>
					<LoginForm btnText="Entrar" />
					</div>
				</div>

				</div>
			</div>
	</div>
    )
}

export default Login