import { PizzaItemProps } from "./Pizza.types";
/**
 *
 * @param PizzaItemProps
 * @returns JSX
 */
export const PizzaItem = ({ pizza }: PizzaItemProps) => {
  //if (pizza.soldOut) return null;
  return (
    <li className={`pizza ${pizza.soldOut ? "sold-out" : null}`}>
      <img src={`/images/${pizza.photoName}`} alt={`${pizza.name} pizza`} />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.soldOut ? `SOLD OUT` : pizza.price}</span>
      </div>
    </li>
  );
};
