import React, {Component} from 'react';
import './App.css';
import Form from './Form.js';

const personInfo = (props) => {
  
    // componentDidMount() {
    //     let personInfo = null;
    //     if(this.props.match.params.id) {
    //       if(!this.props.isRowSelected) {
    //           console.log(this.props.match.params.index);
    //             axios.get('http://localhost:8080/ws/person.html?id=%d&includeAddress=false', this.props.id)
    //             .then(response=> console.log(response))
    //       }  
    //     }
    // }    

    // componentDidUpdate()

  return (
      <div className="PersonInfo">
        { <Form 
          id = { props.personSelected.id }
          firstName = {props.personSelected.firstName }
          lastName = { props.personSelected.lastName}
          email = { props.personSelected.email}
          birthDate = {props.personSelected.birthDate}
          formSubmit = {props.submitClick} 
          inputChange = {props.change }
          formReset = {props.resetClick}
          add = {props.addClick}
          // form ={props.create}
        />}                     
     </div>
    );
  }

export default personInfo;