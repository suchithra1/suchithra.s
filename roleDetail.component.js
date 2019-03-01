import React from 'react';
import classes from './roleDetail.scss';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import { Checkbox } from '@material-ui/core';

const roleDetail = (props) => {

    let labelClass = [classes.roleLabel];
    if(props.isCourseSelected) {
        labelClass.push(classes.highlight);
    } 

    return (
        <div id='roleDetail' className={classes.roleDetail} >
            <h2 className={classes.heading}>ASSIGN ROLES</h2>
                <div>
                {props.roles.map((role, index) =>  <div><label className={classes.roleLabel}>{role.name}</label>
                                                        <div className={classes.role}>
                                                            <ReactMultiSelectCheckboxes placeholder='Search Courses' 
                                                                                        placeholderButtonLabel='Courses'
                                                                                        options={props.courses}
                                                                                        name={role}
                                                                                        key={index}
                                                                                        onChange={props.courseSelected} />
                                                        </div>
                                                   </div>
                )}
                </div>

                <div className={classes.courseLess}>
                    <label className={classes.roleLabel}>COORDINATOR</label>
                    <div className={classes.checkbox}>
                        <Checkbox name='COORDINATOR' 
                                  onChange={props.roleSelected} 
                                  defaultChecked={false} /> 
                
                    </div>
                    <label className={classes.roleLabel}>RMO </label>
                    <div className={classes.checkbox}>
                        <Checkbox name='RMO' 
                                  onChange={props.roleSelected} 
                                  defaultChecked={false} />
                    </div>
                </div>
            <button className={classes.submit}  onClick={props.submitClicked}> SUBMIT </button>
        </div>

    );
}

export default roleDetail;
