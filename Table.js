import React from 'react';
import './App.css';

const table = (props) => {
    
    return(
        <tr className="Record"  onClick={props.select}>
                <td>{props.data.id}</td>
                <td>{props.data.firstName}</td>
                <td>{props.data.lastName}</td>
                <td>{props.data.email}</td>
                <td>{props.data.birthDate}</td>
                <td><input type="button" id="deleteButton" onClick={props.remove} value="DELETE" /></td>
        </tr>
    );
}

export default table;