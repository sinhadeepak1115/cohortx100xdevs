import { useState } from "react";
import { CountContext } from "./context";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <CountContext.Provider value={count}>
        <Count count={count} setCount={setCount} />
      </CountContext.Provider>
    </div>
  )
}
function Count({ count, setCount }) {
  return <div>
    {count}
    <CountRenderer />
    <Button count={count} setCount={setCount} />
  </div>
}

function CountRenderer({ count }) {
  return <div>
    {count}
  </div>
}

function Button({ count, setCount }) {
  return (
    <div>
      <button onClick={() => {
        setCount(count + 1)
      }}>
        Increase
      </button>
      <button onClick={() => {
        setCount(count - 1)
      }}>
        Dercrease
      </button>
    </div>
  )
}



export default App
