import React from 'react';

function CartEmpty() {
    return (<>
        <div>В корзине ничего нет. Вернитесь на страницу заказа.</div>
        <button><a href="/pizza">Заказать пиццу</a></button>
        </>
    );
}

export default CartEmpty;