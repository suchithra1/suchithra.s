import React, { Component } from 'react';
import './App.scss';
// import EnhancedTable from './UserDetailco.js';
// import MyComponent from './toast';
// import IntegrationReactSelect from './AutoSuggest'
import UserDetail from './UserDetail.component';
// import UserDetailComponent from './UserDetail.component';
// import RoleDetail from './roleDetail.component'




class App extends Component {
  render() {
    return (
      <div className='App' >
        <UserDetail/>
        {/* <IntegrationReactSelect/> */}
        {/* <RoleDetail/> */}
        
        {/* <MyComponent /> */}
  
      
      </div>
    );
  }
}

export default App;