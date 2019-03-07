import React, { Component } from 'react';
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
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { fade } from '@material-ui/core/styles/colorManipulator';
import RoleDetail from './RoleDetail/roleDetail.component';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import classes from './RoleDetail/roleDetail.scss';

const Icons =  ( props ) => {
  let iconButton = null;
  if ( props.toggle ) {
      iconButton = <Icon id = { props.key } 
                         color = 'disabled' 
                         onClick = { props.handleToggle }>add_circle</Icon>
  } else {
      iconButton = <Icon id = { props.key } 
                         color = 'secondary' 
                         onClick = { props.handleToggle }>remove_circle</Icon>
  }
  return (
    <div>
      <div>
        { iconButton }
        <Icon id = { props.key } 
              color = 'error' 
              onClick = { props.deleteCourse }>delete</Icon>
      </div>
    </div>
  );
}

let counter = 0;
function createData ( id, firstName, lastName, roles ) {
  counter += 1;
  return { 
    id: counter, firstName, lastName, roles 
  };
}

function createRole ( Trainer, Evaluator, Author ) {
  counter += 1;
  return {
    id: counter, Trainer, Evaluator, Author
  };
}

const rows = [
  { id: 'ID', numeric: true,  label: 'ID' },
  { id: 'FIRSTNAME', numeric: false, label: 'FIRSTNAME' },
  { id: 'LASTNAME', numeric: false, label: 'LASTNAME' },
  { id: 'TRAINER', numeric: false, label: 'TRAINER' },
  { id: 'EVALUATOR', numeric: false, label: 'EVALUATOR' },
  { id: 'AUTHOR', numeric: false, label: 'AUTHOR' },
  { id: 'MISC', numeric: false, label: 'MISC' },
];

const subRows = [
  { id: 'TRAINER', numeric: false, label: 'TRAINER' },
  { id: 'EVALUATOR', numeric: false, label: 'EVALUATOR' },
  { id: 'AUTHOR', numeric: false, label: 'AUTHOR' },
  { id: 'TRAINEE', numeric: false, label: 'TRAINEE' },
  { id: 'OX', numeric: false, label: 'OX' },
  { id: 'MANAGEMENT', numeric: false, label: 'MANAGEMENT' },
  { id: 'RMO', numeric: false, label: 'RMO' },
];

const styles = theme => ( {
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 12,
    },
    table: {
        minWidth: 1020,
        overflowY: 'scroll',
        height: '20px',
    },
    tableWrapper: {
        overflowX: 'auto',
    },
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 15,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    title: {
        display: 'none',
        [ theme.breakpoints.up ( 'sm' ) ]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade ( theme.palette.common.white, 0.15 ),
        '&:hover': {
            backgroundColor: fade ( theme.palette.common.white, 0.25 ),
        },
        marginLeft: 0,
        width: '100%',
        [ theme.breakpoints.up ( 'sm' ) ]: {
            marginLeft: theme.spacing.unit,
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create ( 'width' ),
        width: '100%',
        [ theme.breakpoints.up ( 'sm' ) ] : {
            width: 120,
            '&:focus': {
            width: 200,
            },
        },
    },
});

const SearchAppBar = ( props ) => {
    const { classes } = props;
    let error = props.searchValidate ? <label>Please Enter Valid Input</label> : null
        return (
            <div className = { classes.root }>
            <AppBar position = "static">
                <Toolbar>
                <div className = { classes.search }>
                    <div className = { classes.searchIcon }>
                      <SearchIcon />
                    </div>
                    <InputBase
                      placeholder = "Search for user"
                      classes = { {
                          root: classes.inputRoot,
                          input: classes.inputInput,
                      } }
                      onKeyPress = { ( event ) => props.searching ( event ) }
                    />
                </div>
                { error }
                </Toolbar>
            </AppBar>
            </div>
        );
 }

class UserDetail extends Component {

    state = {
        selectedRow: [],
        userData: [],
        roles: [],
        toggleIcon : false,
        course: '',
        validateSearch: false,
        courses: [],
        container: [],
        selectedRoleCourse: [],
        selectedRole:[],
        isUserSelected: false,
        isCourseSelected: false,
        isRoleSelected:false,
        evaluator: [],
        trainer: [],
        author: [],
        trainee: [],
        container:null
    };
   
