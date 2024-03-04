import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    total: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,

    reducers: {
        addCartItem: (state, actions) => {
            state.items.push(actions.payload)
        }
    }
})