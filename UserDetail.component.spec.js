import React from 'react';
import { shallow, mount } from 'enzyme';
import UserDetail from './UserDetail.component.js';

describe ( '<UserDetail />', () => {

    it( 'should checks whether componentDidMount() is called', () => {
        const spy = jest.spyOn ( UserDetail.prototype, 'componentDidMount' );
        const wrapper = shallow ( <UserDetail /> );
        wrapper.instance().componentDidMount();
        expect ( spy ).toHaveBeenCalled();
    } );

    it ('should render userDetail correctly', () => {
        const tree = renderer.create ( <UserDetail /> ).toJSON();
        expect ( tree ).toMatchSnapshot();
    } );

    it('should search for a user when entered for valid scenario', () => {
        const props = {
            event: {
                target: {
                    value: "Sound"
                },
                key: 'Enter'
            }
        }
        const wrapper = shallow(<UserDetail />);
        wrapper.instance().searchUsers(props.event);
        expect(wrapper.state().validateSearch).toBeFalsy();
    } );

    it('should search for a user when entered for invalid scenario', () => {
        const props = {
            event: {
                target: {
                    value: "Sound%^*&**"
                },
                key: 'Enter'
            }
        }
        const wrapper = shallow(<UserDetail />);
        wrapper.instance().searchUsers(props.event);
        expect(wrapper.state().validateSearch).toBeTruthy();
    } );

    it(' should search for a firstname when entered in valid scenario', () => {
        const props = {
            event: {
                target: {
                    value: "Sound"
                },
                key: 'Enter'
            }
        }
        const wrapper = shallow(<UserDetail />);
        const expected = Array(9).fill({id: 1, firstName: "sound", lastName: 'karthi'});
        wrapper.setState({
            userData: Array(9).fill({id: 1, firstName: "sound", lastName: 'karthi'})
        })
        wrapper.instance().searchUsers(props.event);
        expect(wrapper.state().userData).toEqual(expected);
        expect(wrapper.state().userData.length).toEqual(9);
    } );

    it(' should search for a firstname when entered in invalid scenario', () => {
        const props = {
            event: {
                target: {
                    value: "Sound"
                },
                key: 'Enter'
            }
        }
        const wrapper = shallow(<UserDetail />);
        wrapper.setState({
            userData: Array(9).fill({id: 1, firstName: "karthick", lastName: 'karthi'})
        })
        const expected = [];
        wrapper.instance().searchUsers(props.event);
        expect(wrapper.state().userData).toEqual(expected);
    } );

    it(' should search for a lastname when entered in valid scenario', () => {
        const props = {
            event: {
                target: {
                    value: "karthi"
                },
                key: 'Enter'
            }
        }
        const wrapper = shallow(<UserDetail />);
        const expected = Array(9).fill({id: 1, firstName: "sound", lastName: 'karthi'});
        wrapper.setState({
            userData: Array(9).fill({id: 1, firstName: "sound", lastName: 'karthi'})
        })
        wrapper.instance().searchUsers(props.event);
        expect(wrapper.state().userData).toEqual(expected);
        expect(wrapper.state().userData.length).toEqual(9);
    } );

    it(' should search either a firstname or a lastname when entered', () => {
        const props = {
            event: {
                target: {
                    value: "s"
                },
                key: 'Enter'
            }
        }
        const wrapper = shallow(<UserDetail />);
        wrapper.setState({
            userData: [
                {
                    id: 1, 
                    firstName: 'sound',
                    lastName: 'test'
                },
                {
                    id: 2, 
                    firstName: 'suchi',
                    lastName: 'test'
                },
                {
                    id: 3, 
                    firstName: 'abi',
                    lastName: 'tet'
                }
            ]
        })
        wrapper.instance().searchUsers(props.event);
        expect(wrapper.state().userData.length).toEqual(2);
    } );

    it(' should search for a number when entered', () => {
        const props = {
            event: {
                target: {
                    value: "2"
                },
                key: 'Enter'
            }
        }
        const wrapper = shallow(<UserDetail />);
        wrapper.setState({
            userData: [
                {
                    id: 1, 
                    firstName: 'sound',
                    lastName: 'test'
                },
                {
                    id: 2, 
                    firstName: 'suchi',
                    lastName: 'test'
                },
                {
                    id: 3, 
                    firstName: 'abi',
                    lastName: 'tet'
                }
            ]
        })
        wrapper.instance().searchUsers(props.event);
        expect(wrapper.state().userData.length).toEqual(1);
    } );

    it(' should search for a user with empty field when entered', () => {
        const props = {
            event: {
                target: {
                    value: ''
                },
                key: 'Enter'
            }
        }
        const wrapper = shallow(<UserDetail />);
        wrapper.setState({
            fullData: Array(3).fill(null)
        })
        wrapper.instance().searchUsers(props.event);
        expect(wrapper.state().userData.length).toEqual(3);
    } );

    it ('Should enable the icon when the user is inactive', () => {

        const wrapper = shallow ( <UserDetail /> );
        const props = {
            column: {
                dataKey: 'Trainer',
            },
            cellData: {
                userId: 1,
                name: 'react'
            },
            userData: [
                {
                    id: 1,
                    Trainer: [
                        {
                            name: 'java',
                            isActive: true
                        },
                        {
                            name: 'react',
                            isActive: true
                        }
                    ],
                    Evaluator: [
                        {
                            name: 'java',
                            isActive: true
                        },
                        {
                            name: 'react',
                            isActive: true
                        }
                    ],
                    Author: [
                        {
                            name: 'java',
                            isActive: true
                        },
                        {
                            name: 'react',
                            isActive: true
                        }
                    ]
                }
            ]
        }
        wrapper.setState({
            userData: props.userData
        })
        wrapper.instance().handleToggle(props.column, props.cellData);
        expect(wrapper.state().userData[0].Trainer[1].isActive).toBeFalsy();
    })

    it ('Should enable the icon when the user is inactive', () => {

        const wrapper = shallow ( <UserDetail /> );
        const props = {
            column: {
                dataKey: 'Trainer',
            },
            cellData: {
                userId: 3,
                name: 'react'
            },
            userData: [
                {
                    id: 1,
                    Trainer: [
                        {
                            name: 'java',
                            isActive: true
                        },
                        {
                            name: 'react',
                            isActive: true
                        }
                    ],
                    Evaluator: [
                        {
                            name: 'java',
                            isActive: true
                        },
                        {
                            name: 'react',
                            isActive: true
                        }
                    ],
                    Author: [
                        {
                            name: 'java',
                            isActive: true
                        },
                        {
                            name: 'react',
                            isActive: true
                        }
                    ]
                }
            ]
        }
        wrapper.setState({
            userData: props.userData
        })
        wrapper.instance().handleToggle(props.column, props.cellData);
        expect(wrapper.state().userData[0].Trainer[1].isActive).toBeTruthy();
    })

    it ('Should enable the icon when the user is inactive', () => {

        const wrapper = shallow ( <UserDetail /> );
        const props = {
            column: {
                dataKey: 'Trainer',
            },
            cellData: {
                userId: 1,
                name: 'go'
            },
            userData: [
                {
                    id: 1,
                    Trainer: [
                        {
                            name: 'java',
                            isActive: true
                        },
                        {
                            name: 'react',
                            isActive: true
                        }
                    ],
                    Evaluator: [
                        {
                            name: 'java',
                            isActive: true
                        },
                        {
                            name: 'react',
                            isActive: true
                        }
                    ],
                    Author: [
                        {
                            name: 'java',
                            isActive: true
                        },
                        {
                            name: 'react',
                            isActive: true
                        }
                    ]
                }
            ]
        }
        wrapper.setState({
            userData: props.userData
        })
        wrapper.instance().handleToggle(props.column, props.cellData);
        expect(wrapper.state().userData[0].Trainer[1].isActive).toBeTruthy();
    });

    it ('Should select all users when the checkbox is clicked', () => {
        
        const props = {
            event: {
                target: {
                    checked: true
                }
            }
        }
        
        const wrapper = shallow ( <UserDetail /> );

        const userData = [
            {
                checkBox: {
                    selected: "true"
                }
            }
        ]

        wrapper.setState({
            selectAll: false,
            isUserSelected: false,
            selectAllClicked: false,
            userData: userData
        })

        wrapper.instance().handleSelectAllClick(props.event);

        expect(wrapper.state().selectAll).toBeTruthy();
        expect(wrapper.state().isUserSelected).toBeTruthy();
        expect(wrapper.state().selectAllClicked).toBeTruthy();
        expect(wrapper.state().userData[0].checkBox.selected).toEqual('false');
    });

    it ('Should select all users when the checkbox is unselected', () => {
        
        const props = {
            event: {
                target: {
                    checked: false
                }
            }
        }
        
        const wrapper = shallow ( <UserDetail /> );

        const userData = [
            {
                checkBox: {
                    selected: "true"
                }
            }
        ]

        wrapper.setState({
            selectAll: true,
            isUserSelected: false,
            selectAllClicked: true,
            userData: userData
        })

        wrapper.instance().handleSelectAllClick(props.event);

        expect(wrapper.state().selectAll).toBeFalsy();
        expect(wrapper.state().isUserSelected).toBeFalsy();
        expect(wrapper.state().selectAllClicked).toBeFalsy();
        expect(wrapper.state().userData[0].checkBox.selected).toEqual("true");
    });

    it ('should delete course when delete icon is clicked', () => {
        const wrapper = shallow( <UserDetail /> );
        const props = {
            column: {
                dataKey: 'Trainer'
            },
            cellData: {
                userId: 1,
                name: 'java'
            }
        };
        const userData = [
            {
                id: 1,
                Trainer: [
                    {
                        name: 'java'
                    },
                    {
                        name: 'react'
                    }
                ],
                Evaluator: [
                    {
                        name: 'java'
                    },
                    {
                        name: 'react'
                    }
                ],
                Author: [
                    {
                        name: 'java'
                    },
                    {
                        name: 'react'
                    }
                ]
            }
        ]

        wrapper.setState({
            userData: userData
        })
        wrapper.instance().handleDeleteCourse(props.column, props.cellData);
        expect(wrapper.state().userData[0].Trainer).toHaveLength(1);
    })

    it ('should delete course when delete icon is clicked', () => {
        const wrapper = shallow( <UserDetail /> );
        const props = {
            column: {
                dataKey: 'Trainer'
            },
            cellData: {
                userId: 2,
                name: 'java'
            }
        };
        const userData = [
            {
                id: 1,
                Trainer: [
                    {
                        name: 'java'
                    },
                    {
                        name: 'react'
                    }
                ],
                Evaluator: [
                    {
                        name: 'java'
                    },
                    {
                        name: 'react'
                    }
                ],
                Author: [
                    {
                        name: 'java'
                    },
                    {
                        name: 'react'
                    }
                ]
            }
        ]

        wrapper.setState({
            userData: userData
        })
        wrapper.instance().handleDeleteCourse(props.column, props.cellData);
        expect(wrapper.state().userData[0].Trainer).toHaveLength(2);
    })

    it ('should delete course when delete icon is clicked', () => {
        const wrapper = shallow( <UserDetail /> );
        const props = {
            column: {
                dataKey: 'Trainer'
            },
            cellData: {
                userId: 1,
                name: 'node'
            }
        };
        const userData = [
            {
                id: 1,
                Trainer: [
                    {
                        name: 'java'
                    },
                    {
                        name: 'react'
                    }
                ],
                Evaluator: [
                    {
                        name: 'java'
                    },
                    {
                        name: 'react'
                    }
                ],
                Author: [
                    {
                        name: 'java'
                    },
                    {
                        name: 'react'
                    }
                ]
            }
        ]

        wrapper.setState({
            userData: userData
        })
        wrapper.instance().handleDeleteCourse(props.column, props.cellData);
        expect(wrapper.state().userData[0].Trainer).toHaveLength(2);
    })

    it('should check if users are selected', () => {
        const wrapper = shallow( <UserDetail /> );
        const props = {
            cellData: {
                userId: 1,
            },
            
            userData: [
                {
                    id: 1,
                    checkBox: {
                        selected: 'true'
                    },
                    firstName: 'soundarya',
                    lastName: 'atgondan'
                }
            ]
        }
        
        wrapper.setState({
            userData: props.userData,
            selectAllClicked: true,
        })

        wrapper.instance().handleClick(props.cellData);

        expect(wrapper.state().userData[0].checkBox.selected).toEqual('false');
    })

    it('should check if users are selected with invalid id', () => {
        const wrapper = shallow( <UserDetail /> );
        const props = {
            cellData: {
                userId: 2,
            },
            
            userData: [
                {
                    id: 1,
                    checkBox: {
                        selected: 'false'
                    },
                    firstName: 'soundarya',
                    lastName: 'atgondan'
                }
            ]
        }
        
        wrapper.setState({
            userData: props.userData,
            selectAllClicked: true,
        })

        wrapper.instance().handleClick(props.cellData);

        expect(wrapper.state().userData[0].checkBox.selected).toEqual('true');
    })

    it('should check if all users are selected', () => {
        const wrapper = shallow( <UserDetail /> );
        const props = {
            cellData: {
                userId: 1,
            },
            
            userData: [
                {
                    id: 1,
                    checkBox: {
                        selected: 'false'
                    },
                    firstName: 'soundarya',
                    lastName: 'atgondan'
                }
            ]
        }
        
        wrapper.setState({
            userData: props.userData,
            selectAllClicked: false,
        })

        wrapper.instance().handleClick(props.cellData);

        expect(wrapper.state().userList).toHaveLength(props.userData.length);
        expect(wrapper.state().selectedUsers).toStrictEqual(props.userData[0]);
        expect(wrapper.state().userData[0].checkBox.selected).toEqual('true');
    })

    it('Should select one or more users when the checkbox is clicked', () => {
        const wrapper = shallow( <UserDetail /> );
        const props = {
            cellData: {
                userId: 1,
            },
            
            userData: [
                {
                    id: 1,
                    checkBox: {
                        selected: 'true'
                    },
                    firstName: 'soundarya',
                    lastName: 'atgondan'
                }
            ]
        }
        
        wrapper.setState({
            userData: props.userData,
            selectAllClicked: false,
        })

        wrapper.instance().handleClick(props.cellData);

        expect(wrapper.state().userList).toHaveLength(props.userData.length);
        expect(wrapper.state().selectedUsers).toStrictEqual(props.userData[0]);
        expect(wrapper.state().userData[0].checkBox.selected).toEqual('false');
    })

    it('Should select one or more users when the checkbox is clicked', () => {
        const wrapper = shallow( <UserDetail /> );
        const props = {
            cellData: {
                userId: 2,
            },
            
            userData: [
                {
                    id: 1,
                    checkBox: {
                        selected: 'true'
                    },
                    firstName: 'soundarya',
                    lastName: 'atgondan'
                }
            ]
        }
        
        wrapper.setState({
            userData: props.userData,
            selectAllClicked: false,
        })

        wrapper.instance().handleClick(props.cellData);

        expect(wrapper.state().userList).toHaveLength(0);
        expect(wrapper.state().selectedUsers).toEqual({});
        expect(wrapper.state().userData[0].checkBox.selected).toEqual('true');
    })

    it('Should select one or more users when the checkbox is clicked', () => {
        const wrapper = shallow( <UserDetail /> );
        const props = {
            cellData: {
                userId: 2,
            },
            
            userData: [
                {
                    id: 1,
                    checkBox: {
                        selected: 'true'
                    },
                    firstName: 'soundarya',
                    lastName: 'atgondan'
                }
            ]
        }
        
        wrapper.setState({
            userData: props.userData,
            selectAllClicked: false,
        })

        wrapper.instance().handleClick(props.cellData);

        expect(wrapper.state().userList).toHaveLength(0);
        expect(wrapper.state().selectedUsers).toEqual({});
        expect(wrapper.state().userData[0].checkBox.selected).toEqual('true');
    })

    it('should invoke handleSelectRole() on selecting a role - positive', () => {
        const wrapper = shallow( <UserDetail /> );
        const props = {
            event: {
                target: {
                    name: 'RMO',
                    checked: true
                }
            }
        }

        expect(wrapper.state().isRoleSelected).toBeFalsy();
        expect(wrapper.state().selectedRole).toHaveLength(0);

        wrapper.instance().handleSelectRole(props.event);

        expect(wrapper.state().isRoleSelected).toBeTruthy();
        expect(wrapper.state().selectedRole).toHaveLength(1);
    })

    it('should invoke handleSelectRole() on deselecting a role  negative', () => {
        const wrapper = shallow( <UserDetail /> );
        const props = {
            event: {
                target: {
                    name: 'RMO',
                    checked: false
                }
            }
        }

        expect(wrapper.state().isRoleSelected).toBeFalsy();
        expect(wrapper.state().selectedRole).toHaveLength(0);

        wrapper.instance().handleSelectRole(props.event);
        
        expect(wrapper.state().isRoleSelected).toBeTruthy();
        expect(wrapper.state().selectedRole).toHaveLength(0);
    })

    it('should invoke handleSelectCourse() on selecting  a course', () => {
        const wrapper = shallow( <UserDetail /> );
        const props = {
            course: [
                {
                    value: 1,
                    label: 'BIGDATA',
                    description: 'SomeText',
                    isActive: 'false'
                }
            ],

            role: {
                name: 'Trainer',
                id: 1,
                hasCourse: true
            },

            courses: [
                { name: 'Java',
                  id: 1
                },
                { name: 'JavaScript',
                  id: 2
                }
            ]

        }

        wrapper.setState ({
            roles: props.role
        })

        expect(wrapper.state().isCourseSelected).toBeFalsy();
        expect(wrapper.state().selectedRoleCourse).toHaveLength(0);
        console.warn(wrapper.state().selectedRoleCourse);
    
        

        wrapper.instance().handleSelectCourse(props.course, props.role);

        expect(wrapper.state().roles).toHaveLength(props.role.length);
        console.warn(role);
        expect(wrapper.state().isCourseSelected).toBeTruthy();
        expect(wrapper.state().selectedRoleCourse).toHaveLength(1);
    })

    it.only('Should render if data is available', () => {
        const wrapper = mount(<UserDetail />);
        const userData = [
            {
                individualData: {
                    id: 1,
                    firstName: 'soundarya',
                    lastName: 'Atgondan',
                    checkBox: 'false',
                    role: [
                        {
                            name: 'Trainer',
                            course: {
                                name: 'java',
                                userId: 1,
                                isActive: false
                            }
                        },
                        {
                            name: 'Evaluator',
                            course: {
                                name: 'java',
                                userId: 2,
                                isActive: false
                            }
                        },
                        {
                            name: 'Author',
                            course: {
                                name: 'java',
                                userId: 3,
                                isActive: false
                            }
                        }
                    ]
                },    
                trainerCourses: [
                    {
                        name: 'java'
                    }
                ],
                evaluatorCourses: [
                    {
                        name: 'java'
                    }
                ],
                authorCourses: [
                    {
                        name: 'java'
                    }
                ],
                misc: [
                    {
                        name: 'rmo'
                    }
                ],
                checkBox: {
                    userId: 1,
                    selected: 'false'
                },

            }
        ]
        wrapper.setState({
            userData: userData
        })

        wrapper.instance().componentDidMount();
        expect(wrapper.state().userData.individualData.role[0].name).toEqual('Trainer');

    })
});
