import React from 'react';
import "./User.css"

const userOutput = (props) => {
    return (
        <div className="User">
            <p>Ausgabe</p>
            <p>{props.output}</p>
        </div>
    );
}

export default userOutput;