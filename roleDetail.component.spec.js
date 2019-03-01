import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import RoleDetail from './roleDetail.component';
import classes from './roleDetail.scss';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('RoleDetail', () => {

  it(' renders without crashing', () => {
    const role = shallow(<RoleDetail roles={['trainer', 'author', 'evaluator']} />);
    expect(role.find('h2').text()).toEqual('ASSIGN ROLES');
  });

  // it('renders ReactMultiSelecte component', () => {
  //     const role = shallow(<RoleDetail roles={['trainer', 'author', 'evaluator']} />);
  //     expect(role.find(ReactMultiselectCheckboxes).length).toEqual(1);
  //   });
  
  // it('should display courses if no course is selected' , () => {
  //   const role = shallow(<RoleDetail placeholderButtonLabel='Courses'
  //                        roles={['trainer', 'author', 'evaluator']} />);
  //   expect(role.find('placeholderButtonLabel').text()).toEqual('Courses');
  // });

  // it('checks if checkbox of role is selected', () => {
  //   let roleClicked = jest.fn();
  //   const role = shallow(<RoleDetail roles={['trainer', 'author', 'evaluator']} onChange={roleClicked} />);
  // })
   
  // it('RoleDetail renders button', () => {
  //   const role = shallow(<RoleDetail roles={['trainer', 'author', 'evaluator']} roleClicked={roleClicked} />);
  //   const button = role.find('button').first();
  //   expect(button).toBeDefined();
  // });


});