import React from 'react';
import './App.css';

const table = () => {
    return(
        <table className="Table" >
            <tr>
                <th>ID</th>
                <th>FIRSTNAME</th>
                <th>LASTNAME</th>
                <th>EMAIL</th>
                <th>BIRTHDATE</th>
                <th>ACTION</th>
            </tr>  
            <tr>
                <td>%id%</td>
                <td>%firstname%</td>
                <td>%lastname%</td>
                <td>%email%</td>
                <td>%birthdate%</td>
                <td>
                    <button> DELETE</button>
                </td>    
            </tr>
        </table>   
    );
}

export default table;