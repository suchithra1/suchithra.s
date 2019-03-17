import React from 'react';
import { List } from 'react-virtualized';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import classes from './roleDetail.css'
// import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
 
// List data as an array of strings
const list = [
 'Easy windowing1',
 'Easy windowing2','Easy windowing1',
 'Easy windowing2','Easy windowing1',
 'Easy windowing2','Easy windowing1',
 'Easy windowing2','Easy windowing1',
 'Easy windowing2','Easy windowing1',
 'Easy windowing2','Easy windowing1',
 'Easy windowing2','Easy windowing1',
 'Easy windowing2','Easy windowing1',
 'Easy windowing2','Easy windowing1',
 'Easy windowing2','Easy windowing1',
 'Easy windowing2','Easy windowing1',
 'Easy windowing2','Easy windowing1',
 'Easy windowing2','Easy windowing1',
 'Easy windowing2','Easy windowing1',
 'Easy windowing2','Easy windowing1',
 'Easy windowing2','Easy windowing1',
 'Easy windowing2','Easy windowing2','Easy windowing1',
 'Easy windowing2','Easy windowing2','Easy windowing1',
 'Easy windowing2','Easy windowing2','Easy windowing1',
 'Easy windowing2','Easy windowing2','Easy windowing1',
 'Easy windowing2','Easy windowing2','Easy windowing1',
 'Easy windowing2','Easy windowing2','Easy windowing1',
 'Easy windowing2','Easy windowing2','Easy windowing1',
 'Java is easy to learn','Easy windowing2','How to achieve oops ',
 'Java is easy to learn','Easy windowing2','How to achieve oops ',
 'Java is easy to learn','Easy windowing2','How to achieve oops ',
 'Java is easy to learn','Easy windowing2','How to achieve oops ',
 'Easy windowing2','Easy windowing2','Easy windowing1',
 'Easy windowing2'
 // And so on...
];
 
function rowRenderer({
 key, // Unique key within array of rows
 index, // Index of row within collection
 isScrolling, // Used for performance
 isVisible, // Used for performancee
 style,
 
 // Style object to be applied to row (to position it)
}) {
 return (
 <ListItem>
   {[0, 1, 2, 3].map(value => (
        <ListItem key={value} role={undefined} dense button >
          <Checkbox  tabIndex={-1} disableRipple />
          <ListItemText primary={`Line item ${value + 1}`} />
          <ListItemSecondaryAction>
            
          </ListItemSecondaryAction>
        </ListItem>
      ))}
      </ListItem>
    
 
 );
}
 
// Render your list
const ListExample = () => (
 <List width={300} height={300} rowCount={list.length} overscanRowCount={3} rowHeight={20} rowRenderer={rowRenderer} />
);

export default ListExample;
