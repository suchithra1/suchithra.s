import React, { Component } from 'react';
import SidePanel from './SidePanel.js'
import './App.css';
import PersonPanel from './PersonPanel.js';
import RightPanel from './RightPanel';
 

class App extends Component {

  // constructor(props){
  //   super(props);
  //   } 
     
       
 

  personInfo = () => {
    console.log('clicked');
    // document.getElementById('rsp').innerHTML = <PersonPanel/>;      
  }
 
  render() {
    return (
      <div className="App">
        <SidePanel click={this.personInfo}/>
        {/* <RightPanel /> */}
        <PersonPanel/>
      </div>
    );
  }
}

export default App;
