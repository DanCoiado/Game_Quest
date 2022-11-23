import './LinkImagem.css'
import { Link } from 'react-router-dom'
import * as React from 'react'

function LinkImagem({ to, text, caminho, alt }) {
    return (
        <Link to={to}>        
            <img className={text} src={caminho} alt={alt}/>
        </Link>
    )
}

export default LinkImagem