import { PizzaListProps } from "./Pizza.types"
import { PizzaItem } from "./PizzaItem"

/**
 * 
 * @param PizzaListProps 
 * @returns JSX
 */
export const PizzaList = ({pizzas}: PizzaListProps) => {
    return <main className="menu"> 
        <h2>Our Menu</h2>
        { pizzas.length > 0 ? <ul className="pizzas">
            {pizzas.map((pizza) => <PizzaItem pizza ={pizza} key ={pizza.name}/>)}   
        </ul> : <p>our menu is in prep.</p>}
     </main>
}