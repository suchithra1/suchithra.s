import React from 'react';
import './App.css';

const sidePanel = (props) => {
    return (
        <aside className="SidePanel">
            <div>
                <button id="itemButton" onClick={props.click}>Person</button>
            </div>
            <div>
                <button id="itemButton">Address</button>
            </div>
        </aside>
            
    );
}

export default sidePanel;