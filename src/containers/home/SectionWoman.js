import React from 'react'
import styled from 'styled-components'
import SectionWomanLeft from './../../components/ui/home/SectionWoman/SectionWomanLeft';
import ProductsContextProvider from './../../contexts/Products.context';
import SectionWomanRight from './SectionWomanRight';

export default function Woman() {
    return (
        <section className="mt-5 mb-5">
            <WomanWrap>
                <div className="container">
                    <div className="row-fb">
                        <SectionWomanLeft />
                        <ProductsContextProvider>
                            <SectionWomanRight />
                        </ProductsContextProvider>
                    </div>
                </div>
            </WomanWrap>
        </section>
        
    )
}
const WomanWrap = styled.div`

`;