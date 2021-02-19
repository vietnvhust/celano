import React from 'react'
import styled from 'styled-components'
import Img from '../../core/Img'
import Logo from './logo/Logo'
import Menu from './nav/Menu'
import CartImg from './../../../assets/images/cart.svg'
export default function Header() {
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
                            <Img src={CartImg} alt="cart" />
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
`;