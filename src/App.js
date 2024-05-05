import "./App.css";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
} from "react-router-dom";
import Home from "./COMP/home";
import Buy from "./COMP/buy";
import About from "./COMP/About";

function App() {
  const [accounts, setAccounts] = useState([]);

  return (
    <Router>
      <nav className="navbar">
        <NavLink className="nav-link" activeClassName="active" exact to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" activeClassName="active" to="/buy">
          Buy
        </NavLink>
        <NavLink className="nav-link" activeClassName="active" to="/about">
          About
        </NavLink>
      </nav>

      <Routes className="navbar">
        <Route
          path="/"
          element={<Home accounts={accounts} setAccounts={setAccounts} />}
        />
        <Route
          path="/buy"
          element={<Buy accounts={accounts} setAccounts={setAccounts} />}
        />
        <Route
          path="/about"
          element={<About accounts={accounts} setAccounts={setAccounts} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
