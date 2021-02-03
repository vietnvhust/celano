import React from 'react'
import styled from 'styled-components'
import { configGlobal } from './../assets/styledGlobal/configGlobal';
import SectionBanner from './../components/ui/home/SectionBanner/SectionBanner';
import SectionWoman from './../containers/home/SectionWoman';

export default function Home() {
    return (
        <HomeWrap className="home">
            <SectionBanner />
            <SectionWoman />
        </HomeWrap>
    )
}
const HomeWrap = styled.div`
    background-color: ${configGlobal.colorBody}
`;