import React from 'react';
import './App.css';
import Input from './Input.js';

const form = (props) => {
    return(
        <div className="Form">
            <div >
                {/* {props.form} */}
                <label id="labelId">Id</label>
                <Input  id="inputId" type="number" placeholder="Enter id" name="id" value={props.id}
                       onChange={props.inputChange} />
            </div>
            <div>
                <label>FirstName</label>
                <Input id="inputFname"  ref={(ref) => this.mainInput= ref}
                    type="text" placeholder="Enter FirstName" name="firstName" value={props.firstName}
                    onChange={props.inputChange} />
            </div>
            <div>
                <label>LastName</label>
                <Input  id="inputLname"
                    type="text" placeholder="Enter LastName"  name="lastName" value={props.lastName}
                    onChange={props.inputChange}/>
            </div>
            <div>
                <label>Email</label>
                <Input  id="inputEmail" 
                    type="text" placeholder="Enter email" name="email" value={props.email}
                    onChange={props.inputChange}/>
            </div>
            <div >
                <label>BirthDate</label>
                <Input  id="inputBirthDate" 
                    type="text" placeholder="Enter BirthDate" name="birthDate" value={props.birthDate}
                    onChange={props.inputChange} />
            </div>
            <button id="submit" onClick = {() => props.formSubmit()}>SUBMIT</button>
            <button id="reset" onClick= {props.formReset}>RESET</button>
        </div>
    );
}

export default form;