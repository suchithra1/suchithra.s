import React from 'react';
import './App.css';


const roleDetail = (props) => {
     return(
      <div className="RoleDetail">
  
            <h1> ASSIGN ROLES </h1>
            <div className = "Search">
            <input type='text' />
            <button id="search">SEARCH</button></div>
            {props.role.map((role) => <div> <button id="dropButton"
              onClick = {props.roleClicked} required>{role.name} </button> </div>)}
            {/* <div><button  id="dropButton" >AUTHOR </button> </div>
            <div><button id="dropButton" >EVALUATOR</button> </div>
            <div><button id="dropButton">OX</button> </div> */}
            <div className="Checkboxes">      
        {props.displayCourse ? (props.course.map((course)=> 
        <div>
       <label>
        <input type="checkbox"
          
          onChange={props.courseClicked}
        />
        
        {course.name}
        </label> </div>)) : null }
        </div>
        <button id="dropDown" onClick={props.submitClicked}> SUBMIT </button>
        </div>
      
    );
}

export default roleDetail;