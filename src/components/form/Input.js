import "./Input.css";
import * as React from 'react';

function Input({type, text, name, handleOnChange, value, id}) {
    if (id === "cad"){
        return(
            <div className="form-group-cad">
                {<label htmlFor={name}>{text}:</label>}
                <input class="form-control"
                    type={type} 
                    name={name}
                    onChange={handleOnChange} 
                    value={value} 
                />
            </div>
        )
        } else{
            return(
                <div className="form-group">
                    {<label htmlFor={name}>{text}:</label>}
                    <input class="form-control"
                        type={type} 
                        name={name} 
                        onChange={handleOnChange} 
                        value={value} 
                    />
                </div>
            )
        }
}

export default Input