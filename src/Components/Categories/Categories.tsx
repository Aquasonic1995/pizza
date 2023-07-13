import React, {useState} from "react";

type CategoryType = {
    value: number
    onCategoryClick: (id: number) => void
}

const Categories = (props: CategoryType) => {

    const [activeIndex, setActiveIndex] = useState(0)
    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
    const onCategoryClick = (index: number) => {
        setActiveIndex(index)
    }
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