import {createSlice} from '@reduxjs/toolkit'

export interface FilterState {
    categoryId: number
    currentPage: number
    sort: {
        name: string,
        sort: string
    }
}

const initialState: FilterState = {
    currentPage: 1,
    categoryId: 0,
    sort: {
        sort: 'rating',
        name: 'популярности'
    }
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId(state, action) {
            state.categoryId = action.payload
        },
        onSortClick(state, action) {
            state.sort = action.payload
        },
        setCurrentPage(state,action){
            state.currentPage = action.payload
        }

    },
})

// Action creators are generated for each case reducer function
export const {setCategoryId, onSortClick, setCurrentPage} = filterSlice.actions

export default filterSlice.reducer