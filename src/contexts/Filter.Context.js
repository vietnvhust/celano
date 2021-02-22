import React, { createContext, useContext, useReducer, useEffect } from 'react'
import reducer from '../reducers/FilterReducer'
import { ProductContext } from './Product.Context'
import {
    LOAD_PRODUCT,
    FILTER_PRODUCTS,
    LOAD_CATEGORIES,
    UPDATE_FILTERS
} from '../reducers/ActionTypes'
const initialState = {
    all_products: [],
    all_categories: [],
    filtered_products: [],
    filters: {
        category: 'all',
        color: 'all'
    },
}
const uri_productcategories = "https://celano-rest-api.herokuapp.com/productcategories"
export const FilterContext = createContext()
export default function FilterProvider({children}) {
    const fetchProductCategories = async () => {
        const res = await fetch(uri_productcategories);
        res
            .json()
            .then(res => dispatch({type: LOAD_CATEGORIES, payload: res.categories}))
            .catch(error => console.log(error))
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    const {products} = useContext(ProductContext)
    useEffect(() => {
        dispatch({type: LOAD_PRODUCT, payload: products})
    }, [products])
    useEffect(() => {
        dispatch({type: FILTER_PRODUCTS, payload: "FILTER_PRODUCTS"})
    }, [products,state.filters])
    const updateFilter = (e) => {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;
        if(name === 'category') {
            value = e.target.dataset.category
        }
        if(name === 'color') {
            value = e.target.dataset.color
        }
        dispatch({type: UPDATE_FILTERS, payload: {name,value}})
    }
    return (
        <FilterContext.Provider value={{...state, updateFilter, fetchProductCategories}}>
            {children}
        </FilterContext.Provider>
    )
}