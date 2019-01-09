import React, { Component } from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import './App.css';
import SidePanel from './SidePanel.js';
import PersonList from './PersonList.js';
import PropTypes from 'prop-types';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

class App extends Component {
   constructor() {
     super();
     this. state = {
        persons : [],
        entityClicked : '',
  }

  this.personClicked = this.personClicked.bind(this);
}

   
  personClicked = () => {
    console.log('clicked');
    this.setState ({entityClicked: 'person'});
    history.push('/person');
  }

  render() {
    let personList = null;
    if(this.state.entityClicked === 'person') {
      personList = <PersonList/>
    }

    return (
      <BrowserRouter>
        <div className='App' >
          <SidePanel click={this.personClicked}/>
          <Switch>
          {/* <Redirect to='/person' component={personList}/> */}
          {/* <Route to='/person' component={personList} /> */}
          {personList}
          </Switch>
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