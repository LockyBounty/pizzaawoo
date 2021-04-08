import "./styles.css";
//import Footer from "./Footer";
import LandPage from "./Landpage";
//import Subscription from "./Subscription";
//import Pizza from "./Recipe";
import Listing from "./Listing";
import ListingDetails from "./ListingDetails";
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
        </nav>

        <Switch>
          <Route exact path="/">
            <LandPage />
          </Route>
          <Route exact path="/pizzas">
            <Listing />
          </Route>
          <Route path="/pizzas/:id">
            <ListingDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
