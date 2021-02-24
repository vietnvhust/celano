import React, { createContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/ProductReducer'
import {
    HOME_PRODUCT_WOMAN,
    HOME_PRODUCT_MAN,
    PRODUCTS,
    PRODUCT
} from '../reducers/ActionTypes'
const initialState = {
    man_products: [],
    woman_products: [],
    products: [],
    product: {}
}
// const uri = "https://celano-rest-api.herokuapp.com/products"
// const uri_woman = "https://celano-rest-api.herokuapp.com/productcategories/602fd7a16ab8691e35e31088/products"
// const uri_man = "https://celano-rest-api.herokuapp.com/productcategories/602fd7a96ab8691e35e31089/products"
// const uri_product = "https://celano-rest-api.herokuapp.com/products"
const uri = "http://localhost:5000/products"
const uri_woman = "http://localhost:5000/productcategories/602fd7a16ab8691e35e31088/products"
const uri_man = "http://localhost:5000/productcategories/602fd7a96ab8691e35e31089/products"
const uri_product = "http://localhost:5000/products"
export const ProductContext = createContext();
export default function ProductProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState)
    const fetchProducts = async (uri) => {
        const res = await fetch(uri);
            res
                .json()
                .then(res => dispatch({type: PRODUCTS, payload: res.products}))
                .catch(err => console.log(err));
    }
    useEffect(() => {
        fetchProducts(uri);
    }, [])
    const fetchHomeProductWoman = async () => {
        const res = await fetch(uri_woman);
            res
                .json()
                .then(res => dispatch({type: HOME_PRODUCT_WOMAN, payload: res.categories}))
                .catch(err => console.log(err));
    }
    const fetchHomeProductMan = async () => {
        const res = await fetch(uri_man);
            res
                .json()
                .then(res => dispatch({type: HOME_PRODUCT_MAN, payload: res.categories}))
                .catch(err => console.log(err));
    }
    const fetchProduct = async (id) => {
        const res = await fetch(uri_product+'/'+id);
            res
                .json()
                .then(res => dispatch({type: PRODUCT, payload: res.product}))
                .catch(err => console.log(err));
    }
    return (
        <ProductContext.Provider value={{...state, fetchHomeProductWoman, fetchHomeProductMan, fetchProduct}}>
            {children}
        </ProductContext.Provider>
    )
}