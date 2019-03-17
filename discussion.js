import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import './discussion.css';

const discussion = (props) => {
    return(
        <div className='discussion'> 
        
            {props.data.map((discussion) => <Card>
                <CardContent>
                    <div>
                        {discussion.question}
                        <div>
                        <Button variant="contained" 
                                color="primary">  Follow Response  </Button>
                        </div>
                    </div>
                    <div>
                         {discussion.comment}
                         <div className='replyButton'>
                        <Button variant="contained" 
                                color="primary"> Reply  </Button>
                        </div>
                    </div>  
                    <div><input className='answer' type='text' placeholder='Write your response'/>
                    <div className='answerButton'>
                        <Button variant="contained" 
                                color="primary"> Add an answer  </Button>
                        </div></div>
                </CardContent>
                <CardActions/>
            </Card> )}
        </div>

    );
}

export default discussion;