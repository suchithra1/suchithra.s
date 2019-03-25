import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CheckBox from '@material-ui/core/checkBox';
import HttpRequest from '../../../service/HttpRequest';
import SearchUser from './search/searchUser';
import RoleDetail from '../UserDetail/RoleDetail/roleDetail.component';
import WrappedVirtualizedTable from './VirtualizedTable/VirtualizedTable';
import Styles from './styles/styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import classes from '../UserDetail/RoleDetail/roleDetail.scss';
import * as constants from './UserDetail.constants';
import * as roleConstants from '../UserDetail/RoleDetail/roleDetail.constants';

class UserDetail extends Component {

    state = {
        users: [],
        isInvalidSearch: false,
        errorMessage: null,
        container: [],
        isUserSelected: false,
        isCourseSelected: false,
        isRoleSelected:false,
        column: {},
        courses: [],
        roles: [],
        selectAll: false,
        selectAllClicked: false,
        selectedUsers: {},
        selectedRoleCourse: [],
        selectedRole: [],
        selectedCourses: [],
        userList: [],
        searchedUsers: []
    }

    handleToggle = ( columnName, userId, name ) => {
        let users = [...this.state.users];
        users.map ( user => {
            if ( user.id === userId ) {
                let roleCourses = user [ columnName ];
                roleCourses.map ( course => {
                    if ( course.name === name ) {
                        course.isActive = !course.isActive;
                    }
                } )
            }
        } )
        this.setState ( {
            users: users
        } );
    }

    onSearchUsers = ( value, keyCode ) => {

        if ( keyCode !== 13 ) {
            return;
        }
        let searchText = value.trim().toLowerCase();
        const searchTextLength = value.trim().toLowerCase().length;
        const specialCharacters = constants.REGEX_SPCL_CHAR_WITHOUT_COMMA;
        let searched = [];
        let searchedUsers = [...this.state.searchedUsers];
        let users = [...this.state.users];
        let validated = this.validateSearchText( searchText, searchTextLength, specialCharacters );
        users.map ( user => {
            if ( user.firstName.toLowerCase().includes( value.toLowerCase() ) ) {
                searched.push( user );
            }
            else if ( user.lastName.toLowerCase().includes( value.toLowerCase() ) ) {
                searched.push( user );
            }
            let id = user.id.toString();
            if ( id.includes ( value ) ) {
                searched.push( user );
            }
        } );
        if ( !searchText ) {
            searchedUsers = this.state.users
        } else {
            searchedUsers = searched;
        }
        this.setState ( {
            isInvalidSearch: validated[0],
            searchedUsers: searchedUsers,
            errorMessage: validated[1]
        } );
    }

    validateSearchText = (searchText, searchTextLength, specialCharacters) => {
        let isInvalidSearch;
        let errorMessage;
        if( !searchText ) {
            errorMessage = constants.INPUT_ERR_MSG;
            isInvalidSearch = true;
        } else if( searchTextLength >= 40 ) {
            errorMessage = constants.TEXT_LENGTH_ERR;
            isInvalidSearch = true;
        }  else if( specialCharacters.test( searchText ) ) {
            errorMessage = constants.MAX_CHAR_ERR;
            isInvalidSearch = true;
        }  else {
            isInvalidSearch = false;
        }
        return [isInvalidSearch, errorMessage];
    }

    onSelectAll = checked => {
        let users = this.onSelectAllUser();
        if ( checked ) {
            this.setState ( prevState => ( { 
                selectAll: !prevState.selectAll,
                isUserSelected: true,
                selectAllClicked: true,
                users: users
            } ) )
        } 
        else {
            this.setState ( prevState => ( { 
                selectAll: !prevState.selectAll,
                selectAllClicked: false,
                users: users
            } ) )
        }
    };

    onSelectAllUser = () => {
        let users = [...this.state.users];
        users.map ( user => {
            let updatedcheckedList = user.checkedList;
            if ( this.state.selectAll ) {
                updatedcheckedList.selected = false;
            }
        } );
        return users;
    };

