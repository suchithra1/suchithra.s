import React, {Component} from 'react';
import './App.css';
import PersonInfo from './PersonInfo.js';
import Proptypes from 'prop-types';
import Form from './Form.js';
import axios from 'axios';
import Table from './Table.js';
import {Route, Link, NavLink} from 'react-router-dom';
import {withRouter} from 'react-router-dom';



class PersonList extends Component {
   
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
        isUpdate: false,
        }
           
        
        this.handleDeleteRow = this.handleDeleteRow.bind(this);
        this.handleRowSelect = this.handleRowSelect.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
        this.handleResetForm = this.handleResetForm.bind(this);
        this.handlePopulateForm = this.handlePopulateForm.bind(this);
        // this.setValue = this.setValue.bind(this);
        // this.sendValue = this.sendValue.bind(this);
      
    }

    // setValue(event) {
    //     this.setState({
    //         id: event.target.value
    //     })
    // }

    // sendValue(){
    //     broswerHistory.push('/person/' + this.state.id);
    // }
    
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

    handleRowSelect(person) {
        console.log('row selected');
        const id = person.id;
        console.log(id);
        this.setState({isRowSelected: true,
                       selectedPerson: person });
                       
        this.props.history.push('/person/' + id);               
       
    }

    handlePopulateForm = () => {
        console.log('form populate');
        this.state.persons.map((person) => <Form key={person} />)
        
    }

    handleInputChange(event) {
        console.log(event.target.value);
        this.setState({ [event.target.name]: event.target.value });
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
        console.log(this.props);
        // axios.get('http://localhost:8080/ws/authenticate?username=suchithra&password=suchi');
        axios.get('includeAddress=false')
             .then(response => this.setState({persons: response.data})).catch(error => console.log(error));
             console.log(this.state.persons);
    }
      
    render() {
        return(
            <div className="PersonList">
                <div >
                <header>
                    <nav>
                      <ul>
                        <li><NavLink to='/'>HOME</NavLink></li>
                        <li><NavLink to ={{
                                        pathname:'/person'
                                        // hash:''
                        }}>PERSON</NavLink></li>
                      </ul>
                    </nav>
                  </header>
                <table>
                        <tr>
                            <th>ID</th>
                            <th>FIRSTNAME</th>
                            <th>LASTNAME</th>
                            <th>EMAIL</th>
                            <th>BIRTHDATE</th>
                            <th>ACTION</th>
                        </tr>
                        {this.state.persons.map((person, index) => <Table 
                                                                    key = {person.id}
                                                                // index = {person.index}
                                                                    data = {person} 
                                                                    remove = {() => this.handleDeleteRow(person)}
                                                                    select = {() => this.handleRowSelect(person)}/>)
                        }
                    </table>
                </div>
                 <button id="add" >ADD</button>
           
                 <Route path='/:id'  component={PersonInfo} />
                 
                 {/* <PersonInfo  persons={this.state.persons}
                                personSelected={this.state.selectedPerson}
                                change={this.handleInputChange}
                                submitClick={this.handleSubmitForm}
                                resetClick={this.handleResetForm}   /> */}
            </div>
        );
    }
}

PersonList.proptypes = {
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

export default withRouter(PersonList);
