import React from 'react';
import { Decrement, Increment } from './Counter.styled';

export const Controls = ({ onIcrement, onDecrement }) => {
  return (
    <div>
      <Increment type="button" onClick={onIcrement}>
        Increment by
      </Increment>

      <Decrement type="button" onClick={onDecrement}>
        Decrement by
      </Decrement>
    </div>
  );
};
