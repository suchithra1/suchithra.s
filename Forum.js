import React, {Component} from 'react';
import './Forum.css';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Checkbox } from '@material-ui/core';
import Question from './question.js'
import Discussion from './discussion';



class Forum extends Component {
    state = {
        doLoadDiscussion: true,
        discussions:[
            {'question' : 'how?',
             'comment' :'yes it is possible'},
            {'question':'hello'},{'question':'good day'},
            {'question':'bad day'},{'question':'now and when'},{'question':'nowhere'}],
        sortBy : '',
        doAskQuestion: false,
        isDiscussionSelected: false,
        title:'',
        description:'',
        selectedDiscussion : {},
        comment: ''
       

    }

    onSearch = (event) => {
        let searchText = event.target.value;
        let discussions = [...this.state.discussions];
        let searchedDiscussion = [];
        discussions.filter( (discussion) => {
            let question = discussion.question.toLowerCase();
              if( (question.includes(searchText.toLowerCase())) || (question.startsWith(searchText.toLowerCase()))) {
                   searchedDiscussion.push(discussion); 
                   
                }
            });

            if(searchText === null) {
                let allDiscussions = discussions;
                this.setState({discussions: allDiscussions})
            }

            console.log(searchedDiscussion); 
            this.setState({discussions : searchedDiscussion}) 
             
        
    }

    onSelectDiscussion = (discussion) => {
        console.log('discussion selected')
        // alert('clicked')
        this.setState({ isDiscussionSelected : true,
                        doLoadDiscussion :false,
                        // selectedDiscussion : discussion
                    })
    }

    onChange(event) {
        this.setState({title: event.target.value})
    }
    

    isEnabled = this.state.title> 0;

    onAskQuestion = () => {
        alert('ask question');
        this.setState({doAskQuestion: true,
                       doLoadDiscussion: false})
    }

    onCancelQuestion = () => {
        alert('cancel');
    }
    
    onPostQuestion = () => {
        this.setState({ title: '' });
        alert('post');
    }

    onFilter = () => {
        alert('filter');

    }

    onReply = (discussion) => {
        // let data = JSON.stringify(discussion);
        console.log(discussion);

    }
    render() {
        return(
            <div className='Forum'>
           {this.state.doLoadDiscussion ? <div><div className='searchHeader'>
                 <div >
                    <input type='text'  className ='searchBar' placeholder='Search for a question' onKeyDown={this.onSearch} />
                                           or
                     <div className='askQuestionButton'>
                         <Button  variant="contained" color="primary" onClick={this.onAskQuestion}> Ask a Question</Button>
                    </div>
                 </div>
            </div>
                 <div className = 'followingFilter'> <input type='checkbox' />Show discussions I am following </div>
                 <div className = 'authorFilter'> <input type='checkbox' />Show discussions I posted </div>
             <div className='discussionCard'>  
                {this.state.discussions.map((discussion) =>  <Card  className='card'
                                                                     onClick={this.onSelectDiscussion}>
                                                            <CardContent> {discussion.question}</CardContent>
                                                            <CardActions onClick={this.onSelectDiscussion}/>
                                                            </Card> )}
            </div>
            </div> : null }
            {this.state.doAskQuestion ? <Question cancel={this.onCancelQuestion}
                                                         post={this.onPostQuestion}
                                                         inputChange={this.onChange}
                                                         questionTitle={this.state.title}
                                                        //  enablePost = {this.isEnabled}
                                                         /> : null}

            {this.state.isDiscussionSelected ? <Discussion data={this.state.discussions}
                                                           reply={this.onReply}/> : null}

                     
           </div>
        );
    }
}

export default Forum;