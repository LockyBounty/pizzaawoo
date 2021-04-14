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
  const recipe = Pizzas.filter((p) => p.id === parseInt(id, 10)); // 10 pour le radix "octal literral"

  return (
    <div>
      <h3>ID: {recipe[0].nom}</h3>
    </div>
  );
}

export default ListingDetails;
