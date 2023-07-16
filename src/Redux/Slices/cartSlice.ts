import {createSlice} from '@reduxjs/toolkit'

export interface CartState {
    items: Array<object> | never,
    totalPrice: number,
}

const initialState: CartState = {
    items: [],
    totalPrice: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            // @ts-ignore
           if(!state.items.find(obj=>obj.id===action.payload.id)){state.items.push(action.payload)}
           // @ts-ignore
           else {state.items.find(obj=>obj.id===action.payload.id).totalCount++}
            state.totalPrice = state.totalPrice +action.payload.price
        },
        removeItem(state, action) {
            // @ts-ignore
            state.items.filter(obj => obj.id !== action.payload.id)
        },
        clearItems(state) {
            state.items = []
        }
    },
})

// Action creators are generated for each case reducer function
export const {addItem, removeItem, clearItems} = cartSlice.actions

export default cartSlice.reducer