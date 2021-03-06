import React, {createContext, useReducer, useEffect} from 'react'
import reducer from '../reducers/CartReducer'
import {
    ADD_TO_CART,
    OPEN_SIDEBAR,
    CLOSE_SIDEBAR,
    REMOVE_PRODUCT
} from '../reducers/ActionTypes'
const getCart = () => {
    let carts = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
    return carts
}
export const CartContext = createContext()
const initialState = {
    carts: getCart(),
    isOpenSidebar: false
}
export default function CartProvider({children}) {
    const [state, dispatch] = useReducer(reducer, initialState)
    const addToCart = (id, quantity, color, price, product) => {
        dispatch({type: ADD_TO_CART, payload: {id, quantity, color, price, product}})
        openSidebar()
    }
    const openSidebar = () => {
        dispatch({type: OPEN_SIDEBAR})
    }
    const closeSidebar = () => {
        dispatch({type: CLOSE_SIDEBAR})
    }
    const removeItem = id => {
        dispatch({type: REMOVE_PRODUCT, payload: id})
        closeSidebar()
    }
    return (
        <CartContext.Provider value={{...state, addToCart, openSidebar, closeSidebar, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}