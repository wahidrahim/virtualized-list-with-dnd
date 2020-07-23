import React, { useState, useContext } from 'react';

import ItemsContext from '../../contexts/ItemContext';
import { Form, Input, Button } from './styles';

function GeneratorInput() {
  const { generateNewItems, resetList } = useContext(ItemsContext);

  const [num, setNum] = useState(null);

  const updateNumOfItems = (event) => setNum(parseInt(event.target.value));

  const handleSubmit = (event) => {
    event.preventDefault();

    generateNewItems(num);
    setNum(null);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="number"
        name="number-of-items-input"
        id="number-of-items-input"
        value={num || ''}
        onChange={updateNumOfItems}
        min={0}
        placeholder="# of items"
      />
      <Button type="submit">Generate</Button>
      <Button onClick={resetList}>Reset</Button>
    </Form>
  );
}

export default GeneratorInput;
