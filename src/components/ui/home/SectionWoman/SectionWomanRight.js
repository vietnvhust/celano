import React, { useContext } from 'react'
import { ProductsContext } from './../../../../contexts/Products.context'
import styled from 'styled-components'
import ProductItem from './ProductItem';
export default function SectionWomanRight() {
    const {products} = useContext(ProductsContext)
    return (
        <div className="col-fb-8">
            <SectionWomanRightWrap className="pl-5">
                <div className="row-fb">
                    {
                        products.length > 0 && products.map(({title, newStatus, regular_price, salce_price,img, rating}, index) => <ProductItem key={index} title={title} newStatus={newStatus} regular_price={regular_price} salce_price={salce_price} img={img} rating={rating} />)
                    }
                </div>
            </SectionWomanRightWrap>
        </div>
    )
}
const SectionWomanRightWrap = styled.div`
    
`;