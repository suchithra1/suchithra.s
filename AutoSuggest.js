import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Select from 'react-select';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NoSsr from '@material-ui/core/NoSsr';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
// import CancelIcon from '@material-ui/icons/CancelIcon';
import Checkbox from '@material-ui/core/Checkbox';
import { emphasize } from '@material-ui/core/styles/colorManipulator';

const suggestions = [
  { label: 'angular' },
  { label: 'flyway' },
  { label: 'gradel' },
  { label: 'maven' },
  { label: 'nodejs' },
  { label: 'springb boot' },
].map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label,
}));

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 250,
  },
  input: {
    display: 'flex',
    padding: 0,
  },
    
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
  },
  divider: {
    height: theme.spacing.unit * 2,
  },
});

// function NoOptionsMessage(props) {
//   return (
//     <Typography
//       color="textSecondary"
//       className={props.selectProps.classes.noOptionsMessage}
//       {...props.innerProps}
//     >
//       {props.children}
//     </Typography>
//   );
// }

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

function Control(props) {
  return (
    <TextField
      fullWidth
      InputProps={{
        inputComponent,
        inputProps: {
          className: props.selectProps.classes.input,
          inputRef: props.innerRef,
          children: props.children,
          ...props.innerProps,
        },
      }}
      {...props.selectProps.textFieldProps}
    />
  );
}

function Option(props) {
  return (
    <MenuItem
      buttonRef={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400,
      }}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  );
}

// function Placeholder(props) {
//   return (
//     <Typography
//       color="textSecondary"
//       className={props.selectProps.classes.placeholder}
//       {...props.innerProps}
//     >
//       {props.children}
//     </Typography>
//   );
// }

function MultiValue(props) {
  return (
    <Chip
      tabIndex={-1}
      label={props.children}
      className={classNames(props.selectProps.classes.chip, {
        [props.selectProps.classes.chipFocused]: props.isFocused,
      })}
      onDelete={props.removeProps.onClick}
      deleteIcon={<Checkbox {...props.SelectProps} 
    /> } ></Chip>
  );
}

// function Menu(props) {
//   return (
//     <Paper square className={props.selectProps.classes.paper} {...props.innerProps}>
//       {props.children}
//     </Paper>
//   );
// }

const components = {
  Control,
  // Menu,
  MultiValue,
  // NoOptionsMessage,
  Option,
  // Placeholder,
  
};

class IntegrationReactSelect extends React.Component {
  state = {
    
    multi: null,
  };

  handleChange = name => value => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { classes, theme } = this.props;

    // const selectStyles = {
    //   input: base => ({
    //     ...base,
    //     color: theme.palette.text.primary,
    //     '& input': {
    //       font: 'inherit',
    //     },
    //   }),
    // };

    return (
      <div className={classes.root}>
        <NoSsr>
          <div className={classes.divider} />
          <Select
            classes={classes}
            // styles={selectStyles}
            textFieldProps={{
                InputLabelProps: {
                shrink: true,
              },
            }}
            options={suggestions}
            components={components}
            value={this.state.multi}
            onChange={this.handleChange('multi')}
            placeholder="Search courses"
            isMulti
          />
        </NoSsr>
      </div>
    );
  }
}

IntegrationReactSelect.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(IntegrationReactSelect);
