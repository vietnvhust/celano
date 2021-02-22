import React from 'react'
import styled from 'styled-components'
import { configGlobal } from '../../../../assets/styledGlobal/configGlobal';
import Heading from '../../../core/Heading'
import ProductTypeItem from './ProductTypeItem';
const items = [
    {
        href: "dress",
        text: "Dress"
    },
    {
        href: "jeans",
        text: "Jeans"
    },
    {
        href: "shirts",
        text: "Shirts"
    },
    {
        href: "hats",
        text: "Hats"
    },
    {
        href: "sunglasses",
        text: "Sunglasses"
    }
]
export default function ProductType({...props}) {
    return (
        <ProductTypeWrap {...props}>
            <Heading tag="p" className="text-upp mb-2" text="Product type" />
            <ul>
                {
                    items.length > 0 && items.map(({href, text}, index) => <ProductTypeItem key={index} href={href} text={text} />)
                }
            </ul>
        </ProductTypeWrap>
    )
}
const ProductTypeWrap = styled.div`
    p {
        color: ${configGlobal.colorTitle};
        font-weight: bold;
    }
`;