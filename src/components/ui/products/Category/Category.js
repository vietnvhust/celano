import React from 'react'
import styled from 'styled-components'
import { configGlobal } from '../../../../assets/styledGlobal/configGlobal';
import Heading from '../../../core/Heading'
import CategoryItem from './CategoryItem';
const items = [
    {
        href: "womens",
        text: "Womens"
    },
    {
        href: "mens",
        text: "Mens"
    },
    {
        href: "shoes",
        text: "Shoes"
    },
    {
        href: "accessories",
        text: "Accessories"
    }
]
export default function Category({...props}) {
    return (
        <CategoryWrap {...props}>
            <Heading tag="p" className="text-upp mb-2" text="Category" />
            <ul>
                {
                    items.length > 0 && items.map(({href, text}, index) => <CategoryItem key={index} href={href} text={text} />)
                }
            </ul>
        </CategoryWrap>
    )
}
const CategoryWrap = styled.div`
    p {
        color: ${configGlobal.colorTitle};
        font-weight: bold;
    }
`;