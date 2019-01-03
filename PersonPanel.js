import React, {Component} from 'react';
import './App.css';
import PersonList from './PersonList.js';
import PersonInfo from './PersonInfo.js';
import Proptypes from 'prop-types';
// import  data from './person.js';

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
        rows: []
        }
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleDeleteRow = this.handleDeleteRow.bind(this);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
        this.handleResetForm = this.handleResetForm.bind(this);
    }


    handleResetForm = () => {
        console.log('reset');
        this.setState({
            id: '',
            firstName: '',
            lastName: '',
            email: '',
            birthDate: ''
        })
    }



    handleDeleteRow = (index) => {
        console.log('deleting');
        let rows = [...this.state.persons ];
        rows.splice(index, 1);
        this.setState({ 
                persons: rows,
                deletePerson: true 
            });
        }

    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value });
        
    }

    handleSubmitForm() {
        console.log('submiting');
        let id = this.state.id; 
        let firstName = this.state.firstName;
        let lastName = this.state.lastName;
        let email = this.state.email;
        let birthDate = this.state.birthDate;
    
        let elements = this.state.persons.slice();
        elements.push({id: id, firstName: firstName, lastName: lastName, email: email, birthDate: birthDate});
        this.setState({ persons: elements, id: '', firstName: '', lastName: '', email: '', birthDate: '' });
        }

    componentDidMount() {
        const data = require('./person.json');
        this.setState({ persons : data })
        console.log(this.state.persons);
    }

    render() {
        // let rows = null;
        // if(this.state.deletePerson) {
        // rows = this.state.persons.map( (rowData) => <PersonList click={this.handleDeleteRow} {...rowData } />);
        // }

        return(
            <div className="PersonPanel">
                <div> 
                    <PersonList persons={this.state.persons}
                                click={this.handleDeleteRow}
                                /> 
                                {/* {rows} */}
                    <button id="add" >ADD</button>
                </div>
                <div>
                    <PersonInfo persons={this.state.persons}
                                change={this.handleInputChange}
                                submitClick={this.handleSubmitForm}
                                resetClick={this.handleResetForm}/>
                    {/* <button id="submit" >SUBMIT</button>
                    <button id="RESET" >RESET</button> */}
                </div>
            </div>
        );
    }
}

PersonPanel.proptypes = {
    id: Proptypes.number,
    firstName: Proptypes.string,
    lastName: Proptypes.string,
    email: Proptypes.string,
    birthDate : Proptypes.string
}

export default PersonPanel;