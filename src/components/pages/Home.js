import logoquest from './../../images/logoQuestBranco.svg';
import image from './../../images/ImagemFundo.svg';

import styles from './CSS/Home.css';

function Home() {
    return (
    <div className='FundoTotal'>
        <div className="FundoApp" >
            <div className='Fun-app-logo'>
                <img className="App-logo" src={logoquest}  alt="logo" />
            </div>
            <div className='Botao'>
                <button className='Jogar'>
                    Jogar
                </button>
            </div>
        </div>
    </div>
    )
}

export default Home