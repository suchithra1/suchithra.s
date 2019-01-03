import React, {Component} from 'react';
import './App.css';
import Form from './Form.js';
import Table from './Table.js';

const personInfo = (props) => {

    return (
      <div className="PersonInfo">
          {/* <Table content={props.persons} />  */}
          {/* { props.persons.map((person) => < Form data={person}/>)} */}
                             
        { <Form 
              id = { props.persons.id }
              firstName = { props.persons.firstName }
              lastName = { props.persons.lastName}
              email = { props.persons.email}
              birthDate = {props.persons.birthDate}
              formSubmit = { props.submitClick } 
              inputChange= { props.change }
              formReset = {props.resetClick}
          />}
        </div>
      );
    }
  
export default personInfo;