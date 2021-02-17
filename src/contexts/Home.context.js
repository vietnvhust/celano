import React, { createContext, useState, useEffect } from 'react'
export const HomeContext = createContext();
const HomeContextProvider = ({children}) => {
    const [products, setProducts] = useState({})
    const [posts, setPosts] = useState({})
    useEffect(() => {
        async function fetchProduct() {
            const res = await fetch("https://602ca1b430ba72001722333e.mockapi.io/Product");
            res
                .json()
                .then(res => setProducts(res))
                .catch(err => console.log(err));
        }
        fetchProduct();
    }, [])
    useEffect(() => {
        async function fetchPost() {
            const res = await fetch("https://602ca4e530ba720017223363.mockapi.io/Post");
            res
                .json()
                .then(res => setPosts(res))
                .catch(err => console.log(err));
        }
        fetchPost();
    }, [])
    const HomeContextValue = {
        products,
        posts
    }
    return (
        <HomeContext.Provider value={HomeContextValue}>
            {children}
        </HomeContext.Provider>
    )
}
export default HomeContextProvider