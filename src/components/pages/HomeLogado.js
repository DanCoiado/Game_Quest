import logoquest from './../../images/logoQuestBranco.svg';
import './CSS/Default.css';
import './CSS/Home.css';
import './CSS/HomeLogado.css';
import LinkButton from '../layout/LinkButton';
import * as React from 'react';

function Home() {
    return (
    <div class="container h-100">
		<div class="d-flex justify-content-center h-100">
			<div class="user_card_home">
				<div class="d-flex flex-column">
				<div class="brand_logo_container">
					<img className="brand_logo_home" src={logoquest} alt="Logo" />
				</div>
				 	<button type="button" name="button" class="btn principal_btn_home">
                        <LinkButton to = "/Jogo" text='Jogar'/>
                    </button>
					<button type="button" name="button" class="btn principal_btn_home">
                        <LinkButton to = "/Ranking" text='Ranking'/>
                    </button>
				</div>
			</div>
		</div>
	</div>
    )
}

export default Home