    // onFilterCourse = () => {
    //     let coursesSelected = [...this.state.selectedCourses];
    //     let courses = [...this.state.courses];
    //     let filteredCourse = courses;
    //     if ( coursesSelected.length > 0 ) {
    //         let courseIndex = filteredCourse.findIndex ( filteredCourses => filteredCourses === coursesSelected [ coursesSelected.length - 1 ] );
    //         filteredCourse.splice(courseIndex, 1);
    //         filteredCourse.unshift(coursesSelected[coursesSelected.length - 1]);
    //     }
    // }
      
    onSelectCourse = ( selectedCourses, role ) => {
        console.log(selectedCourses);
        let roleName = role.name;
        let selectedRolesCourses = [...this.state.selectedRoleCourse];
        let courses = [...this.state.courses];
        let roles = [...this.state.roles];
        
        let courseList = [];
        selectedCourses.map((course) => { 
            let newCourse = {};
            newCourse.id = course.value;
            newCourse.name = course.label;
            newCourse.description = course.description;
            newCourse.isActive = course.isActive;
            courseList.push( newCourse );
        })
        
        
        let filteredCourse = courses;
        if ( selectedCourses.length > 0 ) {
            let courseIndex = filteredCourse.findIndex ( filteredCourses => filteredCourses === selectedCourses [ selectedCourses.length - 1 ] );
            filteredCourse.splice(courseIndex, 1);
            filteredCourse.unshift(selectedCourses[selectedCourses.length - 1]);
        }
        
        let coursesSelected = {};
        let courseData = [...courseList];
        let roleData = [...roles];
       
        coursesSelected.id = roleData[0].id;
        coursesSelected.name = roleName;
        coursesSelected.hasCourse = roleData[0].hasCourse;
        coursesSelected.course = courseData;
        
        let isRoleExist = selectedRolesCourses.some (selectedRoleCourse => { return selectedRoleCourse.name === roleName});
        
        if ( isRoleExist ) {
            selectedRolesCourses.map((role) => {
                if ( role.name === roleName ) {
                    role.course = [...courseData];
                    if ( role.course.length === 0 ) {
                        selectedRolesCourses.pop ( coursesSelected );
                        roles.map((role) => {
                                if ( coursesSelected.course.length === 0 ) {
                                    role.classes = [classes.roleLabel];
                                }
                        })
                    }
                }
            })
        } else {
            selectedRolesCourses.push ( coursesSelected );
            roles.map ((role) => {
                if (coursesSelected.name === role.name) {
                    role.classes.push ( classes.highlightRoleLabel );
                }
            })
        }
        
        this.setState ({ isCourseSelected: true,
                         courses: filteredCourse,
                         selectedCourses: selectedCourses,
                         selectedRoleCourse: selectedRolesCourses 
                      })
    };
        
    onSelectRole = ( event) => {
        const roleName = event.target.name;
        let roles = [...this.state.roles];
        let newRole = {};
        roles.map((role) => {
            if (role.name === roleName) {
                newRole.id = role.id;
                newRole.name = role.name;
                newRole.hasCourse = role.hasCourse;
            }
        })
        let selectedRoles = [...this.state.selectedRole];
        if ( !event.target.checked ) {
            selectedRoles.pop ( newRole );
            roles.map ((role) => {
                if (selectedRoles.length === 0) {
                    role.classes = [classes.roleLabel];
                }
            }) 
        } else {
            selectedRoles.push(newRole);
            roles.map((role) => {
                if (newRole.name === role.name) {
                    role.classes.push(classes.highlightRoleLabel);
                } 
            }) 
        }

        this.setState({ isRoleSelected: true,
                        selectedRole: selectedRoles,
                        roles: roles });
    };
        
    onSubmit = () => {
        if (( this.state.isRoleSelected || this.state.isCourseSelected) && this.state.isUserSelected) {
            toast.success ( roleConstants.SUCCESS_MESSAGE, {
                position: roleConstants.TOP_CENTER,
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            } );
        } else {
            alert(roleConstants.ERROR_MESSAGE);
        }
        
        let selectedUser = this.state.selectedRoleCourse.concat ( this.state.selectedRole );
        let submitusers = [...this.state.userList];
        let submitData = [];
        submitusers.map ((users) => {
            let userContent = {};
            userContent.id = users.id;
            userContent.firstName = users.firstName;
            userContent.lastName = users.lastName;
            userContent.role = selectedUser;
            submitData.push(userContent);
        })
    };


