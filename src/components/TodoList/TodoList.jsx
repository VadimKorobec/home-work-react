import React from 'react';
import { Countainer, Todo } from './TodoList.styled';

export const TodoList = ({ todos, onDeleteTodo }) => {
  return (
    <Countainer>
      <ul>
        {todos.map(({ id, text }) => (
          <Todo key={id}>
            <p>{text}</p>
            <button type="button" onClick={() => onDeleteTodo(id)}>
              Delete
            </button>
          </Todo>
        ))}
      </ul>
    </Countainer>
  );
};
