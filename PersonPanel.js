import React, {Component} from 'react';
import './App.css';
import PersonList from './personlistinco.js';
import PersonInfo from './PersonInfo.js';
import Proptypes from 'prop-types';
import Form from './Form.js';
import axios from 'axios';
import { reject } from 'q';
import {Route} from 'react-router-dom';

class PersonPanel extends Component {
    
    constructor (){
        super();
        
        this.state = {
        persons: [],
        id:'',
        firstName: '',
        lastName: '',
        email: '',
        birthDate: '',
        items:[],
        deletePerson: false,
        rows: [],
        isRowSelected : false,
        selectedPerson: {},
        isUpdate: false 
        }
           
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleDeleteRow = this.handleDeleteRow.bind(this);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
        this.handleResetForm = this.handleResetForm.bind(this);
        this.handleRowSelect = this.handleRowSelect.bind(this);
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

    handleDeleteRow = (person) => {
        // axios.delete('http://localhost:8080/ws/person.html?id='+ person.id)
        // .then(response=> console.log(response))
        // .then(response => this.setState({perons: response.data, deletePerson: true}))
        
        console.log('deleting');
        let index = this.state.persons.indexOf(person);
        console.log(person.id);
        this.state.persons.splice(index, 1);
        this.setState({persons: this.state.persons, deletePerson: true });
        console.log(index);
        }

    handleInputChange(event) {
        console.log(event.target.value);
        this.setState({ [event.target.name]: event.target.value });
    }

    handleRowSelect(person) {
        console.log('row selected');
        this.setState({isRowSelected: true,
                       selectedPerson: person });
        // console.log(event.target.getAttribute('key'));
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

    // componentDidMount() {
    //     const data = require('./person.json');
    //     this.setState({ persons : data })
    //     console.log(this.state.persons);
    // }

    componentDidMount(){
        // axios.get('http://localhost:8080/ws/authenticate?username=suchithra&password=suchi');
        axios.get('includeAddress=false')
             .then(response => this.setState({persons: response.data})).catch(error => console.log(error));
             console.log(this.state.persons);
    }
      
    render() {
        return(
            <div className="PersonPanel">
                 <header>
                    <nav>
                      <ul>
                        <li><a href='/'>HOME</a></li>
                        <li><a href='/person'>PERSON</a></li>
                      </ul>
                    </nav>
                  </header>
                  {/* <Route path='/' exact component={PersonList}></Route> */}
                <div> 
                    <PersonList persons={this.state.persons}
                                deleteClicked={this.handleDeleteRow}
                                rowClicked={this.handleRowSelect} /> 
                                
                    <button id="add" >ADD</button>
                </div>
                <div>
                    <PersonInfo persons={this.state.persons}
                                personSelected={this.state.selectedPerson}
                                change={this.handleInputChange}
                                submitClick={this.handleSubmitForm}
                                resetClick={this.handleResetForm}
                                // rowClick = {this.handlePopulateForm}
                                />
                    {/* <button id="submit" >SUBMIT</button>
                    <button id="RESET" >RESET</button> */}
                </div>
            </div>
        );
    }
}

PersonPanel.proptypes = {
    persons: Proptypes.array,
    id: Proptypes.number,
    firstName: Proptypes.string,
    lastName: Proptypes.string,
    email: Proptypes.string,
    birthDate : Proptypes.string,
    items: Proptypes.array,
    rows: Proptypes.array,
    isRowSelected: Proptypes.bool,
    deletePerson: Proptypes.bool,
    isUpdate: Proptypes.bool
}

export default PersonPanel;