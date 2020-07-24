import React, { useContext } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import ItemsContext from '../../contexts/ItemContext';
import ListItem from '../ListItem';
import { Wrapper } from './styles';

function ListContainer() {
  const { items, swapItems } = useContext(ItemsContext);
  const onDragEnd = (result) => {
    const { source, destination } = result;

    swapItems(source.index, destination.index);
  };

  console.log('render ListContainer');

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <Wrapper ref={provided.innerRef} {...provided.droppableProps}>
            {items.map((item, index) => (
              <Draggable
                key={item.title}
                draggableId={`${item.title}`}
                index={index}
              >
                {(provided) => (
                  <ListItem
                    item={item}
                    index={index}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  />
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </Wrapper>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default ListContainer;
