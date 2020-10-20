import React from 'react';

const Title = (props) => {
  const { todos } = props;

  return <h2>待辦事項清單({todos.length})</h2>;
};

export default Title;
