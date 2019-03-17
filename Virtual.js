import React from 'react';
import { List } from 'react-virtualized';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import classes from './roleDetail.css'
 
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
 style, // Style object to be applied to row (to position it)
}) {
 return (
 
<Card className={classes.bck} key={key} style={style}>
   {list[index]}
 </Card>
 
 );
}
 
// Render your list
const ListExample = () => (
 <List width={300} height={100} rowCount={list.length} overscanRowCount={3} rowHeight={20} rowRenderer={rowRenderer} />
);

export default ListExample;