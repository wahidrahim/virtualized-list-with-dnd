import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { CellMeasurer } from 'react-virtualized';

import ListItem from '../ListItem';

const getRowRenderer = (items, cache) => ({ index, key, parent, style }) => {
  const item = items[index];

  return (
    <Draggable key={item.title} draggableId={`${item.title}`} index={index}>
      {(provided) => (
        <CellMeasurer cache={cache} key={key} parent={parent} rowIndex={index}>
          {({ measure, registerChild }) => (
            <div ref={registerChild} style={style}>
              <ListItem
                item={item}
                index={index}
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              />
            </div>
          )}
        </CellMeasurer>
      )}
    </Draggable>
  );
};

export default getRowRenderer;
