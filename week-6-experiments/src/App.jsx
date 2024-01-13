import React, { useState, useMemo } from 'react';

let counter = 4;

function App() {
  const [todos, setTodos] = useState([{
    id: 3,
    title: "Deepak",
    description: "Developer"
  }, {
    id: 2,
    title: "Deep",
    description: "Developer"
  }, {
    id: 1,
    title: "epak",
    description: "Developer"


  }])
  function addTodo() {
    setTodos([...todos, {
      id: counter++,
      title: "dskfa",
      description: "sdjfkjsd"
    }])
  }

  return (
    <div>
      <button onClick={addTodo}>Add a todo</button>
      {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
    </div>
  );
}

function Todo({ title, description }) {
  return (
    <>
      <h1>
        {title}
      </h1>
      <h2>
        {description}
      </h2>
    </>
  )
}

export default App;

