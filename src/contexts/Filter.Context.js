import React, { createContext, useContext, useReducer, useEffect } from 'react'
import reducer from '../reducers/FilterReducer'
import { ProductContext } from './Product.Context'
import {
    LOAD_PRODUCT,
    FILTER_PRODUCTS,
    LOAD_CATEGORIES,
    UPDATE_FILTERS,
    CHANGE_PAGE,
    LOAD_PAGINATION,
    CHANGE_FIRST,
    CHANGE_LAST,
    CHANGE_NEXT,
    CHANGE_PREV
} from '../reducers/ActionTypes'
const initialState = {
    all_products: [],
    all_categories: [],
    filtered_products: [],
    total: 1,
    page: 0,
    start: 0,
    limit: 3,
    data_products: [],
    filters: {
        category: 'all',
        color: 'all'
    },
}
const uri_productcategories = "https://celano-rest-api.herokuapp.com/productcategories"
// const uri_productcategories = "http://localhost:5000/productcategories"
export const FilterContext = createContext()
export default function FilterProvider({children}) {
    const [state, dispatch] = useReducer(reducer, initialState)
    const {products} = useContext(ProductContext)
    useEffect(() => {
        dispatch({type: LOAD_PRODUCT, payload: products})
        dispatch({type: LOAD_PAGINATION})
    }, [products])
    useEffect(() => {
        dispatch({type: FILTER_PRODUCTS, payload: "FILTER_PRODUCTS"})
    }, [products,state.filters])
    const fetchProductCategories = async () => {
        const res = await fetch(uri_productcategories);
        res
            .json()
            .then(res => dispatch({type: LOAD_CATEGORIES, payload: res.categories}))
            .catch(error => console.log(error))
    }
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
    const changePage = (page) => {
        dispatch({type: CHANGE_PAGE, payload: page})
    }
    const changeFirst = () => {
        dispatch({type: CHANGE_FIRST})
    }
    const changeLast = () => {
        dispatch({type: CHANGE_LAST})
    }
    const changePrev = () => {
        dispatch({type: CHANGE_PREV})
    }
    const changeNext = () => {
        dispatch({type: CHANGE_NEXT})
    }
    return (
        <FilterContext.Provider value={{...state, updateFilter, fetchProductCategories, changePage, changeFirst, changeLast, changePrev, changeNext}}>
            {children}
        </FilterContext.Provider>
    )
}