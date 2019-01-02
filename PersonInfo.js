import React, {Component} from 'react';
import './App.css';
import Form from './Form.js';
import Table from './Table.js';

const personInfo = (props) => {

    return (
      <div className="PersonInfo">
          {/* <Table data={props.items} />  */}
          {/* { props.persons.map((person) => < Form data={person}/>)} */}
                  
          { <Form 
              handleFormSubmit = { props.handleFormSubmit } 
              handleInputChange={ props.handleInputChange }
              id = { props.persons.id }
              firstName = { props.persons.firstName }
              lastName ={ props.persons.lastName}
              email = { props.persons.email}
              birthDate = {props.persons.birthDate}
          />}
        </div>
      );
    }
  
export default personInfo;