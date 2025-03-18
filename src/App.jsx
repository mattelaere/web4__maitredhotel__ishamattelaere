import { useState } from "react";
import "./App.css";
import CounterButton from "./components/CounterButton";
import { BrowserRouter, Routes, Route, NavLink } from "react-router";
import Tables from "./components/Details";
import Edit from "./components/Edit";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Monsieur Butler</h1>
      <div className="tables__card">
        <CounterButton count={count} setCount={setCount} />
      </div>
      <div className="overview" >
        <nav className="nav">
          <ul>
            <li>
              <NavLink to="/">Tables</NavLink>
            </li>
            <li>
              <NavLink to="/edit">Edit</NavLink>
            </li>
          </ul>
        </nav>
        <div>
          

          <div className="container">
            
              <Routes>
                <Route path="/" element={<Tables />} />
                <Route path="/edit" element={<Edit setCount={setCount} />} />
              </Routes>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
