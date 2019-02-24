import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import React from 'react';
 
const options = [
  { label: 'JAVA', value: 1},
  { label: 'OOPS', value: 2},
  { label: 'ANGULAR', value: 3},
  { label: 'BIGDATA', value: 4},
  { label: 'HADDOP', value: 5},
  
];
 
 const select = () => {
     return(
        <ReactMultiSelectCheckboxes options={options} />
     );
 }

 export default select;