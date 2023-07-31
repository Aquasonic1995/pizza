import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
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
type FetchPizzaArgsType = {
    category: string,
    sortList: SortListType,
    currentPage: number
}


export const fetchPizzas = createAsyncThunk<Array<PizzaBLockType>, FetchPizzaArgsType>(
    'pizza/fetchPizzasById',
    async (args) => {
        const {category, sortList, currentPage} = args
        const {data} = await axios.get<Array<PizzaBLockType>>(`https://64a5716800c3559aa9bfb777.mockapi.io/items?page=${currentPage}limit=4&${category
        }&sortBy=${sortList.sort}`)
        return data

    }
)

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<Array<PizzaBLockType>>) {
            state.items = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.pending, (state) => {
            state.status = 'loading'
            state.items = []
        }
    )
        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
                state.items = action.payload
                state.status = 'completed'
            }
        )

        builder.addCase(fetchPizzas.rejected, (state) => {
                state.status = 'error'
                state.items = []
            }
        )
    },


})
export const selectPizza = (state: RootState) => state.pizza
// Action creators are generated for each case reducer function
export const {} = pizzaSlice.actions

export default pizzaSlice.reducer