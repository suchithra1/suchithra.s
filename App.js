import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import SidePanel from './SidePanel.js';
import PersonList from './PersonList.js';
import PropTypes from 'prop-types';

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
    let personList = null;
    if(this.state.entityClicked === 'person') {
      personList = <PersonList/>
    }

    return (
      <BrowserRouter>
        <div className='App'>
          <SidePanel click={this.personClicked}/>
          {personList}
        </div>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  persons : PropTypes.array,
  entityClicked: PropTypes.string
}

export default App;