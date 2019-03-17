import React, {Component} from 'react';
import './Forum.css';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
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
        selectedDiscussion : {}
       

    }

    onSearch = (event) => {
        let searchText = event.target.value;
        let questions = [...this.state.discussions];
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
        this.setState({doAskQuestion: true})
    }

    onCancelQuestion = () => {
        alert('cancel');
    }
    
    onPostQuestion = () => {
        this.setState({ title: '' });
        alert('post');
    }

    render() {
        return(
            <div className='Forum'>
           {this.state.doLoadDiscussion ? <div><div className='searchHeader'>
                 <div >
                    <input type='text'  className ='searchBar' placeholder='Search for a question' onKeyDown={this.state.onSearch} />
                                           or
                     <div className='askQuestionButton'>
                         <Button  variant="contained" color="primary" onClick={this.onAskQuestion}> Ask a Question</Button>
                    </div>
                 </div>
            </div>
           
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

            {this.state.isDiscussionSelected ? <Discussion data={this.state.discussions}/> : null}

                     
           </div>
        );
    }
}

export default Forum;