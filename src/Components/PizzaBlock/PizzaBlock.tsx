import React, {useState} from "react";
import {v1} from 'uuid';
import {useDispatch, useSelector} from "react-redux";
import {addItem, CartItemType, selectCartItemById} from "../../Redux/Slices/cartSlice";
import {Link} from "react-router-dom";
import {PizzaBLockType} from "../../Redux/Slices/pizzaSlice";

const PizzaBlock:React.FC<PizzaBLockType> = (props) => {
    const typeNames = ['Традиционное', 'Тонкое']
    const dispatch = useDispatch()
    const [activeTypeIndex, setActiveTypeIndex] = useState<number>(0)
    const [activeSizeIndex, setActiveSizeIndex] = useState<number>(0)
    const cartItem = useSelector(selectCartItemById(props.id))
    const addCount = cartItem?.count ? cartItem.count : 0;
    const onClickAdd = () => {
        const pizza:CartItemType = {
            title: props.title,
            id: props.id,
            imageUrl: props.imageUrl,
            type: typeNames[activeTypeIndex],
            price: props.price,
            size: props.sizes[activeSizeIndex],
            count: 1
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
            <Link to={`/pizza/${props.id}`}>
                <img
                    className="pizza-block__image"
                    src={props.imageUrl}
                    alt="Pizza"
                />
            </Link>
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