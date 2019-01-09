import React from 'react';
import './App.css';
// import {Route, Link, NavLink} from 'react-router-dom';

const sidePanel = (props) => {
    return (
        <aside>
            <div className="LeftPanel" >
                <div>          
                    <button id="itemButton" onClick= {props.click}>Person</button>
                </div>
                <div>    
                    <button id="itemButton">Address</button>
                </div>
            </div>
        </aside>    
    );
}

export default sidePanel;