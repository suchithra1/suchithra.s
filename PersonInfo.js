import React, {Component} from 'react';
import './App.css';
import Form from './Form.js';

class PersonInfo extends Component {
    
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
        this.handleResetForm = this.handleResetForm.bind(this);
        this.handlePopulateForm = this.handlePopulateForm.bind(this);
    }

    handleResetForm = () => {
        console.log('reset');
        this.setState({
            persons: {}
            // id: '',
            // firstName: '',
            // lastName: '',
            // email: '',
            // birthDate: ''
        })
    }

    handleInputChange(event) {
        console.log(event.target.value);
        this.setState({ [event.target.name]: event.target.value });
    }

    handlePopulateForm = () => {
        console.log('form populate');
        this.state.persons.map((person) => <Form key={person} />)
        
    }

    handleSubmitForm(person) { 
        console.log('submiting');
        let id = this.state.id; 
        let firstName = this.state.firstName;
        let lastName = this.state.lastName;
        let email = this.state.email;
        let birthDate = this.state.birthDate;
    
        let elements = this.state.persons.slice();
        elements.push({id: id, firstName: firstName, lastName: lastName, email: email, birthDate: birthDate});
        this.setState({ persons: elements, id: '', firstName: '', lastName: '', email: '', birthDate: '', isUpdate: true });
        }
    
    render() {
        return(
            <div className="PersonInfo">
            { <Form 
              id = { this.props.personSelected.id }
              firstName = { this.props.personSelected.firstName }
              lastName = { this.props.personSelected.lastName}
              email = { this.props.personSelected.email}
              birthDate = {this.props.personSelected.birthDate}
              formSubmit = { this.handleSubmitForm } 
              inputChange= { this.handleInputChange }
            //   formReset = {props.resetClick}
            //   formPopulate = {props.rowClicked}
          />}                     
      </div>
      );
   }
}

export default PersonInfo;