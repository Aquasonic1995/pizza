import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";
import {RootState} from "../store";
import {SortListType} from "./filterSlice";
export  type PizzaBLockType = {
    title: string
    price: number
    imageUrl: string
    sizes: Array<number>
    types: Array<number>
    id: number,
}
export interface PizzaState {
    items: Array<PizzaBLockType> | never,
    status: 'loading' | 'completed' | 'error'
}

const initialState: PizzaState = {
    items: [],
    status: 'loading',
}
type FetchPizzaArgsType= {
    category:string,
    sortList:SortListType,
    currentPage:number
}


export const fetchPizzas = createAsyncThunk(
    'pizza/fetchPizzasById',
    async ( args:FetchPizzaArgsType) => {
        const   {category, sortList, currentPage} = args
        const {data}  = await axios.get(`https://64a5716800c3559aa9bfb777.mockapi.io/items?page=${currentPage}&limit=4&${category
        }&sortBy=${sortList.sort}`)
        return data as Array<PizzaBLockType>
    }
)

// @ts-ignore
export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload
        }
    },
    extraReducers: {
        // @ts-ignore
        [fetchPizzas.pending]: (state, action) => {
            state.status = 'loading'
            state.items=[]
        },
        // @ts-ignore
        [fetchPizzas.fulfilled]: (state, action) => {
            state.items=action.payload
            state.status = 'completed'
        },
        // @ts-ignore
        [fetchPizzas.rejected]: (state, action) => {
            state.status = 'error'
            state.items=[]
        }
    }
})
export const selectPizza = (state: RootState) => state.pizza
// Action creators are generated for each case reducer function
export const {} = pizzaSlice.actions

export default pizzaSlice.reducer