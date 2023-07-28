import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from "../store";


export interface CartState {
    items: Array<CartItemType> | never,
    totalPrice: number,
    totalCount: number
}


export type CartItemType = {
    id: number,
    title: string,
    imageUrl: string,
    count: number,
    type: string,
    price: number,
    size:number

}

const initialState: CartState = {
    items: [],
    totalPrice: 0,
    totalCount: 0
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action:PayloadAction<CartItemType>) {
            const findItem = state.items.find(obj => obj.id === action.payload.id)
            if (findItem) {
                    findItem.count++
                    state.totalCount++
            } else {
                {
                    state.items.push(action.payload)
                    state.totalCount++
                }
            }
            state.totalPrice = state.totalPrice + action.payload.price
        },
        removeItem(state, action:PayloadAction<CartItemType>) {
            let findItem = state.items.find(obj => obj.id === action.payload.id)
            if (findItem) {
                state.totalCount = state.totalCount - findItem.count;
                state.totalPrice = state.totalPrice - findItem.count * findItem.price;
                state.items = state.items.filter(obj => obj.id !== action.payload.id)
            }


        },
        clearItems(state) {
            state.items = []
            state.totalPrice = 0
            state.totalCount = 0
        },
        itemDecrement(state, action:PayloadAction<CartItemType>) {
            let findItem = state.items.find(obj => obj.id === action.payload.id)
            if (findItem) {
                findItem.count--
                state.totalCount--
                state.totalPrice -= findItem.price
            }
        },
        itemIncrement(state, action:PayloadAction<CartItemType>) {
            let findItem = state.items.find(obj => obj.id === action.payload.id)
            if (findItem) {
                findItem.count++
                state.totalCount++
                state.totalPrice += findItem.price
            }
        }
    },
})
export const selectCart = (state:RootState) => state.cart
export const selectCartItemById = (id:number)=> (state:RootState)=> state.cart.items.find((obj)=>obj.id===id)
// Action creators are generated for each case reducer function
export const {addItem, removeItem, clearItems, itemDecrement, itemIncrement} = cartSlice.actions

export default cartSlice.reducer