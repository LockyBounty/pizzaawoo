import Pizzas from "./Recipe";
import "./styles.css";

const Listing = () => (
  <div className="listing-main">
    {Pizzas.map((pizza, index) => (
      <div key={index}>
        <h3>{pizza.nom}</h3>
        <p>
          <ul>
            {pizza.recette.map((ingredient) => (
              <li>{ingredient}</li>
            ))}
          </ul>
        </p>
        <p>{pizza.prix}</p>
      </div>
    ))}
  </div>
);

export default Listing;
