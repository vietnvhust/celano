import React from 'react'
import styled from 'styled-components'
import ProductGallery from '../../components/ui/product/ProductGallery'
import ProductSummary from '../../components/ui/product/ProductSummary'
export default function ProductTop({product}) {
    return (
        <ProductTopWrap className="row-fb">
            <div className="col-fb-6">
                <div className="inner">
                    <ProductGallery images={product.images} image={product.image} />
                </div>
            </div>
            <div className="col-fb-6">
                <div className="inner">
                    <ProductSummary product={product} />
                </div>
            </div>
        </ProductTopWrap>
    )
}
const ProductTopWrap = styled.div`
    &.row-fb {
        margin-left: -15px;
        margin-right: -15px;
    }
    .inner {
        padding-left:15px;
        padding-right: 15px;
    }
`;