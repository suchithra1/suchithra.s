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
      selectedCourses:[],
      selectedRoles:[],
      isCourseSearched: false
  };

  clicked = () => {
    this.setState({
        toggleIcon: !this.state.toggleIcon
      })
    }

  componentDidMount () {
    const data = require('./course.json');
    let courseList = [];  
    data.map((course) => { 
        let object = {};
        let label;
        let value;
        object.label = course.name;
        object.value = course.id;
        courseList.push(object);
      })
      
      console.log(JSON.stringify(courseList));
      this.setState({courses : courseList })
      console.log ( this.state.courses );
      this.getRoles();
      
    }

    getRoles = () => {
      const role = require('./role.json');
      console.log(role);
      this.setState({roles: role});
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
    this.state.container.success(`hi! Now is ${new Date()}`, `///title\\\\\\`, {
      closeButton: true,
   
          //   if((this.state.isRoleSelected && this.state.isCourseSelected) === true){
          //   alert('roles assigned') 
          // }
          // else if(this.state.isRoleSelected === false){
          //   alert('Please select a role');
          // }
          // else alert('Please select a course');
    })
  }

  handleSelectRole(event){
    console.log(event.target.checked, event.target.name);
    const role = event.target.name
    this.setState({selectedRoles:role});

    };

  handleOnSelectCourse(value,name) {
    console.log(name.name)
    let role = name.name;
    let course = JSON.stringify(value)
    console.log(course);
    
    let coursesSelected = [];
    coursesSelected.push(role,course);
    console.log(coursesSelected);
    // let filteredCourses = [...this.state.courses];
    // console.log(filteredCourses);
    // filteredCourses.splice(0, 0, coursesSelected);
    // console.log(JSON.stringify(filteredCourses));
    this.setState({isCourseSelected : true})


    
    // this.setState({ results: JSON.parse(coursesSelected) });
    console.log(this.state.selectedCourse);
  }
          
  render() {
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
