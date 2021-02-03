import React, { createContext, useState, useEffect } from 'react'
export const HomeContext = createContext();
const HomeContextProvider = ({children}) => {
    const [products, setProducts] = useState({})
    const [posts, setPosts] = useState({})
    useEffect(() => {
        async function fetchProduct() {
            const res = await fetch("http://localhost:3000/products");
            res
                .json()
                .then(res => setProducts(res))
                .catch(err => console.log(err));
        }
        fetchProduct();
    }, [])
    useEffect(() => {
        async function fetchPost() {
            const res = await fetch("http://localhost:3000/posts");
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