    getCourses () {
        const data = require ( '../../assets/course.json' );
        let courseList = []; 

        data.map ( ( course ) => { 
            let courseContent = {};
            courseContent.label = course.name;
            courseContent.value = course.id;
            courseContent.description = course.description;
            courseContent.isActive = course.isActive;
            courseList.push( courseContent );
        } )
        this.setState ( {
            courses : courseList 
        } )
    }

    getRoles() {
        const data = require('../../assets/role.json');
        let roleList = [];
        data.map ( ( role ) => {
            let roleContent = {};
            roleContent.name = role.name;
            roleContent.id = role.id;
            roleContent.hasCourse = role.hasCourse;
            roleContent.classes = [];
            roleList.push( roleContent );
        } )
        this.setState ( { 
            roles: roleList 
        } );
    }

    componentDidMount() {

        this.getCourses();
        this.getRoles();
        let url = HttpRequest.get();
        url.then ( response => {
            let data = response.data;
            let totalData = [];
            data.map ( individualUser => {
                let individualData = {};
                let trainerCourses = [];
                let evaluatorCourses = [];
                let authorCourses = [];
                let misc = [];
                let checkedList = {};
                checkedList.userId = individualUser.id;
                checkedList.selected = false;
                individualData.checkedList = checkedList;
                individualData.id = individualUser.id;
                individualData.firstName = individualUser.firstName;
                individualData.lastName = individualUser.lastName;
                
                individualUser.role.map ( individualRole => {
                
                    if ( individualRole.name === constants.DATAKEY_TRAINER ) {
                        individualRole.course.map ( individualCourse => {
                            let course = {};
                            course.name = individualCourse.name;
                            course.userId = individualUser.id;
                            course.isActive = individualCourse.isActive;
                            trainerCourses.push ( course );
                        } )

                        individualData.Trainer = trainerCourses;

                    } else if ( individualRole.name === constants.DATAKEY_EVALUATOR ) {
                        individualRole.course.map ( individualCourse => {
                            let course = {};
                            course.name = individualCourse.name;
                            course.userId = individualUser.id;
                            course.isActive = individualCourse.isActive;
                            evaluatorCourses.push ( course );
                        } )

                        individualData.Evaluator = evaluatorCourses;

                    } else if ( individualRole.name === constants.DATAKEY_AUTHOR ) {
                        individualRole.course.map ( individualCourse => {
                            let course = {};
                            course.name = individualCourse.name;
                            course.userId = individualUser.id;
                            course.isActive = individualCourse.isActive;
                            authorCourses.push( course );
                        } )

                        individualData.Author = authorCourses;

                    } else {
                        let role = {};
                        individualUser.isActive = true;
                        role.name = individualRole.name;
                        role.isActive = individualUser.isActive;
                        role.userId = individualUser.id;
                        misc.push( role );
                        individualData.Misc = misc;
                    }
                } )

                totalData.push( individualData );

            } )
                this.setState ( { 
                    users: totalData
                } );
        }).catch = ( error ) => {
                // handle error
            }
    }

    onDeleteCourse = ( columnName, userId, name ) => {
        let users = [...this.state.users];
        users.map ( user => {
            if ( user.id === userId ) {
                let roleCourses = user [ columnName ];
                roleCourses.map ( ( course, index ) => {
                    if ( course.name === name ) {
                        roleCourses.splice ( index, 1 );
                    }
                } )
            }
        } )
        this.setState ( { 
            users: users
        } );
    }     

