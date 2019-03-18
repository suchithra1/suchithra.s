import React, { Component } from 'react';
// import {classes} from './App.css';
import UserDetail from './UserDetail.component';
// import MyComponent from './toast';
// import IntegrationReactSelect from './autoSuggest'
import Picky from './Picky';
import ListExample from './Virtual.js';
import Virtualize from './LandVirtualize.js';
import Forum from './Forum';
// import Auto from './AutoSizer'
import MyCheckbox from './virtualCheckbox'

class App extends Component {

  state = {
    suggest: [  {'question' : 'how?',
    'comment' :'yes it is possible'},
   {'question':'hello'},{'question':'good day'},
   {'question':'bad day'},{'question':'now and when'},{'question':'nowhere'}],

  }
  render() {
    return (
      <div className='App' >
      {/* <Select /> */}
      <Forum/>
      {/* <Virtualize suggest = {this.state.suggest}/> */}
      {/* <MyCheckbox/> */}
      {/* <Auto/> */}
      {/* <Virtualize/> */}
        {/* <UserDetail /> */}
        {/* <ListExample/> */}
        {/* <MultipleSelect/> */}

        {/* <Picky /> */}
        {/* <SimpleCard/> */}
        {/* <Integrati/onReactSelect/> */}
        
        {/* <MyComponent /> */}
  
      
      </div>
    );
  }
}

export default App;
