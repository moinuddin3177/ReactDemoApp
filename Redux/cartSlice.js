import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    // REduc toolKit 
    // Immer is used by RTK
    // IN RTK, we have to mutate state
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        clearCart: (state) => {

            // state.items.length = 0; mutating exhisting state
            return { items: []}; // returning empty new state
        },
        // RTK - either mutate existing state or return a new state
    }
});

export const  {addItem, removeItem, clearCart} =  cartSlice.actions;
export default cartSlice.reducer;
