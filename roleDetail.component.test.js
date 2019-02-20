import React from 'react';
import { shallow} from 'enzyme';
import RoleDetail from './roleDetail.component';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

configure({ adapter: new Adapter() });

const props = {
  role:['trainer', 'author']
}

const clickFn = jest.fn();

describe ("RoleDetail", () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<RoleDetail {...props}/>);
  });

  
  it('clicking on role should display a division', () => {
    const component = shallow(<RoleDetail onClick={clickFn} />);
    component.find('button#role')
             .simulate('click');
    expect(clickFn).toHaveBeenCalled();
  });
  
});
