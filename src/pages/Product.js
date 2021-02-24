import React from 'react'
import styled from 'styled-components';
import ProductContainer from '../containers/product/ProductContainer';
import SectionEndHome from "../components/ui/home/SectionEndHome/SectionEndHome";
import Divider from "../components/core/Divider";

export default function Product() {
    return (
        <ProductWrap>
            <ProductContainer />
            <div className="container mb-3 mt-3">
                <SectionEndHome />
                <Divider className="pt-2 pb-1" colorBorder="#f0f0f0" />
            </div>
        </ProductWrap>
    )
}
const ProductWrap = styled.div`

`;