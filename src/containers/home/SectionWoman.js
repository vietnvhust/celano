import React from 'react'
import styled from 'styled-components'
import SectionWomanLeft from '../../components/ui/home/SectionWoman/SectionWomanLeft';
import SectionWomanRight from '../../components/ui/home/SectionWoman/SectionWomanRight';
import ProductsContextProvider from '../../contexts/Products.context';

export default function Woman() {
    return (
        <section className="mt-5">
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