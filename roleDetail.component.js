import React from 'react';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import { Checkbox } from '@material-ui/core';
import classes from './roleDetail.scss';

const roleDetail = (props) => {
 
    let displayRoles = [];
    { props.role.map((roleToDisplay, index) => {

        // roleToDisplay.class.push(classes.roleLabel);

        if (roleToDisplay.hasCourse === 'true') {
            displayRoles.push( <div>
                               <label
                                // className = {roleToDisplay.class.join(' ')}
                                >
                                    {roleToDisplay.name}
                               </label>
                               <div className = {classes.course}>
                               <ReactMultiSelectCheckboxes placeholder = 'Search Courses' 
                                                           placeholderButtonLabel = 'Courses'
                                                           minWidth = '130px'
                                                           options = {props.courses}
                                                           name = {roleToDisplay.name}
                                                           key = {index}
                                                           onChange = {props.courseSelected} />
                               </div>
                               </div>)
        } else {
            displayRoles.push(  <div className = {classes.courseLess}>
                                <label 
                                // className = {roleToDisplay.class.join(' ')}
                                >
                                    {roleToDisplay.name}
                                </label>
                                <div className = {classes.checkbox}>
                                      <Checkbox name = {roleToDisplay.name} 
                                                onChange = {props.roleSelected} 
                                                key = {index}
                                                defaultChecked={false} /> 

                                </div>
                                </div>)
       }
    })}
    
    return (
        <div id='roleDetail' className={classes.roleDetail} >
            <div className={classes.heading}>
                <h2>ASSIGN ROLES</h2>
            </div>
            <div className={classes.innerWrapper}> 
                <div>
                    {displayRoles}
                </div>
            </div>
            <div className={classes.submit}>
                <button id='submit' onClick={props.submitClicked}>SUBMIT</button>
            </div>
        </div>
    );
}

export default roleDetail;
