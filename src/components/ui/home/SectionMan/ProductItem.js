import React from 'react'
import styled from 'styled-components'
import { configGlobal } from '../../../../assets/styledGlobal/configGlobal'
import Heading from '../../../core/Heading'
import Img from '../../../core/Img'
import Rating from '../../../core/Rating'
// import ProductImg from './../../../../assets/images/product1.jpg'
import {formatPrice} from '../../../../ultis/helpers'
import { Link } from 'react-router-dom'
export default function ProductItem({id,name,price,image,colors,company,description,category,shipping,status,rating}) {
    const withRating = (rating*100) / 5;
    return (
        <ProductItemWrap className="col-fb-4">
            {status !== "" && (<div className={`badge text-upp badge-${status}`}>{status}</div>)}
            <Link to={`/products/${id}`}>
                <Img src={image} alt={name} />
                <Heading tag='h6' className="mt-1 mb-1" text={name} />
            </Link>
            <div className="price mb-1">
                {
                    price && (<span className="regular_price">{formatPrice(price)}</span>)
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
        color: white;
        position: absolute;
        top: 10px;
        left: 10px;
        padding: 3px;
        &.badge-new {
            background-color: ${configGlobal.colorPrimary};
        }
        &.badge-hot {
            background-color: ${configGlobal.colorSecondary};
        }
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