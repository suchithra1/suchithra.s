import React, {Component} from 'react';

import { List } from "react-virtualized";
import NativeSelect from '@material-ui/core/NativeSelect';

import Card from '@material-ui/core/Card';

import CardActions from '@material-ui/core/CardActions';

import CardContent from '@material-ui/core/CardContent';

import { Checkbox } from '@material-ui/core';
import './Forum.css';

import './App.css';



const rowCount = 1000; 

const listHeight = 400;

const rowHeight = 50;

const rowWidth = 650;



class Virtualize extends Component {

    state = {
      items: [{"name":"java"},{"name":"react"},{"name":"angular"},
      {"name":"java"},{"name":"react"},{"name":"angular"},
      {"name":"java"},{"name":"react"},{"name":"angular"},
      {"name":"java"},{"name":"react"},{"name":"angular"},
      {"name":"java"},{"name":"react"},{"name":"angular"},
      {"name":"java"},{"name":"react"},{"name":"angular"},
      {"name":"java"},{"name":"react"},{"name":"angular"} ],

      data : []
    }

  //   componentWillReceiveProps(props) {
  //     this.setState({data: props.data});
     
  // }

  componentDidMount() {
    // this.convert();
    this.setState({data: this.props.data});
  }

  

    // this.list = Array(rowCount).fill().map((val, idx) => {

    //   return {

    //     id: idx, 

    //     name: 'John Doe',

    //   }

    // });
   

    // list = this.state.data.map((dat) => { 
    //   console.log(this.state.data)
    //   return {
    //     name: dat,

    //   }

    // })
  

//   list = () => { 
//     let data = JSON.stringify(this.state.data);
//   data.map((dat) => {
//     return {
//       name: dat.discussion,

//     }

//   })
// }  
    
  

  

  renderRow = ({ index, key, style }) => {

    console.log('row render called')
    return (

             this.state.data.map((data, index) => 
              <Card   key={index}  className='vcard' onClick = {this.props.selectDiscussion(JSON.stringify(data.discussion))}>

                <CardContent className='vcard' >
              <div>{JSON.stringify(data.discussion.title)}</div>
              <div>{JSON.stringify(data.discussion.description)}</div>


             
              </CardContent>

             </Card> )
                        
        );

        

      }

  



  

  render() {

    console.log(JSON.stringify(this.props.data));
    
    console.log(this.state.data)
    

  return (

      <div >
       {/* <div>{JSON.stringify(this.props.data)}</div> */}

       <List  width={rowWidth}

              height={listHeight}

              rowHeight={rowHeight}

              rowRenderer={this.renderRow}

              rowCount={this.state.data.length}

              overscanRowCount={3} />

      </div>

  );

}



}



export default Virtualize;