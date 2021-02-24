import React from 'react'
import ProductList from "../../components/ui/cart/ProductList";
import Summary from "../../components/ui/cart/Summary";

const CartContainer = () => {
    return (
        <div className={'container'}>
            <ProductList/>
            <Summary/>
        </div>
    )
}

export default CartContainer