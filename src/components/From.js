import React from 'react';

const From = (props) => {
  const { todo, createTodo, inputTodo, keyPress } = props;

  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={inputTodo}
        onKeyDown={keyPress}
      />
      <button onClick={createTodo}>新增</button>
    </div>
  );
};

export default From;
