import React from 'react'
import styled from 'styled-components'
import Divider from '../../components/core/Divider'
import Heading from '../../components/core/Heading'
import BannerImg from './../../assets/images/banner.jpg'

export default function Banner() {
    return (
        <BannerWrap>
            <div className="container">
                <Heading tag='p' className="text-left text-uppercase" text="Spring Collection" />
                <Divider />
                <Heading tag='h1' className="text-left text-capitalize" text="Discover our New &
Modern Design" />
            </div>
        </BannerWrap>
    )
}
const BannerWrap = styled.div`
    background-image: url(${BannerImg});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    padding: 230px 0;
    h1 {
        
    }
`;