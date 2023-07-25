import React, {useState} from "react";
import {v1} from 'uuid';
import {useDispatch, useSelector} from "react-redux";
import {addItem} from "../../Redux/Slices/cartSlice";
import {RootState} from "../../Redux/store";


export  type PizzaBLockType = {
    title: string
    price: number
    imageUrl: string
    sizes: Array<number>
    types: Array<number>
    id: number,

}

const PizzaBlock = (props: PizzaBLockType) => {
    const typeNames = ['Традиционное', 'Тонкое']
    const dispatch = useDispatch()
    const [activeTypeIndex, setActiveTypeIndex] = useState(0)
    const [activeSizeIndex, setActiveSizeIndex] = useState(0)
    // @ts-ignore
    const cartItem = useSelector((state:RootState)=>state.cart.items.find((obj)=>obj.id===props.id))
    // @ts-ignore
    const addCount = cartItem ? cartItem.count : 0;
    const onClickAdd = () => {
        const pizza={
            title:props.title,
            id:props.id,
            img:props.imageUrl,
            type:typeNames[activeTypeIndex],
            price:props.price,
            size:activeSizeIndex,
            count:1
        }
        dispatch(addItem(pizza))

    }
    const onSizeClick = (index: number) => {
        setActiveSizeIndex(index)
    }

    const onTypeClick = (index: number) => {
        setActiveTypeIndex(index)
    }
    return (
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={props.imageUrl}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{props.title}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {props.types.map((type, i) => (
                        <li className={i === activeTypeIndex ? 'active' : ''}
                            onClick={() => onTypeClick(i)} key={v1()}>{typeNames[type]}
                        </li>
                    ))}
                </ul>
                <ul>
                    {props.sizes.map((size, i) => (
                        <li className={i === activeSizeIndex ? 'active' : ''}
                            onClick={() => onSizeClick(i)} key={v1()}>{size}</li>
                    ))}
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {props.price} ₽</div>
                <button onClick={onClickAdd} className="button button--outline button--add">
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    <i>{addCount}</i>
                </button>
            </div>
        </div>
    )
}
export default PizzaBlock