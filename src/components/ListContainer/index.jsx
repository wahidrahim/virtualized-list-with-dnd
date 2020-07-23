import React, { useContext } from 'react';

import ItemsContext from '../../contexts/ItemContext';

import ListItem from '../ListItem';

import { Wrapper } from './styles';

function ListContainer() {
  const { items } = useContext(ItemsContext);

  return (
    <Wrapper>
      {items.map((item, idx) => (
        <ListItem item={item} index={idx} key={idx} />
      ))}
    </Wrapper>
  );
}

export default ListContainer;
