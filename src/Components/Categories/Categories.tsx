import React from "react";

type CategoryType = {
    value: number
    onCategoryClick: (id: number) => void
}

const Categories: React.FC<CategoryType> = (props) => {
    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
    return (
        <div className="categories">
            <ul>
                {categories.map((value, i) =>
                    <li onClick={() => props.onCategoryClick(i)} className={i === props.value ? 'active' : ''} key={i}>
                        {value}
                    </li>)}
            </ul>
        </div>
    )
}
export default Categories