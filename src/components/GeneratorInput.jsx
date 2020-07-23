import React, { useState, useContext } from 'react';

import ItemsContext from '../ItemsContext';
import { Form, Input, Button } from '../styles/GeneratorInput';

function GeneratorInput() {
  const { appendToItems, resetList } = useContext(ItemsContext);

  const [num, setNum] = useState(null);

  const updateNumOfItems = (event) => setNum(parseInt(event.target.value));

  const handleSubmit = (event) => {
    event.preventDefault();

    appendToItems(num);
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
