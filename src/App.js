import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Prospect from "./pages/Prospect";
import Contact from "./pages/Contact";

import { Sidebar } from "./Components/Sidebar/Sidebar";
import { Navbar } from "./Components/Navbar/Navbar";

import "./App.css";
import useUser from "./Hooks/useUser";

function App() {
  const [showSide, setShowSide] = useState(false);
  const { isLogged } = useUser();
  if (!isLogged) {
    return <Login />;
  }
  return (
    <Router>
      <Navbar showSide={showSide} setShowSide={setShowSide} />
      <Sidebar showSide={showSide} />
      <div className="main" onClick={() => {setShowSide(false);}}>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/home" exact={true} component={Home} />
          <Route path="/prospect" exact={true} component={Prospect} />
          <Route path="/contact" exact={true} component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
