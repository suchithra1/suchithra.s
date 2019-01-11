import React from 'react';

import './App.css';



const table = (props) => {

    

    return(

        <tbody>

            <tr className="Record"  onClick={props.select} key={props.index}>

                    <td>{props.data.id}</td>

                    <td>{props.data.firstName}</td>

                    <td>{props.data.lastName}</td>

                    <td>{props.data.email}</td>

                    <td>{props.data.birthDate}</td>

                    <td><input type="button" id="deleteButton" onClick={props.remove} value="DELETE" /></td>

            </tr>

        </tbody>

       

    );

}



export default table;