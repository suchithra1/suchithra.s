import React from 'react';
import  { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import Forum from './Forum.js';

configure({adapter: new Adapter()});

describe('Forum', () => {

    it('should match the snapshot', () => {
        const tree = renderer.create(<Forum />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render discussion component when discussion is selected', () => {
        const props = {
            discussion : {id:1, title:'test', description:'test'}
        }
        const wrapper = shallow(<Forum />);
        const ForumInstance = wrapper.instance();
        ForumInstance.onSelectDiscussion(props.discussion);
        expect(ForumInstance.state.isDiscussionSelected).toBeTruthy;

    });

    it('should render question component when ask a question button is clicked', () => {
        const wrapper = shallow(<Forum />);
        const ForumInstance = wrapper.instance();
        ForumInstance.onAskQuestion();
        expect(ForumInstance.state.doAskQuestion).toBeTruthy;

    });

    it('should set state when comments is fetched', () => {
        const wrapper = shallow(<Forum />);
        const ForumInstance = wrapper.instance();
        ForumInstance.getComment();
        expect(ForumInstance.state.comments.length).toBeGreaterThan(1);   
    });

    it.skip('should set state when topics is fetched', () => {
        const wrapper = shallow(<Forum />);
        const ForumInstance = wrapper.instance();
        ForumInstance.getTopic();
        expect(ForumInstance.state.topics.length).toBeGreaterThan(1);   
    });

    it('should call onCancelQuestion()', () => {
        const wrapper = shallow(<Forum />);
        const ForumInstance = wrapper.instance();
        expect(ForumInstance.onCancelQuestion()).toHaveBeenCalled;
    });

    it('should display sorted discussions on selecting a sortBy', () => {
        const props = {
            event: {
                target: {
                   value: 'recently-added'
                }
            },
        }
        const wrapper = shallow(<Forum />);

        const sortBy = 'recently-added';
        const data = data;

        wrapper.setState({ sortBy: sortBy,
                           sortedDiscussions: data })


        const ForumInstance = wrapper.instance();
        ForumInstance.onSort(props.event);
        expect(ForumInstance.state.sortedDiscussions.length).toBeGreaterThan(1);
    })


    it.skip('should read the value and set it to state onChange', () => {
        const value = 'java';
        
        const props = {
            discussion: {
                id:1,
                title: {
                    value:''
                },
                description:''
            },
            event: {
                target: {
                    value:'java'
                }
            }
        }

        const wrapper = shallow(<Forum />);
        const ForumInstance = wrapper.instance();
        ForumInstance.onChange(props.event);
        expect(props.discussion.title.value).toEqual(value);
 
    })
});
