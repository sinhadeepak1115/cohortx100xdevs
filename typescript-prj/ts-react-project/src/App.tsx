import './App.css'

function App() {

  return (
    <>
      <Todo
        title='Go on the fan.'
        description="hi there"
        done={false}
      />
    </>
  )
}

interface TodoProp {
  title: string,
  description: string,
  done: boolean
}

function Todo(props: TodoProp) {
  return <div>
    <h1>
      {props.title}
    </h1>
    <h2>
      {props.description}
    </h2>
  </div>
}

sfexport default Apps;DocumentFragmensdf      ta
