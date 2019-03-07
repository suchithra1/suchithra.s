import React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';
import RoleDetail from './roleDetail.component';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('RoleDetail', () => {
    const props = {
        role: ['trainer','author'],
        class: [],
        buttonLabel: 'label'
    }

    it(' renders without crashing', () => {
        const wrapper = shallow(<RoleDetail role={['trainer', 'author', 'evaluator']}  role={props.role} class={props.class}/>);
        expect(wrapper.find('h2').text()).toEqual('ASSIGN ROLES');
    });

    it('contains ReactMultiSelect component', () => {
          const wrapper = mount(<RoleDetail role={['trainer', 'author', 'evaluator']} class={[]} />);
          expect(wrapper.find(<ReactMultiSelectCheckboxes placeholderButtonLabel={props.buttonLabel}/>)).toBeTruthy;
      });
    
    it('should display courses if no course is selected' , () => {
        const wrapper = shallow(<RoleDetail placeholderButtonLabel='Courses'
                             role={['trainer', 'author', 'evaluator']} />);
        expect(wrapper.find('placeholderButtonLabel').text()).toEqual('Courses');
    });

    it('checks if checkbox of role is selected', () => {
        let roleClicked = jest.fn();
        const wrapper = shallow(<RoleDetail role={['trainer', 'author', 'evaluator']} onChange={roleClicked} />);
    })

    it('RoleDetail renders submit button', () => {
        const roleClicked = jest.fn();
        const wrapper = shallow(<RoleDetail role={['trainer', 'author', 'evaluator']} roleClicked={roleClicked} />);
        const button = wrapper.find('#submit');
        expect(button.length).toBe(1);
        button.simulate('click');
    });
});