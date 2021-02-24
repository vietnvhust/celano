import React, {useContext, useState} from 'react'
import {CartContext} from "../../../contexts/Cart.Context";
import {formatPrice} from '../../../ultis/helpers'
import styled from 'styled-components'
import Quantity from "../product/Quantity";
import {configGlobal} from "../../../assets/styledGlobal/configGlobal";

const ProductList = () => {
    const {carts} = React.useContext(CartContext)
    const increase = () => {
        // let increaseQuantity = quantity + 1
        // if( increaseQuantity > stock ) {
        //     increaseQuantity = stock
        // }
        // setQuantity(increaseQuantity)
    }
    const decrease = () => {
        // let decreaseQuantity = quantity - 1
        // if( decreaseQuantity < 1 ) {
        //     decreaseQuantity = 1
        // }
        // setQuantity(decreaseQuantity)
    }
    return (
        <ProductListWrap>
            <ul className="products">
                {carts.length > 0 && carts.map(({quantity,product}, index) => {
                    return (
                        <li className="row-fb" key={index}>
                            <div className="col-fb-9">
                                <div className="inner">
                                    <div className="row-fb">
                                        <div className="col-fb-2">
                                            <div className="inner">
                                                <div className="thumbnail">
                                                    <a href="#">
                                                        <img src={product.image} alt={product.name}/>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-fb-10">
                                            <div className="inner">
                                                <div className="detail">
                                                    <div className="name">
                                                        <a href="#">{product.name}</a>
                                                    </div>
                                                    <div className="price">{formatPrice(product.price)}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-fb-3">
                                <div className="inner">
                                    <div className="d-flex ai-center jc-bw">
                                        <Quantity quantity={

                                            quantity} increase={increase} decrease={decrease} />

                                        <div className="remove">
                                            <svg
                                                version="1.1"
                                                className="close"
                                                x="0px"
                                                y="0px"
                                                viewBox="0 0 60 60"
                                                enableBackground="new 0 0 60 60"
                                            >
                                                <polygon
                                                    points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </ProductListWrap>
    )
}

export default ProductList
const ProductListWrap = styled.div`
    li {
        border-bottom: 1px solid ${configGlobal.colorBorder};
        padding-bottom: 1rem;
        margin-bottom: 1rem;
    }
    .close {
        fill: #7d7d7d;
        transition: color 150ms linear,
        background-color 150ms linear,
        fill 150ms linear,
        150ms opacity linear;
        cursor: pointer;
        width: 50px;
        height: 50px;
    }

    .close:hover {
        fill: #f58551;
    }
    
    .row-fb {
        margin-left: -15px;
        margin-right: -15px;
        [class^='col-'] {
            .inner {
                padding-left: 15px;
                padding-right: 15px;
            }
        }
    }
    
    .name a {
        font-size: 20px;
        text-transform: uppercase;
        margin-bottom: 10px;
        display: block;
    }
`;