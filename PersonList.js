import React, {Component} from 'react';
import './App.css';
import Table from './Table.js';

const personList = (props) => {
    return(
        <div className="PersonList">
                <table>
                    <tr>
                        <th>ID</th>
                        <th>FIRSTNAME</th>
                        <th>LASTNAME</th>
                        <th>EMAIL</th>
                        <th>BIRTHDATE</th>
                        <th>ACTION</th>
                    </tr>
                    {props.persons.map((person, index) => <Table key = {index}
                                                                data = {person} />)
                    }
                </table>
        </div>
        );
    }

export default personList;