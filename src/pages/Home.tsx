import Categories from "../Components/Categories/Categories";
import Sort from "../Components/Sort/Sort";
import React, {useEffect, useState} from "react";
import PizzaBlock, {PizzaBLockType} from "../Components/PizzaBlock/PizzaBlock";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../Redux/store";
import {setCategoryId, setCurrentPage} from "../Redux/Slices/filterSlice";
import axios from "axios";
import Pagination from "../Components/Pagination/Pagination";

const Home = () => {
    const [items, setItems] = useState<Array<PizzaBLockType> | never[]>([])
    const [isLoading, setIsLoading] = useState(true)

    const categoryId = useSelector((state: RootState) => state.filter.categoryId)
    const currentPage = useSelector((state: RootState) => state.filter.currentPage)
    const sortType = useSelector((state: RootState) => state.filter.sort)
    const dispatch = useDispatch()

    const onChangePage = (page: number) => {
        dispatch(setCurrentPage(page))
    }

    useEffect(() => {
        setIsLoading(true)
        axios.get(`https://64a5716800c3559aa9bfb777.mockapi.io/items?page=${currentPage}&limit=4${categoryId > 0 ? `category=${categoryId}` : ``
        }&sortBy=${sortType.sort}`)
            .then((res) => {
                setItems(res.data)
                setIsLoading(false)
            })
    }, [categoryId, sortType.sort,currentPage])
    console.log(items)
    return (<>
            <div className="content__top">
                <Categories value={categoryId} onCategoryClick={(id: number) => dispatch(setCategoryId(id))}/>
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
            <Pagination currentPage={currentPage} onChangePage={onChangePage}/>
        </>
    )

}
export default Home