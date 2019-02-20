import React from 'react';

import './App.css';

const search = (props) => {
let courses = null;
if (props.course) {
courses = (
<ul >
{props.course.map((item, index) => {
return (
<li
key={index}
onClick={() => props.onClick(item)}>
{item[props.show] ? item[props.show] : item[props.error]}
</li>
);
})}
</ul>
);
}

return (
<div className ='RoleDetail'>
<label>{props.label}</label>
<input 
type='text' 
placeholder= 'search courses'
onChange={props.onChange}
onBlur={props.onBlur}
onKeyDown={props.onKeyDown}/>
{courses}
</div>
);
};

export default search;