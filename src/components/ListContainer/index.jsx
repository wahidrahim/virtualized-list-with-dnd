import React, { useContext } from 'react';
import styled from 'styled-components';
import ItemsContext from '../../contexts/ItemContext';

const ListWrapper = styled.div``;
const ListItem = styled.div`
  border: 1px solid black;
`;

function ListContainer() {
  const { items } = useContext(ItemsContext);

  return (
    <ListWrapper>
      {items.map((item, idx) => (
        <ListItem key={idx}>{item.description}</ListItem>
      ))}
    </ListWrapper>
  );
}

export default ListContainer;
