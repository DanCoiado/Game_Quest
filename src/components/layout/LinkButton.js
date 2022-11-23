import './LinkButton.css'
import { Link } from 'react-router-dom'
import * as React from 'react'

function LinkButton({ to, text }) {
    return (
        <Link className='btn' to={to}>        
            {text}
        </Link>
    )
}

export default LinkButton