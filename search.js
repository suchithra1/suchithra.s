import React from 'react';

const search = (props) => {
    let suggestion = null;
    if (props.suggest) {
        suggestion = (
            <ul>
              {props.suggest.map((item, index) => {
                return (
                    <li
                      key={index}
                      onClick={() => props.onClick(item)}>
                      {item[props.show]}
                    </li>
                    );
                })}
            </ul>
        );
    }

    return (
        <div>
            <label>{props.label}</label>
            <input type='text' placeholder={props.placeholder} onChange={props.onChange}/>
            {suggestion}
        </div>
    );
};

export default search;
