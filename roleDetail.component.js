import React from 'react';
import './roleDetail.css';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import Checkbox from '@material-ui/core/Checkbox';

const roleDetail = (props) => {
  let labelClass = [];
  labelClass.push('roleLabel');
  if(props.isCourseSelected) {
   labelClass.push('highlight')
  }
  console.log(labelClass);

  let displayRoles = [];
  {props.role.map((role) => {
    if(role.hasCourse) {
      displayRoles.push( <div>
                         <label className='roleLabel'>{role.name}</label>
                         <div  className='role'>
                          <ReactMultiSelectCheckboxes id='courses'
                                                      placeholder='Search Courses'
                                                      placeholderButtonLabel='Courses'
                                                      options={props.courses} name={role.name}
                                                      onChange={props.courseSelected}
                                                      defaultChecked={false} /></div></div>
                       )
    } else {
      displayRoles.push( <div className='noCourse'>
                         <div> <label className='roleLabel'>{role.name}}</label>
                        <Checkbox className='checkbox' name={role.name} 
                                  onChange={props.roleChecked} 
                                  defaultChecked={false} /> 
      
                         </div>
                         </div>
                        )
   }
  })}

    return (
        <div id='roleDetail' className= 'roleDetail' >
           <h2 className='heading'>ASSIGN ROLES</h2>
              
              {displayRoles}
              {/* <div>{props.role.map((role) => <div><label className='roleLabel'>{role.name}</label>
              <div className='role'>
              <ReactMultiSelectCheckboxes placeholder='Search Courses' placeholderButtonLabel='Courses'
              	  options={props.courses} name={role.name}
              onChange={props.courseSelected}
              defaultChecked={false} /></div></div>)}</div>

              <div className='noCourse'>
                <div> <label className='roleLabel'>COORDINATOR</label>
                  <Checkbox className='checkbox' name='COORDINATOR' 
                     onChange={props.roleChecked} 
                     defaultChecked={false} /> 
                
                </div>
                <div> <label className='roleLabel'>RMO</label>
                  <Checkbox className='checkbox' name='RMO' 
                     onChange={props.roleChecked} 
                     defaultChecked={false} /> 
               
                </div>
                </div> */}
          <button className='submit'  onClick={props.submitClicked}> SUBMIT </button>
        </div>
    );
}

export default roleDetail;