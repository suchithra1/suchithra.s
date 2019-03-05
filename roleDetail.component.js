import React from 'react';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import { Checkbox } from '@material-ui/core';
import classes from './roleDetail.scss';

const roleDetail = (props) => {

    let label = [];
    let labelClass = [classes.roleLabel];
    label.name = [];
    // label.name.push(roleToDisplay.name);
    label.classes = [];
    // if (props.isCourseSelected) {
    //     label.key.push(props.selectedRole[0])
    //     let roleName = label.key[0];
    //     console.log(roleName);
    //     labelClass.push(classes.roleName);
    // }
    // console.log(label);
    
    let displayRoles = [];
    { props.role.map((roleToDisplay, index) => {
        if (roleToDisplay.hasCourse === 'true') {
            displayRoles.push( <div>
                               <label className = {labelClass.join(' ')}>
                                    {roleToDisplay.name}
                               </label>
                               <div className = {classes.course}>
                               <ReactMultiSelectCheckboxes placeholder = 'Search Courses' 
                                                           placeholderButtonLabel = 'Courses'
                                                           options = {props.courses}
                                                           name = {roleToDisplay.name}
                                                           key = {index}
                                                           onChange = {props.courseSelected} />
                               </div>
                               </div>)
        } else {
            displayRoles.push(  <div className = {classes.courseLess}>
                                <label className = {classes.roleLabel}>
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
            <h2 className={classes.heading}>ASSIGN ROLES</h2>
            <div className={classes.innerWrapper}> 
                <div>
                    {displayRoles}
                </div>
            </div>
        <button className={classes.submit}  onClick={props.submitClicked}>SUBMIT</button>
        </div>
    );
}

export default roleDetail;
