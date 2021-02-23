import React from 'react'
import styled from 'styled-components'
import ProductGallery from '../../components/ui/product/ProductGallery'
import ProductSummary from '../../components/ui/product/ProductSummary'
export default function ProductTop({name, rating, price, review, sku, stock, colors, images, image}) {
    return (
        <ProductTopWrap className="row-fb">
            <div className="col-fb-6">
                <div className="inner">
                    <ProductGallery images={images} image={image} />
                </div>
            </div>
            <div className="col-fb-6">
                <div className="inner">
                    <ProductSummary name={name} price={price} rating={rating} review={review} sku={sku} stock={stock} colors={colors} />
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