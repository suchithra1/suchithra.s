import React, { Component } from 'react';
import './App.css';
import EnhancedTable from './UserDetail.component.js';
// import MyComponent from './toast';
import IntegrationReactSelect from './autoSuggest'



class App extends Component {
  render() {
    return (
      <div className='App' >
        <EnhancedTable/>
        <IntegrationReactSelect/>
        
        {/* <MyComponent /> */}
  
      
      </div>
    );
  }
}

export default App;
