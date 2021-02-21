import React from 'react'
import styled from 'styled-components'
import IconAddToCart from '../../../assets/images/add_to_cart.svg'
import { configGlobal } from '../../../assets/styledGlobal/configGlobal'
import Heading from '../../core/Heading'
import Img from '../../core/Img'
export default function ButtonAddToCart({quantity, color, id}) {
    return (
        <ButtonAddToCartWrap>
            <Img src={IconAddToCart} alt="Add To Cart" />
            <Heading tag="h6" text="Add to Cart" className="text-cap" />
        </ButtonAddToCartWrap>
    )
}
const ButtonAddToCartWrap = styled.div`
    background: ${configGlobal.colorTitle};
    display: flex;
    align-items: center;
    width: 100%;
    margin-left: 10px;
    justify-content: center;
    cursor: pointer;
    img {
        margin-right: 10px;
    }    
    h6 {
        color: white;
    }
`;