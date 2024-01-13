import React, { useState } from 'react';

function App() {
  const [title, setTitle] = useState("My Name is Deepu");

  function updateTitle() {
    setTitle("My Name is " + Math.random())
  }

  return (
    <div>
      <button onClick={updateTitle}>Click me to change the title</button>

      <Header title={title} />
      <Header title="deepak" />
    </div>
  )
}


function Header({ title }) {
  return (
    <div>
      {title}
    </div>
  )
}

export default App
