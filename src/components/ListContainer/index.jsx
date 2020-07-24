import React, { useContext, useState, useEffect } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { List, CellMeasurerCache } from 'react-virtualized';

import ItemsContext from '../../contexts/ItemContext';
import getRowRenderer from './getRowRenderer';
import getRenderClone from './getRenderClone';
import { Wrapper } from './styles';

function ListContainer() {
  const { items, reorderItems } = useContext(ItemsContext);

  const [scrollToIndex, setScrollToIndex] = useState(items.length);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (destination) {
      reorderItems(source.index, destination.index);
    }
  };

  const cache = new CellMeasurerCache({
    fixedWidth: true,
    minHeight: 1,
  });

  const rowRenderer = getRowRenderer(items, cache);

  const renderClone = getRenderClone(items);

  const setInnerRef = (innerRef) => () =>
    innerRef(document.getElementById('list'));

  useEffect(() => setScrollToIndex(items.length), [items]);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Droppable
          droppableId="droppable"
          mode="virtual"
          renderClone={renderClone}
        >
          {(provided) => (
            <List
              id="list"
              width={400}
              height={600}
              rowCount={items.length}
              rowHeight={cache.rowHeight}
              rowRenderer={rowRenderer}
              overscanRowCount={10}
              scrollToIndex={scrollToIndex}
              ref={setInnerRef(provided.innerRef)}
              {...provided.droppableProps}
            />
          )}
        </Droppable>
      </Wrapper>
    </DragDropContext>
  );
}

export default ListContainer;
