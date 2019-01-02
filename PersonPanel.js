import React, {Component} from 'react';
import './App.css';
import Table from './Table.js';
import PersonList from './PersonList.js';
import PersonInfo from './PersonInfo.js';
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
        deletePerson: false
        }
    
        this.handleDeleteRow = this.handleDeleteRow.bind(this);
    }

    handleFormSubmit = (event) => {
        //   e.preventDefault();
      
          let items = [...this.state.persons];
      
          items.push({
            id: this.state.id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            birthDate: this.state.birthDate
          })
      
          this.setState({
            id: '',
            firstName: '',
            lastName: '',
            email: '',
            birthDate: '',
            items:[],
                      
          })
        }
      
        handleInputChange = (event) => {
          let input = event.target;
          let name = event.target.name;
          let value = input.value;
      
          this.setState({
            [name]: value
          })
        }

        handleDeleteRow= (index) => {
            console.log('deleting');
            let rows = [...this.state.rows];
            rows.splice(index, 1);
            this.setState({ deletePerson: true}) 
        }
     

    componentDidMount() {
        const data = require('./person.json');
        this.setState({ persons : data })
        console.log(this.state.persons);
    }

    render() {
        return(
            <div className="PersonPanel">
                <div> 
                    <PersonList persons={this.state.persons}
                                click={this.state.handleDeleteRow}/> 
                    <button id="add" >ADD</button>
                </div>
                <div>
                    <PersonInfo persons={this.state.persons}/>
                    {/* <button id="submit" >SUBMIT</button>
                    <button id="RESET" >RESET</button> */}
                </div>
            </div>
        );
    }
}

export default PersonPanel;