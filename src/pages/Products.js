import React from 'react'
import styled from 'styled-components';
import Breadcrumb from '../components/core/Breadcrumb';
import Divider from '../components/core/Divider';
import SectionEndHome from '../components/ui/home/SectionEndHome/SectionEndHome';
import MainProduct from '../containers/products/MainProduct';
import SidebarProduct from '../containers/products/SidebarProduct'
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
                        <MainProduct />
                    </div>
                </div>
            </div>
            <div className="container mb-3 mt-3">
                <SectionEndHome />
                <Divider className="pt-2 pb-1" colorBorder="#f0f0f0" />
            </div>
        </ProductsWrap>
    )
}
const ProductsWrap = styled.div`

`;