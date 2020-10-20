import React, { useState, useEffect } from 'react';
import Title from './components/Title';
import From from './components/From';
import List from './components/List';

let id = 0;
const App = () => {
  const list = [];
  const [todos, setTodos] = useState(list);
  const [todo, setTodo] = useState('');

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  function createTodo() {
    if (todo) {
      id += 1;
      setTodos([...todos, { id: id, text: todo }]);
      setTodo('');
    }
  }

  function inputTodo(e) {
    setTodo(e.target.value);
  }

  function keyPress(e) {
    e.keyCode === 13 && createTodo();
  }

  function removeTodo(id) {
    const newTodos = [...todos];
    newTodos.splice(id, 1);
    setTodos(newTodos);
  }

  return (
    <div>
      <Title todos={todos} />
      <From
        todo={todo}
        createTodo={createTodo}
        inputTodo={inputTodo}
        keyPress={keyPress}
      />
      <List todos={todos} removeTodo={removeTodo} />
    </div>
  );
};

export default App;
