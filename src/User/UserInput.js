import React from 'react';
import "./User.css"

const userInput = (props) => {
    return (
        <div className="User">
            Eingabe: <input onChange={props.change} type="text" value={props.name}></input>
        </div>
    );
}

export default userInput;