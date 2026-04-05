
export type PizzaListProps = {
    pizzas: Pizza[]
}

export type PizzaItemProps = {
    pizza : Pizza
}

export type Pizza = {
    name: string;
    ingredients: string;
    price: number;
    photoName: string;
    soldOut: boolean;
};