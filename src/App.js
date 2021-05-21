import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import HomeComercial from "./pages/HomeComercial";
import HomeLiderC from "./pages/HomeLiderC";
import Prospect from "./pages/Prospect";
import ProspectCommunity from "./pages/ProspectCommunity";
import Comercial from "./pages/Comercial";
import Perfil from "./pages/Perfil";

import { Sidebar } from "./Components/Sidebar/Sidebar";
import { Navbar } from "./Components/Navbar/Navbar";
import Context from "./context/UserContext";
import "./App.css";
import useUser from "./Hooks/useUser";

function App() {
  const [showSide, setShowSide] = useState(false);
  const { isLogged } = useUser();
  const { user } = useContext(Context);
  if (!isLogged) {
    return <Login />;
  }
  if(user.roleId=== "D_hTgWm55CoUMacxbNWvO"){
    return (
      <Router>
        <Navbar showSide={showSide} setShowSide={setShowSide} />
        <Sidebar showSide={showSide} role={user.roleId} />
        <div className="main" onClick={() => {setShowSide(false);}}>
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/home" exact={true} component={Home} />
            <Route path="/prospect" exact={true} component={Prospect} />
            <Route path="/comercial" exact={true} component={Comercial} />
            <Route path="/perfil" exact={true} component={Perfil} />
          </Switch>
        </div>
      </Router>
    );
  }
  if(user.roleId=== "zr_Cj9nB5LkJx-j_MVcdg"){
    return (
      <Router>
        <Navbar showSide={showSide} setShowSide={setShowSide}  />
        <Sidebar showSide={showSide} role={user.roleId} />
        <div className="main" onClick={() => {setShowSide(false);}}>
          <Switch>
            <Route path="/" exact={true} component={HomeComercial} />
            <Route path="/home" exact={true} component={HomeComercial} />
            <Route path="/prospect" exact={true} component={Prospect} />
            {/* <Route path="/comercial" exact={true} component={Comercial} />
            <Route path="/perfil" exact={true} component={Perfil} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
  if(user.roleId === "-NUhl4ekJwl_FuY5mhA62"){
    return (
      <Router>
        <Navbar showSide={showSide} setShowSide={setShowSide}  />
        <Sidebar showSide={showSide} role={user.roleId} />
        <div className="main" onClick={() => {setShowSide(false);}}>
          <Switch>
            <Route path="/" exact={true} component={Prospect} />
            <Route path="/home" exact={true} component={Prospect} />
          </Switch>
        </div>
      </Router>
    );
  }
  if(user.roleId === "FJ2A4JD7z92rkR6-8qmyg"){
    return (
      <Router>
        <Navbar showSide={showSide} setShowSide={setShowSide}  />
        <Sidebar showSide={showSide} role={user.roleId} />
        <div className="main" onClick={() => {setShowSide(false);}}>
          <Switch>
            <Route path="/" exact={true} component={HomeLiderC} />
            <Route path="/home" exact={true} component={HomeLiderC} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
