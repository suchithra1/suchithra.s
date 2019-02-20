import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import RoleDetail from './roleDetail.component';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('RoleDetail', () => {


  beforeEach(() => {
    let roleClicked = jest.fn();
  });
  
  
  it(' renders without crashing', () => {
    const role = shallow(<RoleDetail role={['trainer', 'author', 'evaluator']}  />);
    expect(role.find('h1').text()).toEqual(' ASSIGN ROLES ');
  });

  it('RoleDetai checks for roleClicked prop', () => {
    roleClicked = jest.fn();
    const role = shallow(<RoleDetail role={['trainer', 'author', 'evaluator']} roleClicked={roleClicked} />);
    expect(role.props().roleClicked).toBeDefined();
  });
  
  it('RoleDetail renders button', () => {
    const role = shallow(<RoleDetail role={['trainer', 'author', 'evaluator']} roleClicked={roleClicked} />);
    const button = role.find('button').first();
    expect(button).toBeDefined();
  });


});