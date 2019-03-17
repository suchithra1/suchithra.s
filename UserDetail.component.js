import {ToastContainer, ToastMessageAnimated} from 'react-toastr';
import './toastr.css';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import Icon from '@material-ui/core/Icon';
import './roleDetail.css';
import Question from './question';

// import { ToastContainer, TpastMessageAnimated } from 'react-toastr';
// import toastr from 'toastr';
import RoleDetail from './roleDetail.component';

function Icons(props) {
    let r = null;
    if(props.toggle) {
      r = <Icon color="secondary" onClick={props.clicked}>add_circle</Icon>
    } else {
      r = <Icon color="secondary" onClick={props.clicked}>remove_circle</Icon>
    }
    return (
      <div>
      <div>
        {r}
        <Icon id= "icon2" color="secondary" onClick ={props.delete}>delete</Icon>
        {/* <Icon color="secondary"> */}
      </div>
      </div>
    );
}

let counter = 0;
function createData(id, firstName, lastName, roles) {
  counter += 1;
  return { id: counter, firstName, lastName, roles };
}

function createRole(Trainer, Evaluator, Author) {
  counter += 1;
  return {
    id: counter, Trainer, Evaluator, Author
  };
}

const rows = [
  { id: 'ID', numeric: true,  label: 'ID' },
  { id: 'FIRSTNAME', numeric: false, label: 'FIRSTNAME' },
  { id: 'LASTNAME', numeric: false, label: 'LASTNAME' },
  { id: 'ROLES', numeric: false, label: 'ROLES' },
];

const subRows = [
  {id: 'TRAINER', numeric: false, label: 'TRAINER'},
  {id: 'EVALUATOR', numeric: false, label: 'EVALUATOR'},
  {id: 'AUTHOR', numeric: false, label: 'AUTHOR'},
];

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 30,
  },
  table: {
    minWidth: 1020,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
});

class UserDetail extends Component {

  state = {
    selected: [],
    data: [
      createData(1, 'sounds', 'abi'),
      createData(1, 'sounds', 'abi'),
      createData(1, 'sounds', 'abi')
    ],
    
    // texts: '',
    // fields: {},
    toggleIcon : false,
    name: '',
  //   roles:[
  //     {"name" : "TRAINER", "id" : 1,"hasCourse":true},
  //     {"name" : "AUTHOR", "id" : 2, "hasCourse":true},
  //     {"name" : "EVALUATOR", "id" : 3,"hasCourse":true},
  //     {"name" : "COORDINATOR", "id" : 4,"hasCourse":false},
  //     {"name" : "RMO", "id" : 5,"hasCourse":false}
  // ],
    roles: [],
        // role:['TRAINER','EVALUATOR','AUTHOR'],

    courses:[]  ,
    roleCourses:[{name:'JAVA'}, {name:'UI'},{name:'OOPS'}, {name:'REACT'}],
    newCourse: [ {'label' :  '', 'value' : '' }],
      showCourse: false,
      isChecked: true,
      isRoleSelected: false,
      isCourseSelected: false,
      isUserSelected : false,
      query: '',
      results: [],
      searchedText: '',
      deleteCourse: false,
      course: '',
      searchedCourses:[],
      container: [],
      selectedUser:  [
        { userId: '',
          userName: '',
          roles: [
            { roleName: '',
              courses: []
            }
          ]
        }
      ],
      selectedRole : [],
      selectedRoleCourse:[],
      isCourseSearched: false
  };

  clicked = () => {
    this.setState({
        toggleIcon: !this.state.toggleIcon
      })
    }

  componentDidMount () {
    this.getRoles();
      const data = require ( './course.json' );
      let courseList = [];  
      data.map((course) => { 
        let object = {};
        object.label = course.name;
        object.value = course.id;
        object.description = course.description;
        object.isActive = course.isActive;
        courseList.push(object);
      })
      console.log(courseList);
      this.setState({courses : courseList })
      console.log ( this.state.courses );
    }

