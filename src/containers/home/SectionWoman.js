import React, { useContext } from 'react'
import styled from 'styled-components'
import ProductItem from '../../components/ui/home/SectionWoman/ProductItem';
import SectionWomanAside from '../../components/ui/home/SectionWoman/SectionWomanAside';
import { HomeContext } from '../../contexts/Home.context';

export default function Woman() {
    const {products} = useContext(HomeContext)
    return (
        <section className="mt-5 mb-5">
            <WomanWrap>
                <div className="container">
                    <div className="row-fb">
                        <SectionWomanAside />
                        <div className="col-fb-8">
                            <div className="pl-5">
                                <div className="row-fb">
                                    {
                                        products.length > 0 && products.map(({name, newStatus, regular_price, salce_price,img, rating}, index) => <ProductItem key={index} name={name} newStatus={newStatus} regular_price={regular_price} salce_price={salce_price} img={img} rating={rating} />)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </WomanWrap>
        </section>
        
    )
}
const WomanWrap = styled.div`

`;