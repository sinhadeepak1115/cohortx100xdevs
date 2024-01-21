
export default function Dashboard() {
  return <div>
    Dashboard Page
    <Boldify>
      Deepak
    </Boldify>
  </div>
}

function Boldify({ children }) {
  return <b>
    {children}
  </b>
}
