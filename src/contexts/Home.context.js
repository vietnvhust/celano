import React, { createContext, useState, useEffect } from 'react'
export const HomeContext = createContext();
const HomeContextProvider = ({children}) => {
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
    const HomeContextValue = {products}
    return (
        <HomeContext.Provider value={HomeContextValue}>
            {children}
        </HomeContext.Provider>
    )
}
export default HomeContextProvider