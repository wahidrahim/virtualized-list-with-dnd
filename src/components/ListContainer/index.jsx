import React, { useContext, useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { List, CellMeasurerCache } from 'react-virtualized';

import ItemsContext from '../../contexts/ItemContext';
import getRowRenderer from './getRowRenderer';
import getRenderClone from './getRenderClone';
import { Wrapper } from './styles';
import ScrollButton from '../ScrollButton';

function ListContainer() {
  const { items, reorderItems } = useContext(ItemsContext);

  const [scrollToIndex, setScrollToIndex] = useState(items.length);
  const [isScrollButtonVisible, setIsScrollButtonVisible] = useState(false);

  const prevItemsLength = useRef(0);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (destination) {
      reorderItems(source.index, destination.index);
    }
  };

  const cache = new CellMeasurerCache({
    fixedWidth: true,
    defaultHeight: 82,
    minHeight: 1,
  });

  const rowRenderer = getRowRenderer(items, cache);

  const renderClone = getRenderClone(items);

  const setInnerRef = (innerRef) => (ref) => {
    // react-virtualized does not provide a way to get the DOM node of <List />
    // so using `ReactDOM.findDOMNode(ref)` becomes necessary
    if (ref) {
      const domRef = ReactDOM.findDOMNode(ref)

      if (domRef instanceof HTMLElement) {
        innerRef(domRef)
      } 
    }
  }

  const toggleScrollButtonVisibility = ({
    clientHeight,
    scrollHeight,
    scrollTop,
  }) => {
    setIsScrollButtonVisible(scrollHeight - scrollTop > clientHeight);
  };

  const scrollToBottom = () => setScrollToIndex(items.length - 1);

  // Scroll to bottom when `items` length is increased
  useEffect(() => {
    if (items.length > prevItemsLength.current) {
      setScrollToIndex(items.length - 1);
      prevItemsLength.current = items.length;
    }
  }, [items]);

  // Reset `scrollToIndex` when scrolled away from bottom
  useEffect(() => {
    if (isScrollButtonVisible) {
      setScrollToIndex(undefined);
    }
  }, [isScrollButtonVisible]);

  return (
    <Wrapper>
      <DragDropContext onDragEnd={onDragEnd}>
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
              onScroll={toggleScrollButtonVisibility}
              ref={setInnerRef(provided.innerRef)}
              {...provided.droppableProps}
            />
          )}
        </Droppable>
      </DragDropContext>
      {isScrollButtonVisible && <ScrollButton onClick={scrollToBottom} />}
    </Wrapper>
  );
}

export default ListContainer;
