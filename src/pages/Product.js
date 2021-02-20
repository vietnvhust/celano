import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import Breadcrumb from '../components/core/Breadcrumb';
import ProductBottom from '../containers/product/ProductBottom';
import ProductMiddle from '../containers/product/ProductMiddle';
import ProductTop from '../containers/product/ProductTop';
import { ProductContext } from '../contexts/Product.Context'

export default function Product() {
    const { id } = useParams()    
    const { fetchProduct, product } = useContext(ProductContext)
    useEffect(() => {
        fetchProduct(id)
    }, [id])
    const itemsProductWrap = [
        {
            href: "/products",
            text: "Products"
        },
        {
            href: "",
            text: product.name
        }
    ]
    return (
        <ProductWrap>
            <Breadcrumb items={itemsProductWrap} className="breadcrumb mb-4" />
            <div className="container">
                <div className="product">
                    <div className="product_top">
                        <ProductTop />
                    </div>
                    <div className="product_middle">
                        <ProductMiddle />
                    </div>
                    <div className="product_bottom">
                        <ProductBottom />
                    </div>
                </div>
            </div>
        </ProductWrap>
    )
}
const ProductWrap = styled.div`

`;