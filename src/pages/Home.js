import React from 'react'
import styled from 'styled-components'
// import { configGlobal } from './../assets/styledGlobal/configGlobal';
import SectionBanner from './../components/ui/home/SectionBanner/SectionBanner';
import SectionWoman from './../containers/home/SectionWoman';
import SectionAds from '../components/ui/home/SectionAds/SectionAds';
import SectionNewsletter from '../components/ui/home/SectionNewsletter/SectionNewsletter';
import SectionBlog from '../containers/home/SectionBlog';
import HomeContextProvider from '../contexts/Home.context';
import Divider from '../components/core/Divider';
import SectionLogo from '../components/ui/home/SectionLogo/SectionLogo';
import SectionInstagram from '../components/ui/home/SectionInstagram/SectionInstagram';
import SectionEndHome from '../components/ui/home/SectionEndHome/SectionEndHome';

export default function Home() {
    return (
        <HomeWrap className="home">
            <HomeContextProvider>
                <SectionBanner />
                <SectionWoman />
                <SectionAds />
                <SectionWoman />
                <SectionNewsletter />
                <SectionBlog />
            </HomeContextProvider>    
            <div className="container mb-5">
                <Divider colorBorder="#f0f0f0" />
                <SectionLogo />
                <Divider colorBorder="#f0f0f0" />
            </div>
            <SectionInstagram />
            <div className="container mb-3 mt-3">
                <SectionEndHome />
                <Divider colorBorder="#f0f0f0" />
            </div>
        </HomeWrap>
    )
}
const HomeWrap = styled.div`
    background-color: white;
`;