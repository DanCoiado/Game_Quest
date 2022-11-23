import logoquest from './../../images//logoQuest.svg';
import caminho from './../../images/sair.svg';
import './CSS/Default.css';
import './CSS/Cadastro.css';
import LinkImagem from '../layout/LinkImagem';
import CadastroForm from '../Formularios/CadastroForm';
import LinkButton from '../layout/LinkButton';
import * as React from 'react';

function Cadastro() {
    return (
        <div class="container h-100">
		<div class="d-flex justify-content-center h-100">
			<div class="user_card">
				<div className="sair">
                <LinkImagem to = "/" text="brand_logo" caminho={caminho} alt="Sair"/>
				</div>
				<div class="d-flex justify-content-around">
					<div class="d-flex flex-column">
						<div class="brand_logo_container">
							<img className="brand_logo" src={logoquest} alt="Logo" />
							<div class="mt-4">
							<div class="d-flex flex-column">
                                <p>Já possui cadastro? </p>
								<div class="d-flex justify-content-center mt-3 login_container">
				 			        <button type="button" name="button" class="btn secundario_btn">
                                     <LinkButton to = "/Login" text='Login'/>
                                    </button>
				   		        </div>
							</div>
							</div>
						</div>
					</div>
					<div class="d-flex flex-column form_container_cad">
					<h2 id="login-cadastro">Cadastro</h2>
					<CadastroForm btnText="Cadastrar" />
					</div>
				</div>

				</div>
			</div>
	</div>
    )
}

export default Cadastro