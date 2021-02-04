import React from 'react'
import styled from 'styled-components'
import Img from '../../../core/Img'
import Logo1 from '../../../../assets/images/logo1.png'
import Logo2 from '../../../../assets/images/logo2.png'
import Logo3 from '../../../../assets/images/logo3.png'
import Logo4 from '../../../../assets/images/logo4.png'
import Logo5 from '../../../../assets/images/logo5.png'
import Logo6 from '../../../../assets/images/logo6.png'
const items = [
    {
        icon: Logo1
    },
    {
        icon: Logo2
    },
    {
        icon: Logo3
    },
    {
        icon: Logo4
    },
    {
        icon: Logo5
    },
    {
        icon: Logo6
    },
]
export default function SectionLogo() {
    return (
        <SectionLogoWrap className="d-flex jc-sa">
            {
                items.length > 0 && items.map(({icon}, index) => <Img key={index} src={icon} alt="Logo" />)
            }
        </SectionLogoWrap>
    )
}
const  SectionLogoWrap = styled.div`

`;