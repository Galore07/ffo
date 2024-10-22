import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     items: [],   
//     totalQuantity: 0,  
// };

const cartCountSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalQuantity: 0,
    },

    reducers: {
        addItem: (state, action) => {
            const existingItems = state.items.find(items => items.id === action.payload.id);

            if (existingItems) {
                existingItems.quantity += 1;   // if items exists, increment its quantity 
            } else {
                state.items.push({ ...action.payload, quantity: 1 });   // add new item
            }
            state.totalQuantity += 1;   // update total items count
        },

        removeItem: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== action.payload.id);
            } else {
                existingItem.quantity -= 1;   // decrease quantity
            }
            state.totalQuantity -= 1;   // update total items count
        },

        incrementQuantity: (state, action) => {
            const item = state.items.find(item => item.id === action.payload.id);
            if (item) {
                item.quantity += 1;
                state.totalQuantity += 1;
            }
        },
        decrementQuantity: (state, action) => {
            const item = state.items.find(item => item.id === action.payload.id);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
                state.totalQuantity -= 1;
            }
        },

        clearCart: (state) => {
            state.items = [];
            state.totalQuantity = 0;
        },
    },
});

export const { addItem, removeItem, clearCart, incrementQuantity, decrementQuantity } = cartCountSlice.actions;
export default cartCountSlice.reducer;