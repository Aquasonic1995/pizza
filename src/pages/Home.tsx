import Categories from "../Components/Categories/Categories";
import Sort from "../Components/Sort/Sort";
import pizzas from "../assets/pizza.json";
import Skeleton from "../Components/PizzaBlock/Skeleton";
import React, {useEffect, useState} from "react";
import PizzaBlock, {PizzaBLockType} from "../Components/PizzaBlock/PizzaBlock";

const Home = () => {
    const [items,setItems] =useState<Array<PizzaBLockType> | never[]>([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(()=>{
        fetch('https://64a5716800c3559aa9bfb777.mockapi.io/items')
            .then((res)=>{
                return res.json()
            })
            .then((arr=>{
                setItems(arr)
                setIsLoading(false)
            }))
    },[])
    console.log(items)
    return (<>
            <div className="content__top">
                <Categories/>
                <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {items.map(pizza => (
                        <PizzaBlock title={pizza.title} price={pizza.price} imageUrl={pizza.imageUrl} sizes={pizza.sizes}
                                  types={pizza.types} key={pizza.id} id={pizza.id}/>
                    )
                )}
            </div>
        </>
    )

}
export default Home