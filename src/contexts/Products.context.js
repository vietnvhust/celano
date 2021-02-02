import React, { createContext, useState, useEffect } from 'react'
export const ProductsContext = createContext()
const ProductsContextProvider = ({children}) => {
    const [products, setProducts] = useState({})
    useEffect(() => {
        async function fetchData() {
            const res = await fetch("http://localhost:3000/products");
            res
                .json()
                .then(res => setProducts(res))
                .catch(err => console.log(err));
        }
      
        fetchData();
    }, [])
    const ProductsContextValue = {
        products
    }
    return (
        <ProductsContext.Provider value={ProductsContextValue} >
            {children}
        </ProductsContext.Provider>
    )
}
export default ProductsContextProvider;