import React from 'react';
import { Sum } from './Counter.styled';

export const Value = ({ value }) => {
  return (
    <div>
      <Sum>{value}</Sum>
    </div>
  );
};
