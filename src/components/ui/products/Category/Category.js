import React, {useContext, useEffect} from 'react'
import styled from 'styled-components'
import { configGlobal } from '../../../../assets/styledGlobal/configGlobal';
import Heading from '../../../core/Heading'
import CategoryItem from './CategoryItem';
import {FilterContext} from "../../../../contexts/Filter.Context";
export default function Category({...props}) {
    const {fetchProductCategories, all_categories} = useContext(FilterContext)
    useEffect(() => {
        fetchProductCategories()
    }, [])
    return (
        <CategoryWrap {...props}>
            <Heading tag="p" className="text-upp mb-2" text="Category" />
            <ul>
                {
                    all_categories.length > 0 && all_categories.map(({_id, name, products}, index) => <CategoryItem key={index} id={_id} name={name} products={products} />)
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