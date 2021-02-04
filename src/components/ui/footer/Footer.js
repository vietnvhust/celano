import React from 'react'
import styled from 'styled-components'
import FooterAbsolute from './FooterAbsolute'
import FooterBottom from './FooterBottom'
import FooterMain from './FooterMain'
import FooterTop from './FooterTop'

export default function Footer() {
    return (
        <FooterWrap>
            <FooterBottom/>
            <FooterAbsolute/>
        </FooterWrap>
    )
}
const FooterWrap = styled.footer`
    background-color: white;
`;