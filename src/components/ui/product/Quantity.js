import React from 'react'
import styled from 'styled-components'
import Img from '../../core/Img'
import MinusIcon from '../../../assets/images/minus.svg'
import PlusIcon from '../../../assets/images/plus.svg'
export default function Quantity({quantity, increase, decrease}) {
    return (
        <QuantityWrap className="d-flex ai-center jc-sa">
            <button className="d-flex ai-center"><Img src={MinusIcon} alt="minus" onClick={decrease} /></button>
            <span>{quantity}</span>
            <button className="d-flex ai-center"><Img src={PlusIcon} alt="plus" onClick={increase} /></button>
        </QuantityWrap>
    )
}
const QuantityWrap = styled.div`
    width: 170px;
    height: 48px;
    background: #F4F4F4;
    button {
        border: 0;
        cursor: pointer;
    }
`;