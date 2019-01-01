import React from 'react';
import './App.css';

const form = () => {
    return(
        <form>
            <div className='Form'>
                <label>ID: </label>
                <input id='inputId' type='text' />
            </div>
            <div className='Form'>
                <label>FIRSTNAME: </label>
                <input id='inputFName' type='text'  />
            </div>
            <div className='Form'>
                <label>LASTNAME: </label>
                <input id='inputLName' type='text' />
            </div>
            <div className='Form'>
                <label>EMAIL: </label>
                <input id='inputEmail' type='text'  />
            </div>
            <div className='Form'>
                <label>BIRTHDATE: </label>
                    <input id='inputBDate' type='text' />
            </div>
        </form>
    );
}

export default form;