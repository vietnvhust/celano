import React, { createContext, useContext, useReducer, useEffect } from 'react'
import reducer from '../reducers/FilterReducer'
import { ProductContext } from './Product.Context'
import {
    LOAD_PRODUCT
} from '../reducers/ActionTypes'
const initialState = {
    all_products: []
}
export const FilterContext = createContext()
export default function FilterProvider({children}) {
    const [state, dispatch] = useReducer(reducer, initialState)
    const {products} = useContext(ProductContext)
    useEffect(() => {
        dispatch({type: LOAD_PRODUCT, payload: products})
    }, [products])
    return (
        <FilterContext.Provider value={{...state}}>
            {children}
        </FilterContext.Provider>
    )
}