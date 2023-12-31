import React, {useRef, useState} from "react";
import {v1} from "uuid";
import {useDispatch, useSelector} from "react-redux";
import {SortListType, selectFilter, setSort} from "../../Redux/Slices/filterSlice";
import {useOnClickOutside} from "usehooks-ts";


const Sort:React.FC = () => {
    const dispatch = useDispatch()
    const {sortList} = useSelector(selectFilter)
    const onSortClick = (obj: SortListType) => {
        dispatch(setSort(obj))
        setOpen(false)
    }
    const ref = useRef<HTMLDivElement>(null)

    const handleClickOutside = () => {
        setOpen(false)
        console.log('clicked outside')

    }

    useOnClickOutside(ref, handleClickOutside)

    const list: Array<SortListType> = [{
        name: 'популярности',
        sort: 'rating'
    }, {
        name: 'цене',
        sort: 'price'
    },
        {name: 'алфавиту', sort: 'title'}]

    const [open, setOpen] = useState(false)
    const openToggle = () => {
        setOpen(!open)

    }
    return (
        <div className='sort' ref={ref}>
            <div className="sort__label" onClick={openToggle}>
                <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg>
                <b>Сортировка по:</b>
                <span>{sortList.name}</span>
            </div>
            <div className={open ? 'sort__popup open' : 'sort__popup'}>
                <div>
                    <ul>
                        {list.map((obj, i) => (
                            <li className={sortList.sort === obj.sort ? 'active' : ''}
                                onClick={() => onSortClick(obj)}
                                key={v1()}>{obj.name}</li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    )
}
export default Sort