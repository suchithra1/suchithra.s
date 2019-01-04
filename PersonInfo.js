import React from 'react';
import './App.css';
import Form from './Form.js';

const personInfo = (props) => {

    return (
      <div className="PersonInfo">
          {/* <Table content={props.persons} />  */}
          {/* { props.persons.map((person) => < Form data={person}/>)} */}

        { <Form 
              id = { props.personSelected.id }
              firstName = { props.personSelected.firstName }
              lastName = { props.personSelected.lastName}
              email = { props.personSelected.email}
              birthDate = {props.personSelected.birthDate}
              formSubmit = { props.submitClick } 
              inputChange= { props.change }
              formReset = {props.resetClick}
              formPopulate = {props.rowClicked}
          />}                     
      </div>
      );
    }
  
export default personInfo;