import { useState } from "react";

function App() {
  const [title, setTitle] = useState("my name is deepak");

  function updateTitle() {
    setTitle("my name is" + Math.random());
  }

  return (
    <div>
      <button onClick={updateTitle}> Update the file</button>
      <Header title={title} />
      <Header title="My name is raman" />
    </div>
  );
}

function Header({ title }) {
  console.log("rendering")
  return <div>{title}</div>;
}



export default App;
