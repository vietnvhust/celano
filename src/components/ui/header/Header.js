import React from 'react'
import styled from 'styled-components'
import Logo from './logo/Logo'
import Menu from './nav/Menu'

export default function Header() {
    return (
        <HeaderWrap className="d-flex ai-center">
            <div className="container">
                <div className="row-fb ai-center">
                    <div className="col-fb-3">
                        <Logo/>
                    </div>
                    <div className="col-fb-9">
                        <Menu/>
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