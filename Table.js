import React from 'react';
import './App.css';

const table = (props) => {
    
    return(
        <tr className="Record">
                <td>{props.data.id}</td>
                <td>{props.data.firstName}</td>
                <td>{props.data.lastName}</td>
                <td>{props.data.email}</td>
                <td>{props.data.birthDate}</td>
                <td><input type="button" id="deleteButton" onClick={props.click} value="DELETE" /></td>
        </tr>
    );
}

export default table;