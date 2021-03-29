import "./styles.css";
//import Footer from "./Footer";
import LandPage from "./Landpage";
//import Subscription from "./Subscription";
import Pizza from "./Recipe";
import Listing from "./Listing";
import Header from "./Header";
import { Custom } from "./Custom";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Custom />
      {/*<Footer />*/}
    </div>
  );
}
