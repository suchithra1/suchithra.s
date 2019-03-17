import React from 'react';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import { Checkbox } from '@material-ui/core';
import './roleDetail.css';

const roleDetail = (props) => {
      
    let displayRoles = [];
    { props.role.map((roleToDisplay, index) => {
        roleToDisplay.classes.push('roleLabel')
        if (roleToDisplay.hasCourse) {
            displayRoles.push( <div>
                               <label className = {roleToDisplay.classes.join(' ')}>
                                    {roleToDisplay.name}
                               </label>
                               <div className = 'course'>
                               <ReactMultiSelectCheckboxes placeholder = 'Search Courses' 
                                                           placeholderButtonLabel = 'Courses'
                                                           options = {props.courses}
                                                           name = {roleToDisplay.name}
                                                           key = {index}
                                                           onChange = {props.courseSelected} />
                               </div>
                               </div>)
        } else {
            displayRoles.push(  <div className = 'courseLess'>
                                <label className = 'roleLabel'>
                                    {roleToDisplay.name}
                                </label>
                                <div className = 'checkbox'>
                                      <Checkbox name = {roleToDisplay.name} 
                                                onChange = {props.roleSelected} 
                                                key = {index}
                                                defaultChecked={false} /> 

                                </div>
                                </div>)
       }
    })}
    
    return (
        <div id='roleDetail' className='roleDetail' >
            <h2 className='heading'>ASSIGN ROLES</h2>
            <div className='innerWrapper'> 
                <div className='roles'>
                    {displayRoles}
                </div>
            </div>
            
        <button className='submit'  onClick={props.submitClicked}>SUBMIT</button>
        
        </div>
           
    );
}

export default roleDetail;