import {adapter, configure, shallow} from 'enzyme';
import PersonList from './PersonList.js';

configure({adapter: new adapter()})

dispatch('PersonList component', ()=> {
    test('should render personList', ()=> {
        const component = shallow (<PersonList/>);
        expect(component.getElements()).toMatchSnapShot();
    })
})