import React from 'react'
import styled from 'styled-components'
import { configGlobal } from '../assets/styledGlobal/configGlobal';
import Banner from '../containers/home/Banner'

export default function Home() {
    return (
        <HomeWrap className="home">
            <section>
                <Banner />
            </section>
        </HomeWrap>
    )
}
const HomeWrap = styled.div`
    background-color: ${configGlobal.colorBody}
`;