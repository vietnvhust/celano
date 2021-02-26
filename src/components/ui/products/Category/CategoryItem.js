import React, {useContext} from 'react'
import styled from 'styled-components'
import { configGlobal } from '../../../../assets/styledGlobal/configGlobal';
import Button from "../../../core/Button";
import {FilterContext} from "../../../../contexts/Filter.Context";
export default function CategoryItem({id, name, products}) {
    const { updateFilter, filters } = useContext(FilterContext)
    const {category} = filters
    return (
        <CategoryItemWrap>
            <Button className={`text-cap ${category === id ? 'active': ''}`} onClick={updateFilter} data-category={id} name={'category'} text={name} />
        </CategoryItemWrap>
    )
}
const CategoryItemWrap = styled.li`
    &:not(:last-child) {
        margin-bottom: 10px;
    }
    button {
        color: ${configGlobal.colorDesc};
        border: 0;
        transform: ${configGlobal.transition};
        background-color: transparent;
        cursor:pointer;
        font-size: 14px;
        &:hover {
            color: ${configGlobal.colorPrimary};
            transform: ${configGlobal.transition};
        }
        &.active {
            color: ${configGlobal.colorPrimary};
            transform: ${configGlobal.transition};
        }
    }
`;