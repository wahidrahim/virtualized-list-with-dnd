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
    minHeight: 82,
  });

  const renderClone = (provided, snapshot, rubric) => (
    <ListItem
      item={items[rubric.source.index]}
      index={rubric.source.index}
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    />
  );

  const rowRenderer = ({ index, key, parent, style }) => {
    const item = items[index];

    return (
      <Draggable key={item.title} draggableId={`${item.title}`} index={index}>
        {(provided) => (
          <CellMeasurer
            cache={cache}
            key={key}
            parent={parent}
            rowIndex={index}
          >
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

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable
        droppableId="droppable"
        mode="virtual"
        renderClone={renderClone}
      >
        {(provided) => (
          <Wrapper ref={provided.innerRef} {...provided.droppableProps}>
            <List
              width={400}
              height={600}
              rowCount={items.length}
              rowHeight={cache.rowHeight}
              rowRenderer={rowRenderer}
              overscanRowCount={10}
            />
          </Wrapper>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default ListContainer;
