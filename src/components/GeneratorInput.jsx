import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import ItemsContext from '../ItemsContext';

// TODO: refactor theme
const Form = styled.form`
  display: inline-block;
  margin-bottom: 2rem;

  input {
    border: 0.1rem solid #d7d7d7;
    border-radius: 0.4rem;
    padding: 1.6rem;
    width: 16rem;
    font-size: 1.6rem;
  }

  button {
    font-size: 1.6rem;
    background: #ed2250;
    color: white;
    border: none;
    padding: 1.6rem;
    border-radius: 0.4rem;
    min-width: 10rem;

    &[type='submit'] {
      margin: 0.8rem;
    }
  }
`;

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
    <div className="generator-input">
      <Form onSubmit={handleSubmit}>
        <input
          type="number"
          name="number-of-items-input"
          id="number-of-items-input"
          value={num || ''}
          onChange={updateNumOfItems}
          min={0}
          placeholder="# of items"
        />
        <button type="submit">Generate</button>
        <button onClick={resetList}>Reset</button>
      </Form>
    </div>
  );
}

export default GeneratorInput;
