import React from 'react';
import './App.css';

const input = (props) => {
    const inputElement = <input className="InputElement" {...props}/>;
  
    // switch(props.inputType) {
    //     case('input'): inputElement = <input  className="InputElement" {...props} />;
    //     break;
    //     case('textarea'): inputElement = <textarea  className="InputElement" {...props} />;
    //     break;
    //     default: inputElement = <input className="InputElement" {...props} />;               
    // }
 
    return (
        <div>
            <label className="Label">{props.label}</label>
            {inputElement}
        </div>

    );
};

export default input;