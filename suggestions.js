import React from 'react'
import './App.scss';

const suggestion = (props) => {
  const options = props.suggest.map(r => (
<div className='Suggestion'><label><input type='checkbox'/>
      {r.courseName}
    </label></div>
  ))
  return <ul>{options}</ul>
}

export default suggestion;