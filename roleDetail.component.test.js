import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import RoleDetail from './roleDetail.component';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const getRoleDetailFromWrapper = ( wrapper) =>
  {
    return wrapper.find('roleDetail');
  };


describe('RoleDetail', () => {

  beforeEach(() => {
    let roleClicked = jest.fn();
  });

  it(' renders without crashing', () => {
    const role = shallow(<RoleDetail roles={['trainer', 'author', 'evaluator']} />);
    expect(role.find('h2').text()).toEqual('ASSIGN ROLES');
  });

  it('should display courses if no course is selected' , () => {
    const role = shallow(<RoleDetail placeholderButtonLabel='Courses'
                         roles={['trainer', 'author', 'evaluator']} />);
    expect(role.find('placeholderButtonLabel').text()).toEqual('Courses');
  });

  it('checks if checkbox of role is selected', () => {
    let roleClicked = jest.fn();
    const role = shallow(<RoleDetail roles={['trainer', 'author', 'evaluator']} onChange={roleClicked} />);
  })

  it('RoleDetail checks for roleClicked prop', () => {
    let roleClicked = jest.fn();
    const role = shallow(<RoleDetail roles={['trainer', 'author', 'evaluator']} roleClicked={roleClicked} />);
    expect(role.props().roleClicked).toBeDefined();
  });
  
  it('RoleDetail renders button', () => {
    const role = shallow(<RoleDetail roles={['trainer', 'author', 'evaluator']} roleClicked={roleClicked} />);
    const button = role.find('button').first();
    expect(button).toBeDefined();
  });


});