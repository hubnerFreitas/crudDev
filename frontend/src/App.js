import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Link } from "react-router-dom";

import AddDev from "./components/add-dev.component";
import Dev from "./components/dev.component";
import ListDev from "./components/dev-list.component";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/home" className="navbar-brand">
          Home
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/addDev"} className="nav-link">
              Adicionar Dev
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/home"]} component={ListDev} />
          <Route exact path="/addDev" component={AddDev} />
          <Route path="/devs/:id" component={Dev} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
