import { useState } from "react";
import React from "react";
function App() {
  const [title, setTitle] = useState("my name is deepak");

  function updateTitle() {
    setTitle("my name is" + Math.random());
  }

  return (
    <div>
      <button onClick={updateTitle}>Update the title</button>
      
      <Header title={title}/>
      <Header title={title}/>
      <Header title="My name is raman" />
      <Header title="My name is raman" />
      <Header title="My name is raman" />
      <Header title="My name is raman" />
      <Header title="My name is raman" />
      <Header title="My name is raman" />
      <Header title="My name is raman" />
      <Header title="My name is raman" />
      <Header title="My name is raman" />
      <Header title="My name is raman" />
      <Header title="My name is raman" />
    </div>
  );
}
function Todo({title, description}){
  return <div>
  
  </div>
}


export default App;
