import React, { createContext, useReducer } from 'react'
import reducer from '../reducers/CartReducer'
export const CartContext = createContext()
const initialState = {

}
export default function CartProvider({children}) {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <createContext.Provider value={{...state}}>
            {children}
        </createContext.Provider>
    )
}