import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from "../store";

 export type SortListType = {
    name: 'популярности' | 'цене' | 'алфавиту'
    sort:  'rating' | 'price' | 'title'
}
export interface FilterState {
    categoryId: number
    currentPage: number
    sortList: SortListType
    searchValue: string
    debouncedValue: string
}

const initialState: FilterState = {
    currentPage: 1,
    categoryId: 0,
    sortList: {
        sort: 'rating',
        name: 'популярности'
    },
    searchValue: '',
    debouncedValue: ''
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId(state, action:PayloadAction<number>) {
            state.categoryId = action.payload
        },
        setSort(state, action:PayloadAction<SortListType>) {
            state.sortList = action.payload
        },
        setCurrentPage(state, action:PayloadAction<number>) {
            state.currentPage = action.payload
        },
        setSearchValue(state, action:PayloadAction<string>) {
            state.searchValue = action.payload
        },
    },
})
export const selectFilter = (state: RootState) => state.filter

// Action creators are generated for each case reducer function
export const {setCategoryId, setSort, setCurrentPage, setSearchValue} = filterSlice.actions

export default filterSlice.reducer