export function CreateTodo(props) {
  return <div>
    <input style={{
      padding: 10,
      margin: 10
    }} type="text" placeholder="title"></input>
    <br />
    <input style={{
      padding: 10,
      margin: 10
    }} type="text" placeholder="description"></input>
    <br />
    <button onClick={() => {
      fetch("http://locahost:3000/todos", {
        method: "POST",
        body: {
          title: document.getElementById("title").innerHTML,
          description: ""
        }
      })
        .then(ascyn function(res) {
          const json = await res.json();
          alert("Todo added");
        })
    }}>Add a todo</button>
  </div>
}