    getRoles = () => {
      const data = require('./role.json');
        let roleList = [];
        data.map((role) => {
            let object = {};
            object.name = role.name;
            object.id = role.id;
            object.hasCourse = role.hasCourse;
            object.classes = [];
            roleList.push(object);
        })
        this.setState({roles: roleList});
    }
   
handleDeleteCourse = (course) => {
   let index = this.state.courses.indexOf(course);
   this.state.courses.splice(index, 1);
   this.setState({courses: this.state.courses, deleteCourse: true });
}

handleSelectAllClick = (event, id) => {
  if (event.target.checked) {
    this.setState(state => ({
      selected: state.data.map(n => n.id) }));
      
    return;
  }
   else { this.setState({ selected: [] , isUserSelected: true});}
    console.log(this.state.selected)
  };

  handleClick = (event, id) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    this.setState({ selected: newSelected, isUserSelected:true });
  };

  isSelected = id => this.state.selected.indexOf(id) !== -1;

  onSearch = (event) => {
    const hasNumber = /\d/;
    const specialCharacters = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    const value = event.target.value.trim();
    const isEmpty = '';
    const error = '';

    }
  
  onSubmit = () => {
    
      if((this.state.isRoleSelected && this.state.isCourseSelected) === true){
        alert('roles assigned') 
      this.state.container.success(`hi! Now is ${new Date()}`, `///title\\\\\\`, {
        closeButton: true,
       })
      }
          else alert('Please select a course');
          let selectedUser = this.state.selectedRoleCourse.concat(this.state.selectedRole);
          console.log(selectedUser);
          
    }

  handleSelectRole(event){
    console.log(event.target.checked, event.target.name);
        const role = event.target.name;
        console.log(role);
        let roleList = [...this.state.roles];
        let roleSelected = {};
        {roleList.map((roles) => {
            if(roles.name === role) {
                roleSelected.id = roles.id;
                roleSelected.name = roles.name;
                roleSelected.hasCourse = roles.hasCourse;
            }
        })}

        let selectedRoles = [...this.state.selectedRole];
        if (!event.target.checked) {
            selectedRoles.pop(roleSelected);
            { roleList.map((role) => {
                if (selectedRoles.length = 0) {
                    role.class.pop('highlightRoleLabel');
                    console.log(role.class);
                } 
            })}
        } else {
            selectedRoles.push(roleSelected);
            { roleList.map((role) => {
                if (roleSelected.name === role.name) {
                    role.class.push('highlightRoleLabel');
                    console.log(role.class);
                } 
            })}
        }

        this.setState({ isRoleSelected: true,
                        selectedRole: selectedRoles,
                        roles: roleList });
    };

  handleOnSelectCourse(course,role) {
    let selectedRolesCourses = [...this.state.selectedRoleCourse];
        let roleName = role.name;
        let courseData = [...this.state.courses];
        console.log(courseData);
        let courseList = [];
        course.map((data) => { 
            let object = {};
            object.id = data.value;
            object.name = data.label;
            object.description = data.description;
            object.isActive = data.isActive;
            courseList.push(object);
        })
        let filteredCourses = courseData;
        if (course.length > 0) {
            console.log(filteredCourses);
            let courseIndex = filteredCourses.findIndex(element => element === course[course.length - 1]);
            console.log(courseIndex);
            filteredCourses.splice(courseIndex, 1);
            filteredCourses.unshift(course[course.length - 1]);
            console.log(filteredCourses);
        }
        let roleList = [...this.state.roles];
        let courseRole = [];
        let object = {};
        { roleList.map((role) => {

            if (role.name === roleName){
            object.id = role.id;
            object.name = role.name;
            object.hasCourse = role.hasCourse;
            object.course = courseList
            courseRole.push(object);
            }
        })}

        console.log(courseRole);
        let coursesSelected = {};
        let courses = [...courseList];
        coursesSelected.role = roleName; 
        coursesSelected.course = courses;
        // let isRoleExist = selectedRolesCourses.some((element)=> { return element.role === roleName});
        if (coursesSelected.hasOwnProprty('role')) {
            selectedRolesCourses.map((role) => {
                if(role.role === roleName){
                    role.course = [...courses];
                    if (role.course.length == 0) {
                       selectedRolesCourses.pop(coursesSelected);
                    }
                }
            })
        } else {
            selectedRolesCourses.push(coursesSelected);
            { roleList.map((role) => {
                if (coursesSelected.role === role.name) {
                    role.class.push('highlightRoleLabel');
                    console.log(coursesSelected);
                }
            }
            )}
        }

        console.log(selectedRolesCourses);
        let coursesRoles = courseRole;
        let select = [];
        { coursesRoles.map((course) => {
            if (course.name === coursesSelected.role) {
                coursesSelected.id = course.id;
                coursesSelected.name = course.name;
                coursesSelected.hasCourse = course.hasCourse;
                select.push(coursesSelected);
           }
        })}

        console.log(select);
        this.setState({ isCourseSelected: true,
                        courses : filteredCourses,
                        selectedRoleCourse: selectedRolesCourses })
  }
          
  render() {
    console.log(this.state.selectedRoles);
    console.log(this.state.selectedRoleCourse);
    const { classes } = this.props;
    const { data, roleData, selected} = this.state;

    let header  = rows.map(row => {
      let subHeader = null;
      if (row.label === 'ROLES') {
        subHeader = <TableRow>
                <TableCell>Trainer</TableCell>
                <TableCell>Evaluator</TableCell>
                <TableCell>Author</TableCell>
            </TableRow>
      }
      return <TableCell key={row.id}>
                {row.label}
                {subHeader}
            </TableCell>
    })
   
    return (
      <Paper className={classes.root}>
      <div>
        <input type = "text"  id='searchUser' placeholder = "search for a user" size="30" maxlength="40" pattern="[A-z]{2}[0-9]{4}" />
        <button id='searchButton' onClick={this.onSearch}>search</button>
      </div>
        <div className={classes.tableWrapper}>
          <Table className={classes.table}>
            <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox id='selectAllCheckbox'
              indeterminate={selected.length > 0 && selected.length < data.length}
              checked={selected.length === data.length}
              onChange={this.handleSelectAllClick}
              />
          </TableCell>
              {header}
              </TableRow>
              </TableHead>
            <TableBody>
              {data.map(n => {
                const isSelected = this.isSelected(n.id);
                  return (
                    <TableRow
                      hover
                      onClick={event => this.handleClick(event, n.id)}
                      // role="checkbox"
                      aria-checked={isSelected}
                      tabIndex={-1}
                      key={n.id}
                      selected={isSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox checked={isSelected} />
                      </TableCell>
                      <TableCell>{n.id}</TableCell>
                      <TableCell>{n.firstName}</TableCell>
                      <TableCell>{n.lastName}</TableCell>
                      <TableCell>
                        <TableRow>
                          {this.state.courses.map((course) => <TableCell>{course.name}
                          <Icons clicked={this.clicked} toggle={this.state.toggleIcon} delete = {this.handleDeleteCourse}/></TableCell> )}
                        </TableRow>
                      </TableCell>
                    </TableRow>
                  );
                })}
              <TableRow >
                  <TableCell colSpan={6} />
                </TableRow>
              </TableBody>
          </Table> */}
     </div>
       
       <RoleDetail courses ={this.state.courses}
                    submitClicked = {this.onSubmit.bind(this)}
                    roleChecked = {this.handleSelectRole.bind(this)}
                    role = {this.state.roles}
                    isCourseSelected = {this.state.isCourseSelected}
                    courseSelected = {this.handleOnSelectCourse.bind(this)} />

       <Question courses = {this.state.courses} />     
        
        <div className="container">
      <ToastContainer  ref={ref => this.state.container = ref}  className="toast-top-right" />
      </div>
      </Paper>
    );
  }
}

UserDetail.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserDetail);
