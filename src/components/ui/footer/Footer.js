import React, {useContext} from 'react'
import styled from 'styled-components'
import FooterAbsolute from './FooterAbsolute'
import FooterBottom from './FooterBottom'
import Sidebar from "../../core/Sidebar";
import Heading from "../../core/Heading";
import {CartContext} from "../../../contexts/Cart.Context";
import {Link} from "react-router-dom";
import Img from "../../core/Img";
import CloseImg from "../../../assets/images/close.svg";
// import FooterMain from './FooterMain'
// import FooterTop from './FooterTop'
import {formatPrice} from '../../../ultis/helpers'
import {configGlobal} from "../../../assets/styledGlobal/configGlobal";

export default function Footer() {
    const {carts} = useContext(CartContext)
    if(carts.length < 0) {
        return (
            <FooterWrap>
                <FooterBottom/>
                <FooterAbsolute/>
                <Sidebar>
                    <Heading tag={'h5'} text={'Cart'} className={'text-center'} />
                    <Heading tag={'p'} text={'Cart Empty'} className={'text-center'} />
                </Sidebar>
            </FooterWrap>
        )
    }else {
        const total = formatPrice(carts.reduce(function (oldTotal, item) {
            return oldTotal + item.price
        }, 0))
        return (
            <FooterWrap>
                <FooterBottom/>
                <FooterAbsolute/>
                <Sidebar>
                    <Heading tag={'h5'} text={'Cart'} className={'text-center'} />
                    <div className="cart-inner">
                        {
                            carts.map(({id, color, price, quantity,product},index) =>
                                <div key={index} className="cart-inner__item">
                                    <div className="d-flex jc-bw">
                                        <Link to={id} >
                                            <Img src={product.image} alt={product.name} />
                                            <div className="product-content">
                                                <span>{product.name}</span>
                                                <div className="price d-flex">
                                                    <span>{quantity} x {price}</span>
                                                </div>
                                                <div className="color d-flex">
                                                    <Heading tag={'h6'} text={"Color: "} />
                                                    <span style={{ backgroundColor: `${color}` }}></span>
                                                </div>
                                            </div>
                                        </Link>
                                        <button className={''} type={'button'}><Img src={CloseImg} alt={'Close'} /></button>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className="total text-center">
                        <span>Tổng: {total}</span>
                    </div>
                </Sidebar>
            </FooterWrap>

        )
    }
}
const FooterWrap = styled.footer`
    background-color: white;
    .cart-inner {
        &__item {
            padding: 20px 0;
        }
        img {
            width: 12px;
            height: 12px;
            cursor: pointer;
        }
        button {
            border: 0;
            background-color: transparent;
            cursor: pointer;    
        }
        a {
            display: flex;
            justify-content: center;
            img {
                width: 60px;
                height: auto;
                margin-right: 5px;
            }
        }
        .color {
            h6 {
            margin-right: 5px;
            }
            span {
                width: 20px;
                height: 20px;
                border-radius: 50%;
            }
        }
        .price {
            color: ${configGlobal.colorDesc}
        }
    }
    .total {
        padding: 10px;
        display: block;
        background-color: ${configGlobal.colorPrimary};
        color: white;
    }
`;