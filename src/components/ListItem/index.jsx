import React, { useContext } from 'react';

import ItemsContext from '../../contexts/ItemContext';

import { Wrapper } from './styles';

const ListItem = React.forwardRef(({ item, index, ...props }, ref) => {
  const { title, description } = item;
  const { removeFromItems } = useContext(ItemsContext);

  return (
    <Wrapper ref={ref} {...props}>
      <span className="btn-delete" onClick={() => removeFromItems(index)}>
        &#x2573;
      </span>
      <h3>{title}</h3>
      <p>{description}</p>
    </Wrapper>
  );
});

export default ListItem;
