import React, {Component} from 'react';
import {List} from 'react-virtualized';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import 'react-virtualized/styles.css';

import classes from './virtualize.scss';

/*
 * Created Date: Monday, February 25th 2019, 9:23:08 pm
 * Author: shahul.shaik
 * 
 */

class Virtualize extends Component {
    state = {
        items: [],
        offsetReached: false,
        height: 300,
        rowHeight: 40,
        width: 550,
        overCount: 2,
    }
  
    componentWillMount = () => {
        let items = this.props.suggest;
        this.setState({ items: items });
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (this.state.offsetReached) {
            let offsetReached = {...this.state.offsetReached};
            
            let items = [...this.props.suggest];
            offsetReached = false;

            this.setState({ items: items, offsetReached: offsetReached });
        }
        if (prevProps.suggest.length > prevState.items.length) {
            let newItems = [...prevProps.suggest];
            this.setState({ items: newItems });
        }
    }

    rowRenderer = ({ index, key, style }) => {
        return (
          <div key={key} style={style} >
            <ListItem className={classes.list}
                      onClick={() => this.props.onClick(this.state.items[index])}>
                <ListItemText primary={this.state.items[index].first_name + ' ' + this.state.items[index].last_name} />
            </ListItem>
          </div>
        );
    };

    onRowsRendered = ({ overscanStopIndex }) => {

        if ((overscanStopIndex === (this.state.items.length - 1)) && !this.state.offsetReached) {
            let offsetReached = true;
            this.props.offsetReached(offsetReached);
            this.setState({ offsetReached: offsetReached});
        }
    };

    render() {
        const style= {
            height: '266px',
            width: '95%',
            top: '33px',
            position: 'absolute'
        }

        return (
            <List
              className={classes.virtualContainer}
              width={this.state.width}
              height={this.state.height}
              overscanRowCount={this.state.overCount}
              rowHeight={this.state.rowHeight}
              rowRenderer={this.rowRenderer}
              rowCount={this.state.items.length}
              onRowsRendered={this.onRowsRendered}
              style={style}
            />
        );
    }
}

export default Virtualize;
