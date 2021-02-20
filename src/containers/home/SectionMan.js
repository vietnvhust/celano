import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import SectionManAside from '../../components/ui/home/SectionMan/SectionManAside';
import ProductItem from '../../components/ui/home/SectionWoman/ProductItem';
import { ProductContext } from '../../contexts/Product.Context';

export default function SectionMan() {
    const { fetchHomeProductMan, man_products } = useContext(ProductContext)
    useEffect(() => {
        fetchHomeProductMan()
    }, [])
    return (
        <section className="mt-5 mb-5">
            <WomanWrap>
                <div className="container">
                    <div className="row-fb">
                        <div className="col-fb-8">
                            <div className="pl-5">
                                <div className="row-fb">
                                    {
                                        man_products.length > 0 && man_products.map(({_id,name,price,image,colors,company,description,category,shipping,status,rating}, index) => <ProductItem key={index} id={_id} name={name} status={status} price={price} image={image} rating={rating} colors={colors} company={company} description={description} category={category} shipping={shipping} />)
                                    }
                                </div>
                            </div>
                        </div>
                        <SectionManAside />
                    </div>
                </div>
            </WomanWrap>
        </section>
    )
}
const WomanWrap = styled.div`

`;