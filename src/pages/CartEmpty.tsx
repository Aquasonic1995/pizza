import React from 'react';

const CartEmpty:React.FC = () => {
    return (<>
            <div>В корзине ничего нет. Вернитесь на страницу заказа.</div>
            <button><a href="/pizza">Заказать пиццу</a></button>
        </>
    );

}


export default CartEmpty;