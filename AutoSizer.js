import React, {Component} from 'react';
import AutoSizer from 'react-virtualized';

class Auto extends Componenet{

render() {
<div style={{ marginTop: "10px", height: "80vh" }}>
  <AutoSizer>
    // The Autosizer component goes around the List component and you can see
    here the height // and width props that it will pass to List
    {({ height, width }) => {
      const itemsPerRow = Math.floor(width / CARD_WIDTH) || 1; // A calculation to establish how many cards will go on each row.
 
      // The || 1 part is a simple hack that makes it work in a really small viewport (if someone totally collapses the window)
 
      const rowCount = Math.ceil(locations.length / itemsPerRow); // List will need the number of rows in order to be able to properly know what to render and what not to
 
      return (
        <div>
          <List
            width={width}
            height={height}
            rowCount={rowCount}
            rowHeight={CARD_WIDTH}
            // CARD_WIDTH is a constant of 340
 
            rowRenderer={({ index, key, style }) => {
              // This is where stuff gets interesting/confusing
 
              // We are going to constantly update an array of items that our rowRenderer will render
 
              const items = [];
 
              // This array will have a start and an end.
 
              // The start is the top of the window
 
              // The end is the bottom of the window
 
              // the for loop below will constantly be updated as the the user scrolls down
 
              const fromIndex = index * itemsPerRow;
 
              const toIndex = Math.min(
                fromIndex + itemsPerRow,
                locations.length
              );
 
              for (let i = fromIndex; i < toIndex; i++) {
                let location = locations[i];
 
                items.push(
                  <div  key={i}>
                    <LocationCard location={location} />
                  </div>
 
                  // Each of these items has the LocationCard in them
                );
              }
 
              return (
                // They get rendered into the Row
 
                <div 
                 key={key} style={style}>
                  {items}
                </div>
              );
            }}
          />
        </div>
      );
    }}
  </AutoSizer>
</div>
  }
}

  export default Auto;
