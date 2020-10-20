import React from 'react';

const List = (props) => {
  const { todos, removeTodo } = props;

  return (
    <div>
      <ul>
        {todos.map((t, idx) => (
          <li key={t.id} onClick={() => removeTodo(idx)}>
            {t.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
