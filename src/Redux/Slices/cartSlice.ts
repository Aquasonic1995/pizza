import {createSlice} from '@reduxjs/toolkit'


export interface CartState {
    items: Array<cartItemType> | never,
    totalPrice: number,
    totalCount: number
}


type cartItemType = {
    id: number,
    title: string,
    img: string,
    count: number,
    type: string,
    price: number,

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
        addItem(state, action) {
            if (!state.items.find(obj => obj.id === action.payload.id)) {
                state.items.push(action.payload)
                state.totalCount++
            } else {
                {// @ts-ignore
                    state.items.find(obj => obj.id === action.payload.id).count++
                    state.totalCount++
                }
            }
            state.totalPrice = state.totalPrice + action.payload.price
        },
        removeItem(state, action) {
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
        itemDecrement(state, action) {
            let findItem = state.items.find(obj => obj.id === action.payload.id)
            if (findItem) {
                findItem.count--
                state.totalCount--
                state.totalPrice -= findItem.price
            }
        },
        itemIncrement(state, action) {
            let findItem = state.items.find(obj => obj.id === action.payload.id)
            if (findItem) {
                findItem.count++
                state.totalCount++
                state.totalPrice += findItem.price
            }
        }
    },
})

// Action creators are generated for each case reducer function
export const {addItem, removeItem, clearItems, itemDecrement,itemIncrement} = cartSlice.actions

export default cartSlice.reducer