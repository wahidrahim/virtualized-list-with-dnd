import React, { useContext } from 'react';

import ItemsContext from '../../contexts/ItemContext';

import { Wrapper } from './styles';

function ListContainer() {
  const { items } = useContext(ItemsContext);

  return (
    <Wrapper>
      {items.map((item, idx) => (
        <li key={idx}>{item.description}</li>
      ))}
    </Wrapper>
  );
}

export default ListContainer;
