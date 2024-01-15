// import { useState } from "react";
// import { useEffect } from "react";
//
// function App() {
//   const [value, setValue] = useState(1);
//   return <div>
//     <button onClick={() => setValue(1)}>1</button>
//     <button onClick={() => setValue(2)}>2</button>
//     <button onClick={() => setValue(3)}>3</button>
//     <button onClick={() => setValue(4)}>4</button>
//     <button onClick={() => setValue(5)}>5</button>
//     <Todo id={value} />
//   </div>
// }
//
// function Todo({ id }) {
//   const [todo, setTodo] = useState({});
//
//   useEffect(() => {
//     fetch("https://sum-server.100xdevs.com/todo?id=" + id)
//       .then(async function(res) {
//         const json = await res.json();
//         setTodo(json.todo);
//       })
//   }, [id])
//
//   return <div>
//     <h1>
//       {todo.title}
//     </h1>
//     <h4>
//       {todo.description}
//     </h4>
//   </div>
// }
//
// export default App;
//
//

import { useState } from "react";

function App() {
	const [inputValue, setInputValue] = useState();
	const [counterValue, setCounterValue] = useState(0);
	let count = 0;
	for (let i = 1; i <= parseInt(inputValue); i++) {
		count = count + i;
	}
	return (
		<>
			<input
				onChange={(e) => {
					setInputValue(e.target.value);
				}}
				placeholder={"Find sum from 1 to n"}
			/>
			<br />
			{console.log(inputValue)}
			Sum is {count}
			<br />
			<button onClick={() => setCounterValue(counterValue + 1)}>
				Counter({counterValue})
			</button>
		</>
	);
}

export default App;
