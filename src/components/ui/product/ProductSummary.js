import React from 'react'
import styled from 'styled-components'
import Heading from '../../core/Heading'
import Rating from '../../core/Rating'
import { configGlobal } from '../../../assets/styledGlobal/configGlobal'
import AddToCart from './AddToCart'
import Reviews from './Reviews'
import Price from './Price'
import Sku from './Sku'
import Stock from './Stock'
export default function ProductSummary({id, name, rating, price, review, sku, stock, colors}) { 
    const withRating = (rating*100) / 5;
    return (
        <ProductSummaryWrap className="product_summary">
            <Heading tag="h1" className="product_summary__name text-cap" text={name} />
            <div className="d-flex ai-center">
                <Rating className="product_summary__rating mt-1 mb-1" withRating={withRating} />
                <Reviews review={review} />
            </div>
            {
                price && (<Price className="product_summary__price" price={price} />)
            }
            <Sku className="product_summary__sku mt-1" sku={sku} />
            <Stock className="product_summary__stock mt-1" stock={stock} />            
            <AddToCart colors={colors} stock={stock} id={id} />
        </ProductSummaryWrap>
    )
}
const ProductSummaryWrap = styled.div`
    .product_summary {
        &__name {
            font-size: 30px;
        }
        &__price {
            font-size: 30px;
            color: ${configGlobal.colorPrimary}
        }
        &__rating {
            margin-right: 10px;
        }
        &__sku {
            margin-bottom: 0.8rem;
        }
        &__stock {
            margin-bottom: 0.8rem;
        }
    }
`;