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
        rows: [],
        isRowSelected : false
        }
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleDeleteRow = this.handleDeleteRow.bind(this);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
        this.handleResetForm = this.handleResetForm.bind(this);
        this.handleRowSelect = this.handleRowSelect.bind(this);
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

    handleDeleteRow = (person) => {
        console.log('deleting');
        let index = this.state.persons.indexOf(person);
        this.state.persons.splice(index, 1);
        this.setState({ 
                persons: this.state.persons,
                deletePerson: true 
            });
        }

    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value });
        
    }

    handleRowSelect(event, index) {
        console.log('row selected');
        let items = this.state.persons.indexOf(index);
        this.setState({isRowSelected: true});
        console.log(items);
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
                                deleteClicked={this.handleDeleteRow}
                                rowClicked={this.handleRowSelect}
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
    persons: Proptypes.array,
    id: Proptypes.number,
    firstName: Proptypes.string,
    lastName: Proptypes.string,
    email: Proptypes.string,
    birthDate : Proptypes.string,
    items: Proptypes.array,
    rows: Proptypes.array,
    isRowSelected: Proptypes.bool,
    deletePerson: Proptypes.bool
}

export default PersonPanel;