export const AddToCart = (item) => {
    return {
        type : "ADD_TO_CART",
        payload:item
    }
}

export const DeleteFromCart = (item) => {
    return {
        type : "DELETE_FROM_CART",
        payload:item
    }
}

export const ClearCart=(item)=>{
    return {
        type : "CLEAR_CART",
        payload:item
    }
}
