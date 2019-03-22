import React, {Component} from 'react';
import { List } from "react-virtualized";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import './App.css';

const rowCount = 1000; 
const listHeight = 400;
const rowHeight = 50;
const rowWidth = 800;

class Virtualize extends Component {
  constructor() {
    super();
    this.list = Array(rowCount).fill().map((val, idx) => {
      return {
        id: idx, 
        name: 'John Doe',
      }
    });
    
  }
  
  renderRow = ({ index, key, style }) => {
    return (
          
              <Card   key={key} style={style} className = 'card'>
                <CardContent className='card'>
              <div>{this.list[index].name}</div>
              <div>{this.list[index].text}</div>
              </CardContent>
              </Card>
          
        );
      }
  

  
  render() {
  return (
      <div >
       <List  width={rowWidth}
              height={listHeight}
              rowHeight={rowHeight}
              rowRenderer={this.renderRow}
              rowCount={this.list.length}
              overscanRowCount={3} />
      </div>
  );
}

}

export default Virtualize;