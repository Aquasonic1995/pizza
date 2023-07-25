import Categories from "../Components/Categories/Categories";
import Sort from "../Components/Sort/Sort";
import React, {useEffect, useState} from "react";
import PizzaBlock from "../Components/PizzaBlock/PizzaBlock";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../Redux/store";
import {setCategoryId, setCurrentPage} from "../Redux/Slices/filterSlice";
import Pagination from "../Components/Pagination/Pagination";
import {fetchPizzas} from "../Redux/Slices/pizzaSlice";

const Home = () => {
    const [isLoading, setIsLoading] = useState(true)
    const {categoryId, sort, currentPage} = useSelector((state: RootState) => state.filter)
    const {items, status} = useSelector((state: RootState) => state.pizza)
    const dispatch = useDispatch()
    const onChangePage = (page: number) => {
        dispatch(setCurrentPage(page))
    }
    const getPizzas = () => {
        const category = categoryId > 0 ? `category=${categoryId}` : ``
        setIsLoading(true)

        // @ts-ignore
        dispatch(fetchPizzas({
            category,
            sort,
            currentPage
        }))
    }
    useEffect(() => {
        getPizzas()
    }, [categoryId, sort.sort, currentPage])
    console.log(items)
    return (<>
            <div className="content__top">
                <Categories value={categoryId} onCategoryClick={(id: number) => dispatch(setCategoryId(id))}/>
                <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            {status === 'error' ? (
                <div>
                    <h2>Вщ ремя загрузки страницы произошла ошибка</h2>
                    <div>Попробуйте повторить запрос позже</div>
                </div>
            ) : (<div className="content__items">
                {items.map(pizza => (
                        <PizzaBlock title={pizza.title} price={pizza.price} imageUrl={pizza.imageUrl} sizes={pizza.sizes}
                                    types={pizza.types} key={pizza.id} id={pizza.id}/>
                    )
                )}

            </div>)
            }

            <Pagination currentPage={currentPage} onChangePage={onChangePage}/>
        </>
    )

}
export default Home