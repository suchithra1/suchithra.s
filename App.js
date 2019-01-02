import React, { Component } from 'react';
import './App.css';
import SidePanel from './SidePanel.js';
import PersonPanel from './PersonPanel.js';

class App extends Component {
  
  state = {
    persons : [],
    showPersonPanel: false
  }
   
  personClicked = () => {
    console.log('clicked');
    this.setState ({showPersonPanel: true})
  }

  // componentDidMount() {
  //   //  import('./person.json')
  //   //   .then(response => this.setState({ data: response.default }))
  //   const data = require('./person.json');
  //   this.setState({ persons : data })
  //   console.log(this.state.persons);
  // }

  render() {
    let personPanel = null;
    if(this.state.showPersonPanel) {
      personPanel = <PersonPanel/>
    }

    return (
      <div className='App'>
        <SidePanel click={this.personClicked}/>
        {personPanel}
        
      </div>
    );
  }
}

export default App;