    onClick = ( userId ) => {
        let users = [...this.state.users];
        let selectAllClicked = this.state.selectAllClicked;
        if ( selectAllClicked ) {
            users.map ( user => {
                let updatedcheckedList = user.checkedList;
                if ( user.id === userId ) {
                    updatedcheckedList.selected = false;
                } else {
                    updatedcheckedList.selected = true;
                }
            } );
        } else {
            users.map ( user => {
                if ( user.id === userId ) {
                    let usersSelected = [];
                    let object = {};
                    object.id = user.id;
                    object.firstName = user.firstName;
                    object.lastName = user.lastName;
                    usersSelected.push(object);
                    this.setState ( {
                        selectedUsers: user,
                        userList: usersSelected
                    } );
                    let updatedcheckedList = user.checkedList;
                    if ( !updatedcheckedList.selected ) {
                        updatedcheckedList.selected = true;
                    } else {
                        updatedcheckedList.selected = false;
                    }
                }
            } );
        }
        this.setState( { 
            users: users,
            isUserSelected: true,
            selectAllClicked: false
        } );
    }


    render() {
        let { users, searchedUsers } = this.state;
        if( searchedUsers.length > 0 ) {
            users = searchedUsers;
        }
        return (
        <div>
            <SearchUser 
                {...this.props} 
                searching = { this.onSearchUsers } 
                searchValidate = { this.state.isInvalidSearch } 
                errorMessage = {this.state.errorMessage}
            />
            <div >
                <div style = { {
                    borderStyle: 'ridge',
                    width: '70.6%',
                    marginTop: '100px',
                    marginLeft: '180px',
                    textAlign: 'right',
                    height: '4%',
                    padding: '10px'
                    }}>
                        <h3 style = { {
                            marginLeft: '44%',
                            textAlign: 'center',
                            marginBottom: '3px'
                        } }>ROLES </h3>
                </div>
                <Paper style = { { 
                        height: 400, 
                        width: '72%', 
                        marginLeft: '180px',
                        marginBottom: '40px'
                    } }
                >
                    <WrappedVirtualizedTable
                        rowCount = { users.length }
                        rowGetter = { ( { index } ) => users[index] }
                        handleClick = { this.onClick }
                        handleToggle = { this.handleToggle }
                        selectAll = { this.state.selectAll }
                        handleDeleteCourse = { this.onDeleteCourse }
                        toggleSelect = { this.onClick }
                        selectAllClicked = { this.state.selectAllClicked }
                        columns = { [
                            {
                                width: 180,
                                label: <CheckBox  onChange = { ( event ) => this.onSelectAll( event.target.checked ) } />,
                                dataKey: constants.CHECKED_LIST,
                                numeric: false
                            },
                            {
                                width: 150,
                                label: constants.HEADER_ID,
                                dataKey: constants.DATAKEY_ID,
                                numeric: true
                            },
                            {
                                width: 180,
                                label: constants.HEADER_FIRSTNAME,
                                dataKey: constants.DATAKEY_FIRSTNAME,
                                numeric: false,
                            },
                            {
                                width: 180,
                                label: constants.HEADER_LASTNAME,
                                dataKey: constants.DATAKEY_LASTNAME,
                                numeric: false,
                            },
                            {
                                width: 180,
                                label: constants.HEADER_TRAINER,
                                dataKey: constants.DATAKEY_TRAINER,
                                numeric: false,
                            },
                            {
                                width: 180,
                                label: constants.HEADER_EVALUATOR,
                                dataKey: constants.DATAKEY_EVALUATOR,
                                numeric: false,
                            },
                            {
                                width: 180,
                                label: constants.HEADER_AUTHOR,
                                dataKey: constants.DATAKEY_AUTHOR,
                                numeric: false,
                            },
                            {
                                width: 180,
                                label: constants.HEADER_MISC,
                                dataKey: constants.DATAKEY_MISC,
                                numeric: false,
                            },
                        ] }
                    />
                </Paper>
            </div>
            <div className = { classes.roleDetailWrapper }>
           { this.state.isUserSelected ? ( <RoleDetail  courses = { this.state.courses }
                                                        role = { this.state.roles }
                                                        isCourseSelected = { this.state.isCourseSelected }
                                                        isRoleSelected = { this.state.isRoleSelected }
                                                        submitClicked = { this.onSubmit.bind ( this ) }
                                                        courseSelected = { this.onSelectCourse.bind ( this ) }
                                                        roleSelected = { this.onSelectRole.bind ( this ) } /> ) : null }
            <ToastContainer />
            </div>
        </div>
        );
    }
}

export default withStyles(Styles) (UserDetail);
