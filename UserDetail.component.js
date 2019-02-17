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
import RoleDetail from './roleDetail.component.js';

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
  // {id: 'ROLES', numeric: false, label: 'ROLES'},
  {id: 'TRAINER', numeric: false, label: 'TRAINER'},
  {id: 'EVALUATOR', numeric: false, label: 'EVALUATOR'},
  {id: 'AUTHOR', numeric: false, label: 'AUTHOR'},
];

class EnhancedTableHead extends Component {

  render() {
    const { onSelectAllClick, numSelected, rowCount } = this.props;

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
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={numSelected === rowCount}
              onChange={onSelectAllClick}
              />
          </TableCell>
              {header}
              
              </TableRow>
              </TableHead>
              );
            }
          }
          
EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  rowCount: PropTypes.number.isRequired
};

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

class EnhancedTable extends React.Component {
  state = {
    selected: [],
    data: [
      createData(1, 'sounds', 'abi'),
      createData(1, 'sounds', 'abi'),
      createData(1, 'sounds', 'abi')
    ],
    roleData: [
      createRole('java', 'java', 'java'),
      createRole('', '', 'db'),
      createRole('java', 'java', 'java')
    ], 
    texts: '',
    name: '',
    roles: [
      {name: 'TRAINER'},{name: 'AUTHOR'}, {name:'EVALUATOR'}, {name:'OX'}],

    courses:[{name:'JAVA'}, {name:'DATABASE'},{name:'OOPS'}]  ,
      showCourse: false,
      isChecked: true,
      isRoleSelected: false,
      isCourseSelected: false,
      isUserSelected : false
 };

handleChange(e) {
  this.setState({texts: e.target.value})
}

  handleSelectAllClick = event => {
    if (event.target.checked) {
      this.setState(state => ({ selected: state.data.map(n => n.id),
                                isUserSelected : true }));
      return;
    }
    this.setState({ selected: [] });
  };

  handleRoleClick =  () => {
      console.log("role is clicked")
      this.setState({showCourse: true,
                    isRoleSelected: true});
  }

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

    this.setState({ selected: newSelected,
                    isUserSelected: true });
  };

  isSelected = id => this.state.selected.indexOf(id) !== -1;

  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true });
  }
    
  toggleChange = () => {
    
    this.setState({
      isChecked: !this.state.isChecked,
      isCourseSelected: true
    });
  }

  onSubmit = () => {
    if((this.state.isRoleSelected && this.state.isCourseSelected) === true){
      console.log('submit is clicked');
    }
    else if(this.state.isRoleSelected === false){
      alert('Please select a role');
    }
    else alert('Please select a course');
  }


  render() {
    const { classes } = this.props;
    const { data, roleData, selected} = this.state;
      
    return (
      <Paper className={classes.root}>
      <div>
        <input type = "text"  placeholder = "search for a user"  onBlur={this.handleChange}/>
        <button disabled="false">search</button>
      </div>
        
        <div className={classes.tableWrapper}>
          <Table className={classes.table}>
            <EnhancedTableHead
              numSelected={selected.length}
              onSelectAllClick={this.handleSelectAllClick}
              rowCount={data.length}
            />
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
                      <TableCell>{n.roles}</TableCell>
                    </TableRow>
                  );
                })}
              <TableRow >
                  <TableCell colSpan={6} />
                </TableRow>
              </TableBody>
          </Table>
          
        </div>
         <div className="RoleDetail">
  
            <h1> ASSIGN ROLES </h1>
            <div className = "Search">
            <input type='text'/>
            <button id="search">SEARCH</button></div>
            {this.state.roles.map((role) => <div> <button id="dropButton"
              onClick = {this.handleRoleClick.bind(this)}>{role.name}</button> </div>)}
             {/* <div><button  id="dropButton" >AUTHOR </button> </div>
            <div><button id="dropButton" >EVALUATOR</button> </div>
              <div><button id="dropButton">OX</button> </div> */}
             <div className="Checkboxes">      
        {this.state.showCourse ? (this.state.courses.map((course)=> 
        <div>
       <label>
        <input type="checkbox"
          
          onChange={this.toggleChange.bind(this)}
        />
        
        {course.name}
        </label> </div>)) : null }
        </div>
        <button id="dropDown" onClick={this.onSubmit.bind(this)}> SUBMIT </button>
        </div>   

         
        {/* {this.state.isUserSelected? (<RoleDetail role = {this.state.roles} 
                    course ={this.state.courses}
                    roleClicked = {this.handleRoleClick.bind(this)}
                    submitClicked = {this.onSubmit.bind(this)}
                    courseClicked = {this.toggleChange.bind(this)}
        displayCourse = {this.state.showCourse}/> ) : null } */}
        
      </Paper>
    );
  }
}

EnhancedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EnhancedTable);