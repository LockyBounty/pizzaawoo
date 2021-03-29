import { Pizzas, Topping, Drink } from "./Recipe";
import React, { useState } from "react";

export function Custom() {
  const [pizza, setPizza] = useState(Pizzas[0].recette);

  function onSelect() {
    return;
  }
  /*function handleClick() {
    setPizza(pi + 1);
  }
  */
  return (
    <div>
      {console.log(pizza)}
      <div>
        <h2>pizza zone</h2>
        <div>
          <p>{Pizzas[0].nom}</p>
          <ul>
            {pizza.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <h2>ingredient zone</h2>
        <div>
          {Topping.map((supplement, i) => (
            <label key={i}>
              <input type="checkbox" name={supplement} value={supplement} />
              {supplement}
            </label>
          ))}
        </div>
        {/*<button onClick={() => setPizza(pi + 1)}>click</button>*/}
      </div>
    </div>
  );
}
