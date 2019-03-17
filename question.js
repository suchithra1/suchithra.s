import React from 'react';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import { Checkbox } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import './question.css';



const question = (props) => {
    console.log(JSON.stringify(props))
    return (
        <div className='question'>
        <div className ='primaryTopic'>
        <ReactMultiSelectCheckboxes placeholderButtonLabel = 'primary' 
                                    minWidth = '120px'
                                    options = {props.courses}
                                    // name = {roleToDisplay.name}
                                    // key = {index}
                                    // onChange = {props.courseSelected} 
                                    />

        
        </div>
        <div className ='secondaryTopic'>
        <ReactMultiSelectCheckboxes placeholderButtonLabel = 'secondary' 
                                    minWidth = '120px'
                                    options = {props.courses}
                                    // name = {roleToDisplay.name}
                                    // key = {index}
                                    // onChange = {props.courseSelected} 
                                    />

        
        </div>
        <div> 
            <input type='text' className = 'questionTitle'
                               placeholder='Enter Title' 
                               name='title'
                               value={props.questionTitle}
                               onChange={props.inputChange}
                               />  
        </div>

        <div> 
            <input type='text' className ='questionDescription'
                               placeholder='Enter description'
                               name='description'
                            //    onChange={props.inputChange}
                               />  
        </div>
        {/* <div className='questionButton'> */}
            <div className='cancelButton'>
                <Button variant="contained" color="primary" onClick={props.cancel} >  Cancel  </Button>
            </div>
            <div className='postButton'>
                <Button variant="contained" color="primary" onClick={props.post}  disabled={!props.questionTitle} >  Post Question  </Button>
            </div>
       {/* </div> */}
       </div>

    );
}

export default question;