import React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';
import UserDetail from './UserDetail.component';
import RoleDetail from './roleDetail.component';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

describe('UserDetail', () => {

  it('UserDetail renders correctly', () => {
    const tree = renderer.create(<UserDetail />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('UserDetail includes input to search for a user', () => {
    const wrapper = mount(<UserDetail />);
    expect(wrapper.find('input').exists()).toEqual(true);
  });

  it('UserDetail should handle state changes', () => {
    const wrapper = shallow(<UserDetail />);
    const instance = wrapper.instance();
    expect(instance.state().toggeleIcon).toEqual(false);
    instance.simulate('click');
    expect(instance.state().toggleIcon).toEqual(true);
  });

  it('UserDetail should echo user input', () => {
      const wrapper = shallow(<UserDetail onSearch= {() => {}}/>);
      wrapper.find('input').simulate('change', { target: {value: 'soundarya'} });
      expect(wrapper.find('input').props().value).toEqual('soundarya');
  })


  it('UserDetail should call search() on clicking on the search button', () => {
      const onSearch = jest.fn();
      const wrapper = shallow(<UserDetail onClick={onSearch} />);
      const component = wrapper.dive();
      component.find('button').simulate('click');
      expect(onSearch.mock.calls.length).toEqual(1);
  });

  it('handleSelectAllClick()  should be called on selecting all users', () => {
    const handleSelectAllClick = jest.fn();
    const wrapper = shallow(<UserDetail onChange={handleSelectAllClick} />);
    const component = wrapper.dive();
    component.find('#selectAllCheckbox').simulate('change', {target : {value: 'user1'}});
    expect(handleSelectAllClick.mock.calls.length).toEqual(1);
  });

    it('should have RoleDetail component', () => {
    const user = mount(<UserDetail/>);
    expect(user.find(RoleDetail)).toHaveLength(1);
  });

  it('selecting a course', ()=>{
    const roles = [{name:'TRAINER'}, {name:'AUTHOR'}];
    const courses = [{name:'JAVA'}, {name:'BIGDATA'}];
    const wrapper = mount(<UserDetail roles={roles}  courses={courses} />)
    console.log(wrapper.state('isCourseSelected'))
    wrapper.find(RoleDetail).first().simulate('onChange',1)
    
    console.log(wrapper.state('isCourseSelected'))  
  });

 


});