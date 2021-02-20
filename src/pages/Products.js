import React from 'react'
import styled from 'styled-components';
import Breadcrumb from '../components/core/Breadcrumb';
import MainProducts from '../containers/products/MainProducts';
import SidebarProduct from '../containers/products/MainProducts'
const itemsProducts = [
    {
        href: "/products",
        text: "Products"
    }
]
export default function Products() {
    return (
        <ProductsWrap>
            <Breadcrumb items={itemsProducts} className="breadcrumb mb-4" />
            <div className="container">
                <div className="row-fb">
                    <div className="col-fb-3">
                        <SidebarProduct />
                    </div>
                    <div className="col-fb-9">
                        <MainProducts />
                    </div>
                </div>
            </div>
        </ProductsWrap>
    )
}
const ProductsWrap = styled.div`

`;