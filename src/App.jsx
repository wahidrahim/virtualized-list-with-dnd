import React, { useState, useEffect } from 'react';
import { lorem } from 'faker';
import styled from 'styled-components';

import ListContainer from './components/ListContainer';
import GeneratorInput from './components/GeneratorInput';
import ItemsContext from './ItemsContext';

const Wrapper = styled.div`
  max-width: 40rem;
  margin: 0 auto;
`;

const getRandomLorem = () => {
  const MIN = 1;
  const MAX = 10;
  const randomInt = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;

  return lorem.sentences(randomInt);
};

const saveItems = (items) =>
  localStorage.setItem('items', JSON.stringify(items));

const loadItems = () => JSON.parse(localStorage.getItem('items'));

function App() {
  const [items, setItems] = useState([]);

  const generateNewItems = (num) => {
    const newItems = [];

    for (let i = items.length + 1; i <= num + items.length; i++) {
      newItems.push({
        title: i,
        description: getRandomLorem(),
      });
    }

    return newItems;
  };

  const appendToItems = (num) => setItems([...items, ...generateNewItems(num)]);

  const removeFromItems = (idx) => {
    items.splice(idx, 1);
    setItems([...items]);
  };

  const resetList = () => setItems([]);

  // Load saved items on mount
  useEffect(() => {
    const savedItems = loadItems();

    if (savedItems) {
      setItems(savedItems);
    }
  }, []);

  // Save items to localStorage when `items` is updated
  useEffect(() => saveItems(items), [items]);

  return (
    <Wrapper>
      <ItemsContext.Provider
        value={{ items, appendToItems, removeFromItems, resetList }}
      >
        <GeneratorInput />
        <ListContainer />
      </ItemsContext.Provider>
    </Wrapper>
  );
}

export default App;
