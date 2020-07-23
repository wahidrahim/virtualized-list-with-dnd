import React, { useContext } from 'react';

import ItemsContext from '../../contexts/ItemContext';

import { Wrapper } from './styles';

function ListItem({ item: { title, description }, index }) {
  const { removeFromItems } = useContext(ItemsContext);

  return (
    <Wrapper>
      <span className="btn-delete" onClick={() => removeFromItems(index)}>
        &#x2573;
      </span>
      <h3>{title}</h3>
      <p>{description}</p>
    </Wrapper>
  );
}

export default ListItem;
