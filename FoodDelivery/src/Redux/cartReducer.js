import { Navigate, useNavigate } from 'react-router-dom';

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': return {
            cartItems: [...state.cartItems, action.payload]
        }

        case 'DELETE_FROM_CART': {

            let cart = [...state.cartItems]
            let index = cart.findIndex(item => item._id == action.payload)

            if (index > -1) {
                cart.splice(index, 1)
            }
            return { cartItems: cart }

            // const index = state.findIndex(item => item.id === action.payload.id);
            // return state.filter((_, i) => i !== index);
        }



        case 'CLEAR_CART': return {
            cartItems: []

        }

        // case "INCREMENT" :return initialstate+1;
        // case "DECREMENT" :return initialstate-1;
        default: return state


    }



}