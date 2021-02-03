import React from 'react'
import styled from 'styled-components'
import Img from '../../../core/Img'
import Logo1 from '../../../../assets/images/logo1.png'
import Logo2 from '../../../../assets/images/logo2.png'
import Logo3 from '../../../../assets/images/logo3.png'
import Logo4 from '../../../../assets/images/logo4.png'
import Logo5 from '../../../../assets/images/logo5.png'
import Logo6 from '../../../../assets/images/logo6.png'
export default function SectionLogo() {
    return (
        <SectionLogoWrap className="d-flex jc-sa">
            <Img src={Logo1} alt="Logo" />
            <Img src={Logo2} alt="Logo" />
            <Img src={Logo3} alt="Logo" />
            <Img src={Logo4} alt="Logo" />
            <Img src={Logo5} alt="Logo" />
            <Img src={Logo6} alt="Logo" />
        </SectionLogoWrap>
    )
}
const  SectionLogoWrap = styled.div`

`;