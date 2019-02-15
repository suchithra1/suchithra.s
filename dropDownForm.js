import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 120,
      maxWidth: 300,
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    chip: {
      margin: theme.spacing.unit / 4,
    },
    noLabel: {
      marginTop: theme.spacing.unit * 3,
    },
  
    Author: {
        marginTop: theme.spacing.unit * 5
    }
  });
  
const dropDown = (props) => {
    const { classes } = props;
    return (
        <div className='Author'>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="select-multiple-checkbox">props.userRole</InputLabel>
          <Select
            multiple
            value={props.name}
            onChange={props.handleChange}
            input={<Input id="select-multiple-checkbox" />}
            // MenuProps={MenuProps}
          >
            {props.names.map(name => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={props.name.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        </div>
    );

}

export default dropDown;
