import React from 'react'
import styled from 'styled-components'
import { configGlobal } from './../../../../assets/styledGlobal/configGlobal'
import Heading from './../../../core/Heading'
import Img from './../../../core/Img'
import Rating from './../../../core/Rating'
// import ProductImg from './../../../../assets/images/product1.jpg'

export default function ProductItem({name, newStatus, regular_price, salce_price,img, rating}) {
    const withRating = (rating*100) / 5;
    return (
        <ProductItemWrap className="col-fb-4">
            {newStatus === true && (<div className="badge text-upp">New</div>)}
            <Img src={img} alt={name} />
            <Heading tag='h6' className="mt-1 mb-1" text={name} />
            <div className="price mb-1">
                {
                    regular_price && (<span className="regular_price">{regular_price}</span>)
                }
                {
                    salce_price && (<span className="salce_price">{salce_price}</span>)
                }
            </div>
            <Rating withRating={withRating} />
        </ProductItemWrap> 
    )
}
const ProductItemWrap = styled.div`
    position: relative;
    .badge {
        font-size: 12px;
        font-weight: bold;
        background-color: ${configGlobal.colorPrimary};
        color: white;
        position: absolute;
        top: 10px;
        left: 10px;
        padding: 3px;
    }
    .price {
        .regular_price {
            margin-right: 0.5rem;
        }
        .salce_price {
            color: ${configGlobal.colorDesc};
            text-decoration: line-through;
        }
    }    
`;