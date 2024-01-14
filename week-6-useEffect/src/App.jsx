import axios from "axios"
import { useEffect, useState } from "react";




function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos")
      .then(function(response) {
        setTodos(response.data.todos)
      })
  }, []);

  return (
    <>
      {todos.map(todo => <Todo title={todo.title} description={todo.description} id={todo.id} />)}
    </>
  )
}

function Todo({ id, title, description }) {
  return (
    <>
      <h1>
        {title}
      </h1>
      <h3>{id}</h3>
      <h4>
        {description}
      </h4>
    </>
  )
}

export default App;
