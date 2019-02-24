import React from 'react';
import './roleDetail.css';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import Checkbox from '@material-ui/core/Checkbox';
// import Picky from 'react-picky'

const roleDetail = (props) => {
    return (
        <div id='roleDetail' className= 'roleDetail' >
           <h2 className='heading'>ASSIGN ROLES</h2>
              

              <div>{props.roles.map((role) => <div><label className='roleLabel'>{role}</label>
              <div className='role'>
              <ReactMultiSelectCheckboxes placeholder='Search Courses' placeholderButtonLabel='Courses'
              	  options={props.courses} name={role}
              onChange={props.courseSelected} /></div></div>)}</div>

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
                </div>
          <button className='submit'  onClick={props.submitClicked}> SUBMIT </button>
        </div>
    );
}

export default roleDetail;