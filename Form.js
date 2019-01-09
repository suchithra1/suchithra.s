import React from 'react';
import './App.css';

const form = (props) => {
    return(
        <div className="Form">
            <div >
                <label id="labelId">Id</label>
                <input id="inputId" className="FormFields" 
                       type="number" placeholder="Enter id" name="id" value={props.id}
                       onChange={props.inputChange} />
            </div>
            <div>
                <label>FirstName</label>
                <input id="inputFname" className="FormFields"
                    type="text" placeholder="Enter FirstName" name="firstName" value={props.firstName}
                    onChange={props.inputChange} />
            </div>
            <div>
                <label>LastName</label>
                <input id="inputLname" className="FormFields"
                    type="text" placeholder="Enter LastName"  name="lastName" value={props.lastName}
                    onChange={props.inputChange}/>
            </div>
            <div>
                <label>Email</label>
                <input id="inputEmail" className="FormFields"
                    type="text" placeholder="Enter email" name="email" value={props.email}
                    onChange={props.inputChange}/>
            </div>
            <div >
                <label>BirthDate</label>
                <input id="inputBirthDate" className="FormFields"
                    type="text" placeholder="Enter BirthDate" name="birthDate" value={props.birthDate}
                    onChange={props.inputChange} />
            </div>
            <button id="submit" onClick = {props.formSubmit}>SUBMIT</button>
            <button id="reset" onClick= {props.formReset}>RESET</button>
            
        </div>
    );
}

export default form;