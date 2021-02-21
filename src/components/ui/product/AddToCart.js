import React,{useState} from 'react'
import styled from 'styled-components'
import ButtonAddToCart from './ButtonAddToCart'
import Quantity from './Quantity'
import CheckedImg from '../../../assets/images/check.svg'
import ColorItem from './ColorItem'
export default function AddToCart({stock, colors, id}) {
    const [quantity, setQuantity] = useState(1)
    const [active, setActive] = useState(0)
    const increase = () => {
        let increaseQuantity = quantity + 1
        if( increaseQuantity > stock ) {
            increaseQuantity = stock
        }
        setQuantity(increaseQuantity)
    }
    const decrease = () => {
        let decreaseQuantity = quantity - 1
        if( decreaseQuantity < 1 ) {
            decreaseQuantity = 1
        }
        setQuantity(decreaseQuantity)
    }
    return (
        <>
            <ColorsWrap className="product_summary__color mt-1 mb-1">
                <div className="wrap">
                    {
                        !!colors && colors.map((item, index) => <ColorItem onClick={()=>setActive(index)} className={`color_item ${active === index ? "active" : ""}`} key={index} color={item} />)
                    }
                </div>
            </ColorsWrap>
            {
                stock > 0 && <AddToCartWrap>            
                    <Quantity quantity={quantity} increase={increase} decrease={decrease} />
                    <ButtonAddToCart quantity={quantity} id={id} color={colors[active]}  />
                </AddToCartWrap>
            }
            
        </>
    )
}
const AddToCartWrap = styled.div`
    display: flex;
`;
const ColorsWrap = styled.div`
    .color_item {
        &.active {
            position: relative;
            &::after {
                content: "";
                background-image: url(${CheckedImg});
                position: absolute;
                top: 50%;
                left: 50%;
                width: 16px;
                height: 16px;
                transform: translate(-50%, -50%);
                background-size: cover;
            }
        }
    }
`;