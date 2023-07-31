import {configureStore} from '@reduxjs/toolkit'
import filterReducer from './Slices/filterSlice'
import cartReducer from './Slices/cartSlice'
import pizzaReducer from './Slices/pizzaSlice'
import {useState} from "react";
import {useDispatch} from "react-redux";

export const store = configureStore({
    reducer: {
        filter: filterReducer,
        cart: cartReducer,
        pizza: pizzaReducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const useAppDisPatch = () => useDispatch<AppDispatch>()