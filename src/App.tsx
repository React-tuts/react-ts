import React from 'react';
import { pizzaData } from './data/PizzaData';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PizzaList } from './components/Pizza';

function App() :  React.JSX.Element {
  return (
    <div className="container">
      <Header title='Book App'/>
      <PizzaList pizzas = {pizzaData} />
      <Footer/>
    </div>
  );
}

export default App;
