import "./Select.css"
import * as React from 'react'

function Select({text, name,options, handleOnChange, value}) {
    return(
        <div className="form_control">
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name} > 
                <option>Selecione uma opção</option>
            </select>
        </div>
    )

}

export default Select