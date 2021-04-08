import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import { Pizzas } from "./Recipe";

function ListingDetails() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();
  const recipe = Pizzas.find((p) => p.id === id);

  return (
    <div>
      <h3>ID: {recipe.nom}</h3>
    </div>
  );
}

export default ListingDetails;
