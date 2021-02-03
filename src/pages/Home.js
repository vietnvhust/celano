import React from 'react'
import styled from 'styled-components'
import { configGlobal } from './../assets/styledGlobal/configGlobal';

import SectionBanner from './../components/ui/home/SectionBanner/SectionBanner';
import SectionWoman from './../containers/home/SectionWoman';
import SectionAds from '../components/ui/home/SectionAds/SectionAds';
import SectionNewsletter from '../components/ui/home/SectionNewsletter/SectionNewsletter';
import SectionBlog from '../containers/blog/SectionBlog';

export default function Home() {
    return (
        <HomeWrap className="home">
            <SectionBanner />
            <SectionWoman />
            <SectionAds />
            <SectionWoman />
            <SectionNewsletter />
            <SectionBlog />
        </HomeWrap>
    )
}
const HomeWrap = styled.div`
    background-color: white;
`;