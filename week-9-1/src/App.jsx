import { useEffect, useState } from 'react'
import axios from 'axios'



function useMousePointer() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handelMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };
  useEffect(() => {
    window.addEventListener('mousemove', handelMouseMove);
    return () => {
      window.removeEventListener('mousemove', handelMouseMove)
    }

  }, []);
  return position;
}
function App() {
  const mousePointer = useMousePointer();

  return (
    <>
      Your mouse Positsion is {mousePointer.x} {mousePointer.y}
    </>
  )
}

export default App
