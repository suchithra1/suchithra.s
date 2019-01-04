import React, { Component } from 'react';
import './App.css';
import SidePanel from './SidePanel.js';
import PersonPanel from './PersonPanel.js';
import PropTypes from 'prop-types';
import Axios from 'axios';

class App extends Component {
  
  state = {
    persons : [],
    entityClicked : '',
  }
   
  personClicked = () => {
    console.log('clicked');
    this.setState ({entityClicked: 'person'})
  }

  render() {
    let personPanel = null;
    if(this.state.entityClicked === 'person') {
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

App.propTypes = {
  persons : PropTypes.array,
  entityClicked: PropTypes.string
}

export default App;