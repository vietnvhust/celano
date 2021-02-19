import React from 'react'
import styled from 'styled-components'
// import { configGlobal } from '../assets/styledGlobal/configGlobal'
import Breadcrumb from '../components/core/Breadcrumb'
import Divider from '../components/core/Divider'
import Heading from '../components/core/Heading'
import Img from '../components/core/Img'
import SectionEndHome from '../components/ui/home/SectionEndHome/SectionEndHome'
import SectionInstagram from '../components/ui/home/SectionInstagram/SectionInstagram'
import SectionLogo from '../components/ui/home/SectionLogo/SectionLogo'
import AboutImg from './../assets/images/about.jpg'
export default function About() {
    return (
        <AboutWrap>
            <Breadcrumb href="/about" text="About" className="breadcrumb mb-4" />
            <div className="container text-center">
                <Heading tag="h1" text="About our store" className="mb-2" />
                <Heading tag="p" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a ecimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text." className="description mb-4" />
                <Img src={AboutImg} alt="About our store" />
            </div>
            <div className="container mb-5 mt-2">
                <SectionLogo />
                <Divider colorBorder="#f0f0f0" />
            </div>
            <SectionInstagram />
            <div className="container mb-3 mt-3">
                <SectionEndHome />
                <Divider colorBorder="#f0f0f0" />
            </div>
        </AboutWrap>
    )
}
const AboutWrap = styled.div`
    .description {
        max-width: 770px;
        margin-left: auto;
        margin-right: auto;
    }
`;