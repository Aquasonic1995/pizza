import React from 'react';
import './scss/app.scss';
import pizzaLogo from './img/pizza-logo.svg'
import Header from "./Components/Header/Header";
import Categories from "./Components/Categories/Categories";
import Sort from "./Components/Sort/Sort";
import PizzaBlock from "./Components/PizzaBlock/PizzaBlock";

function App() {
    return (<div className="wrapper">
      <Header/>
        <div className="content">
            <div className="container">
                <div className="content__top">
                   <Categories/>
                <Sort/>
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">

                    <PizzaBlock/>
                    <PizzaBlock/>
                    <PizzaBlock/>
                    <PizzaBlock/>

                </div>
            </div>
        </div>
    </div>);
}

export default App;
