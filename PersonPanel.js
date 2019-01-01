import React, {Component} from 'react';
import './App.css';
import Form from './Form.js';
import Table from './Table.js';


const personPanel = () => {
    return(
        <div className="PersonPanel"> 
            <div id="personList">
                <Table/>
                <button>ADD</button>
            </div>
            <div>
                <Form/>
                <button>SUBMIT</button>
                <button>RESET</button>
            </div>
        </div>
    );
}

export default personPanel;
