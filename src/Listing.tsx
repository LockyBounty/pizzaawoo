import { Pizzas } from "./Recipe";
import "./styles.css";

import { Link } from "react-router-dom";

const Listing = () => (
  <div className="listing-main">
    {Pizzas.map((pizza, index) => (
      <div key={index}>
        <h3>{pizza.nom}</h3>
        <div>
          <ul>
            {pizza.recette.map((ingredient, i) => (
              <li key={i}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <p>{pizza.prix}</p>
        <button>
          <Link to={`/pizzas/${pizza.id}`}>Commander</Link>
        </button>
      </div>
    ))}
  </div>
);

export default Listing;
