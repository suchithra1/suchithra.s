import React from 'react';
import './Role.scss';
import MultipleSelect from './DropDown.js';

const roleDetail = (props) => {
    return(
        <div className="RoleDetail">
            ASSIGN ROLES
            <MultipleSelect/>
            {/* <div className={'Root'}>
       <FormControl className={'FormControl'}>
          {this.state.roles.map((role, index) => <InputLabel key ={index}>{role.name}</InputLabel>)}
          <Select
            multiple
            value={this.state.name}
            onChange={this.handleChange}
            // input={<Input id="select-multiple-checkbox" />}
            // renderValue={selected => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {names.map(name => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={this.state.name.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
          
        </FormControl>
           */}
      {/* </div> */}
        </div>
    );
}

export default roleDetail;