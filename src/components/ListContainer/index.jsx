import React, { useContext } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { List, CellMeasurer, CellMeasurerCache } from 'react-virtualized';

import ItemsContext from '../../contexts/ItemContext';
import ListItem from '../ListItem';
import { Wrapper } from './styles';

function ListContainer() {
  const { items, swapItems } = useContext(ItemsContext);
  const onDragEnd = ({ source, destination }) =>
    swapItems(source.index, destination.index);

  const cache = new CellMeasurerCache({
    fixedWidth: true,
    minHeight: 50,
  });

  const rowRenderer = ({ index, key, parent, style }) => (
    <CellMeasurer cache={cache} key={key} parent={parent} rowIndex={index}>
      {({ measure, registerChild }) => (
        <div ref={registerChild} style={style}>
          <ListItem item={items[index]} index={index} />
        </div>
      )}
    </CellMeasurer>
  );

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <Wrapper ref={provided.innerRef} {...provided.droppableProps}>
            <List
              width={400}
              height={600}
              rowCount={items.length}
              rowHeight={cache.rowHeight}
              rowRenderer={rowRenderer}
            />
            {/* {items.map((item, index) => (
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
            {provided.placeholder} */}
          </Wrapper>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default ListContainer;
