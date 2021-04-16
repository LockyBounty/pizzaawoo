import "./styles.css";
//import Footer from "./Footer";
import LandPage from "./Landpage";
//import Subscription from "./Subscription";
//import Pizza from "./Recipe";

import Login from "./login/Login";

//import Header from "./Header";
//import { Custom } from "./Custom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar_main">
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/pizzas">Pizzas</Link>
          </div>
          <div>
            <Link to="/login">Login</Link>
          </div>
        </nav>

        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <LandPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