    getCourses () {
      const data = require ( '../../assets/course.json' );
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

    getRoles() {
        const data = require('../../assets/role.json');
        let roleList = [];
        data.map((role) => {
            let object = {};
            object.name = role.name;
            object.id = role.id;
            object.hasCourse = role.hasCourse;
            object.class = [];
            roleList.push(object);
        })
        this.setState({roles: roleList});
    }
              
    handleSelectCourse = (course, role) => {
        // console.log(course);
        // console.log(role);
        let selectedRolesCourses = [...this.state.selectedRoleCourse];
        let roleName = role.name;
        
        let courseData = [...this.state.courses];
        // console.log(courseData);
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
            // console.log(filteredCourses);
            let courseIndex = filteredCourses.findIndex(element => element === course[course.length - 1]);
            // console.log(courseIndex);
            filteredCourses.splice(courseIndex, 1);
            filteredCourses.unshift(course[course.length - 1]);
            // console.log(filteredCourses);
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
        
        let isRoleExist = selectedRolesCourses.some((element)=> { return element.role === roleName});
        
        if (isRoleExist) {
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
                    role.class.push(classes.highlightRoleLabel);
                    // console.log(coursesSelected);
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
    };
    
    handleSelectRole = (event) => {
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
                    role.class.pop(classes.highlightRoleLabel);
                    console.log(role.class);
                } 
            })}
        } else {
            selectedRoles.push(roleSelected);
            { roleList.map((role) => {
                if (roleSelected.name === role.name) {
                    role.class.push(classes.highlightRoleLabel);
                    console.log(role.class);
                } 
            })}
        }

        this.setState({ isRoleSelected: true,
                        selectedRole: selectedRoles,
                        roles: roleList });
    };
    
    handleSubmit = () => {
        if ((this.state.isRoleSelected || this.state.isCourseSelected) === true) {
            toast.success('Roles Assigned Successfully', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        } else alert('Please select a role and (or) course');
       
        let selectedUser = this.state.selectedRoleCourse.concat(this.state.selectedRole);
        console.log(selectedUser);
    };

    handleToggle = ( event ) => {
        console.log(event.currentTarget);
        this.setState ( {
            toggleIcon: !this.state.toggleIcon 
      })
    };

    handleSelectAllClick = event => {
      if ( event.target.checked ) {
        this.setState ( state => ( { 
            selectedRow : state.userData.map ( 
              data => data.id 
            ), isUserSelected: true } 
        ) );
        return;
      }
      this.setState ({ selectedRow: [] ,
                       isUserSelected: true
      });
    };

    handleClick = ( event, id ) => {
        const { selectedRow } = this.state;
        const selectedIndex = selectedRow.indexOf ( id );
        let newSelected = [];
        if ( selectedIndex === -1 ) {
            newSelected = newSelected.concat ( selectedRow, id );
        } else if ( selectedIndex === 0 ) {
            newSelected = newSelected.concat ( selectedRow.slice ( 1 ) );
        } else if ( selectedIndex === selectedRow.length - 1 ) {
            newSelected = newSelected.concat ( selectedRow.slice ( 0, -1 ) );
        } else if ( selectedIndex > 0 ) {
            newSelected = newSelected.concat (
                selectedRow.slice ( 0, selectedIndex ),
                selectedRow.slice ( selectedIndex + 1 ),
            );
        }

        this.setState ({selectedRow: newSelected ,
                        isUserSelected: true });
    };

    isSelected = id => this.state.selectedRow.indexOf ( id ) !== -1;

    handleDeleteCourse = (course) => {
        let index = this.state.courses.indexOf ( course );
        this.state.courses.splice ( index, 1 );
        this.setState ({ courses: this.state.courses });
    }

    searchUser = (event) => {
        let searchText = event.target.value.trim().toLowerCase();
        const searchTextLength = event.target.value.trim().toLowerCase().length;
        const specialCharacters = /[ !@#$%^&*()_+\-[\]{};':"\\|.<>/?= ]/;
        // const alphanumeric = /^[a-zA-Z0-9]*$/
        if ( event.key === 'Enter' ) {
            if ( searchText && searchTextLength <= 40 && !specialCharacters.test ( searchText ) ) {
                let commaSeparator = searchText.split( ',' );
                this.setState ( { 
                  validateSearch: false
                } )
            } else {
                this.setState ( { 
                  validateSearch: true 
                } )
            }
        }
    }

    componentDidMount() {
        this.getRoles();
        this.getCourses();
        // this.getRoles();
        let url = "http://localhost:3000/user"
        fetch(url)
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            let trainer = [...this.state.trainer];
            let evaluator = [...this.state.evaluator];
            let author = [...this.state.author];
            let trainee = [...this.state.trainee];
            data.map(info => {
                // console.log(info);
                let roles = info.role;
                
                roles.map(role => {
                    console.log(role.name)
                    if(role.name === "Trainer") {
                        role.course.map(course => {
                           trainer.push(course);
                        })
                    }
                    if(role.name === "Evaluator") {
                        role.course.map(course => {
                           evaluator.push(course);
                        })
                    }
                    if(role.name === "Author") {
                        role.course.map(course => {
                           author.push(course);
                        })
                    }
                    if(role.name === "Trainee") {
                        role.course.map(course => {
                           trainee.push(course);
                        })
                    }
                    role.course.map(cour => {
                        console.log(cour)
                    })
                    
                    // this.setState({courses: courses});
                })
            })
            // console.log(courses);
            this.setState( {
                userData: data,
                trainer: trainer,
                evaluator: evaluator,
                author: author,
                trainee: trainee
                // courses: courses
            });
        }).catch =(error) => {
            console.log(error);
        }
    }

    render() {
        console.log(this.state.selectedRoleCourse);
        // console.log(this.state.selectedRole);
        // console.log(this.state.roles);
       
        const { classes } = this.props;
        const { userData, roleData, selectedRow } = this.state;
        let trainerCourses = this.state.trainer;

        let tableHeader  = rows.map ( row => {
        let subHeader = null;
        return <TableCell key = { row.id }>
                    { row.label }
                    { subHeader }
               </TableCell>
        } )
   
    return (
        <div>
            <SearchAppBar {...this.props} 
                          searching={this.searchUser} 
                          searchValidate={this.state.validateSearch} />
        
            <Paper className = { classes.root }>
              <div className = { classes.tableWrapper }>
                <Table className = { classes.table }>
                  <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell>EMPLOYEE</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell>ROLES</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell padding = 'checkbox'>
                        <Checkbox
                          indeterminate = { selectedRow.length > 0 && selectedRow.length < userData.length }
                          checked = { selectedRow.length === userData.length }
                          onChange = { this.handleSelectAllClick }
                        />
                      </TableCell>
                      { tableHeader }
                      </TableRow>
                    </TableHead>
                    <TableBody>
                    { userData.map ( data => {
                        const isSelected = this.isSelected ( data.id );
                        return (
                            <TableRow
                            hover
                            aria-checked = { isSelected }
                            tabIndex = { -1 }
                            key = { data.id }
                            selectedRow = { isSelected }
                            >
                            <TableCell padding = 'checkbox'>
                            <Checkbox checked = { isSelected } 
                                      onClick = { event => this.handleClick ( event, data.id ) }/>
                            </TableCell>
                            <TableCell>{ data.id }</TableCell>
                            <TableCell>{ data.firstName }</TableCell>
                            <TableCell>{ data.lastName }</TableCell>
                            <TableCell>
                                    <TableHead>
                                        { this.state.userData.map ( (user, index) => {
                                            // console.log(user.id);
                                            return user.role.map ( role => {
                                                console.log(user.id)
                                                if ( role.name === 'Trainer' ) {
                                                return role.course.map ( course => {
                                                    // if(user.id === user.role.course.id) {
                                                    //     console.log(course.id)
                                                    // }
                                            return (
                                                <div>
                                                    { course.name }
                                                    <Icons 
                                                        key = { course + data.id }
                                                        handleToggle  = { this.handleToggle.bind ( this ) } 
                                                        toggle = { this.state.toggleIcon } 
                                                        deleteCourse = { this.handleDeleteCourse }
                                                    />
                                                </div>
                                            )
                                                    })
                                                }
                                            } )
                                        }
                                        ) }
                                    </TableHead>
                                </TableCell>
                            </TableRow>
                        );
                    } ) }
                    <TableRow >
                        <TableCell colSpan = { 6 } />
                    </TableRow>
                    </TableBody>
                </Table>
              </div>

                <RoleDetail courses = {this.state.courses}
                            role = {this.state.roles}
                            isCourseSelected = {this.state.isCourseSelected}
                            isRoleSelected = {this.state.isRoleSelected}
                            submitClicked = {this.handleSubmit.bind(this)}
                            courseSelected = {this.handleSelectCourse.bind(this)}
                            roleSelected = {this.handleSelectRole.bind(this)}
                            selectedRole = {this.state.selectedRoles}  /> 
                <ToastContainer />
        </Paper> 
    </div>
    );
    }
}

UserDetail.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles ( styles )( UserDetail )