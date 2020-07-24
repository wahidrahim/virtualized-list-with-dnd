import React from 'react';
import { Button } from './styles';

function ScrollButton({ onClick }) {
  return (
    <Button onClick={onClick}>
      <span>&#8675;</span>
    </Button>
  );
}

export default ScrollButton;
