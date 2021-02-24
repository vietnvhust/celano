import React, {useContext, useState, useEffect} from 'react'
import styled from 'styled-components'
import Img from '../../core/Img'
import Logo from './logo/Logo'
import Menu from './nav/Menu'
import CartImg from './../../../assets/images/cart.svg'
import {CartContext} from "../../../contexts/Cart.Context";
import {configGlobal} from "../../../assets/styledGlobal/configGlobal";
export default function Header() {
    const {openSidebar, carts} = useContext(CartContext)
    const [count, setCount] = useState(0)
    const counter = carts.reduce(function (countItem, item) {
        return countItem + item.quantity
    },0)
    useEffect(() => {
        setCount(counter)
    },[counter])

    return (
        <HeaderWrap className="d-flex ai-center">
            <div className="container">
                <div className="row-fb ai-center">
                    <div className="col-fb-3">
                        <Logo/>
                    </div>
                    <div className="col-fb-9">
                        <div className="d-flex jc-bw ai-center">
                            <Menu/>
                            <button onClick={openSidebar} className={''} type={'button'}>
                                <Img src={CartImg} alt="cart" />
                                <span className={'count'}>{count}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </HeaderWrap>
    )
}

const HeaderWrap = styled.header`
    background-color: #ffffff;
    height: 88px;
    button {
        border: 0;
        background-color: transparent;
        cursor: pointer;   
        position: relative; 
        .count {
            position: absolute;
            font-size: 10px;
            background-color: ${configGlobal.colorPrimary};
            width: 15px;
            height: 15px;
            border-radius: 50%;
            color: white;         
            display: flex;
            justify-content: center;
            align-items: center;
            top: -5px;
            right: 0px;
        }
    }
`;