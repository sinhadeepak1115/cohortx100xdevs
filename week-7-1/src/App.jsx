import './App.css'
import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
const Dashboard = lazy(() => import("./components/Dashboard"));
const Landing = lazy(() => import("./components/Landing"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard /></Suspense>} />
          <Route path="/" element={<Suspense fallback={"loading..."}><Landing /></Suspense>} />

        </Routes>
      </BrowserRouter>

    </>
  )
}


function Appbar() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <button onClick={() => {
          navigate("/");
        }}>Landing Page</button>

        <button onClick={() => {
          navigate("/dashboard");
        }}>Dashboard Page</button>

      </div>
    </>
  )
}
export default App;
