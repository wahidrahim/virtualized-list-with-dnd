import React from 'react';
import ListItem from '../ListItem';

const getRenderClone = (items) => (provided, snapshot, rubric) => (
  <ListItem
    item={items[rubric.source.index]}
    index={rubric.source.index}
    ref={provided.innerRef}
    {...provided.draggableProps}
    {...provided.dragHandleProps}
  />
);

export default getRenderClone;
