import React from "react";
import Header from "./components/Header";
import Sort from "./components/Sort";
import Categories from "./components/Categories";
import "./scss/app.scss";
import PizzaBlock from "./components/PizzaBlock";

import pizzas from "./assets/pizza.json";

function App() {
  return (
    <div>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {pizzas.map((obj) => (
                <PizzaBlock
                  key={obj.title}
                  title={obj.title}
                  price={obj.price}
                  imageUrl={obj.imageUrl}
                  sizes={obj.sizes}
                  types={obj.types}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
