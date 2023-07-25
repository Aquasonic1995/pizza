import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {PizzaBLockType} from "../../Components/PizzaBlock/PizzaBlock";
import axios from "axios";
export interface PizzaState {
    items: Array<PizzaBLockType> | never,
    status: string
}

const initialState: PizzaState = {
    items: [],
    status: '',
}
// @ts-ignore
export const fetchPizzas = createAsyncThunk(
    'pizza/fetchPizzasById',   // @ts-ignore
    async ({category, sort, currentPage}) => {
        // @ts-ignore
        const {data}     = await axios.get(`https://64a5716800c3559aa9bfb777.mockapi.io/items?page=${currentPage}&limit=4&${category
        }&sortBy=${sort.sort}`)
        return data
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

// Action creators are generated for each case reducer function
export const {} = pizzaSlice.actions

export default pizzaSlice.reducer