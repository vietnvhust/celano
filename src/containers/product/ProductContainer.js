import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import Breadcrumb from '../../components/core/Breadcrumb';
import { ProductContext } from '../../contexts/Product.Context';
import ProductBottom from './ProductBottom';
import ProductMiddle from './ProductMiddle';
import ProductTop from './ProductTop';

export default function ProductContainer() {
    const { id } = useParams()    
    const { fetchProduct, product } = useContext(ProductContext)
    useEffect(() => {
        fetchProduct(id)
    }, [id])
    const {name, description} = product
    const itemsProductWrap = [
        {
            href: "/products",
            text: "Products"
        },
        {
            href: "",
            text: name
        }
    ]
    return (
        <ProductWrap>
            <Breadcrumb items={itemsProductWrap} className="breadcrumb mb-4" />
            <div className="container">
                <div className="product">
                    <div className="product_top">
                        <ProductTop product={product} />
                    </div>
                    <div className="product_middle">
                        <ProductMiddle description={description} className="mt-3" />
                    </div>
                    {/*<div className="product_bottom">*/}
                    {/*    <ProductBottom />*/}
                    {/*</div>*/}
                </div>
            </div>
        </ProductWrap>
    )
}
const ProductWrap = styled.div`

`;