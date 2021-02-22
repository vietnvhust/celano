import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { configGlobal } from '../../../../assets/styledGlobal/configGlobal';

export default function CategoryItem({href, text}) {
    return (
        <CategoryItemWrap>
            <Link to={href}>{text}</Link>
        </CategoryItemWrap>
    )
}
const CategoryItemWrap = styled.li`
    &:not(:last-child) {
        margin-bottom: 10px;
    }
    a {
        color: ${configGlobal.colorDesc}
    }
`;