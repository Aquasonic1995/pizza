import React, {useEffect, useState} from "react";

const Categories = () => {

    const[activeIndex, setActiveIndex] = useState(0)
    const categories = ['Все','Мясные', 'Вегетарианская','Гриль','Острые','Закрытые']
    const onCategoryClick = (index:number) => {
      setActiveIndex(index)
    }
    return (
        <div className="categories">
            <ul>
                {categories.map((value,i)=>
                    <li onClick={() => onCategoryClick(i)} className={i===activeIndex?'active':''} key={i}>
                        {value}
                </li>)}
            </ul>
        </div>
    )
}
export default Categories