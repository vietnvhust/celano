import React from 'react'
import styled from 'styled-components';
import ProductContainer from '../containers/product/ProductContainer';

export default function Product() {
    return (
        <ProductWrap>
            <ProductContainer />
        </ProductWrap>
    )
}
const ProductWrap = styled.div`

`;