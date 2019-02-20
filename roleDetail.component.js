import React from 'react';
import './App.css';

const roleDetail = (props) => {
    console.log(props.results);
    console.log(props.coursesSearched);

    let coursesShown;
    if(props.coursesSearched.length > 0) {
        coursesShown = <div>
            { props.coursesSearched.map((course) => <div className='course'>
                                                          <label> <input type='checkbox'
                                                            onChange = {props.courseClicked}/>
                                                            {course.courseName}  
                                                            </label>
                                                    </div>
                )}
        </div>
    } else {
        coursesShown = <div>   {props.course.map((course)=> <div className='course'> <label>
            <input type='checkbox'
             onChange={props.courseClicked} />
             {course.courseName}
             </label>
        </div> ) }

        </div>
    }
    return (
        <div className='RoleDetail'>
            <h2 id='head'> ASSIGN ROLES </h2>
            <div className='Search'>
                <input  placeholder='Search Courses'
                        onChange={props.inputChanged} />
                        <i class="fa fa-search" aria-hidden="true"></i> 
            </div>
            { props.role.map((role, index) => <div> <button className='role'
                                              key={index} 
                                              onClick = {props.roleClicked}>
                                              {role.name}
                                               
                                              <i class="fa fa-caret-down" aria-hidden="true"></i>
                                              </button>
                                       </div>
            )}
            
        
            {/* <div> */}
                {/* { props.displayCourse ? (props.course.map((course)=> <div> <label>
                                                                           <input type='checkbox'
                                                                            onChange={props.inputChanged} />
                                                                            {course.courseName}
                                                                            </label>
                                                                      </div>)) : null }
                { props.coursesSearched.map((course) => <div className='Suggestion'>
                                                            <label> <input type='checkbox'/>
                                                            {course.courseName}  
                                                            </label>
                                                            </div>
                )} */}
                {/* {props.searchedCourse ? (<div className = 'SearchHolder'>
                                         {props.coursesSearched.map((course) => <div> 
                                                                                <label>
                                                                               <input type='checkbox' />
                                                                                {course.courseName}
                                                                                </label> </div> )}
                                                                                 </div>) : null } */}
            {coursesShown}
            {/* </div> */}
       <button id='submit' onClick={props.submitClicked}> SUBMIT </button>
       </div>
    );
}

// https://www.toptal.com/react/tdd-react-unit-testing-enzyme-jest
// https://www.codementor.io/vijayst/unit-testing-react-components-jest-or-enzyme-du1087lh8
// https://medium.com/wehkamp-techblog/unit-testing-your-react-application-with-jest-and-enzyme-81c5545cee45


export default roleDetail;