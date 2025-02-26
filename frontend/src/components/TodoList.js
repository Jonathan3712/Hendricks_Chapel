// src/components/TodoList.js
import React from 'react';
import { useSelector } from 'react-redux';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  if (!Array.isArray(todos)) {
    return <div>No todos available</div>; // Fallback if not an array
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo._id}>{todo.title}</li>
      ))}
    </ul>
  );
};

export default TodoList;
