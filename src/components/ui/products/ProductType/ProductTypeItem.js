import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { configGlobal } from '../../../../assets/styledGlobal/configGlobal';

export default function ProductTypeItem({href, text}) {
    return (
        <ProductTypeItemWrap>
            <Link to={href}>{text}</Link>
        </ProductTypeItemWrap>
    )
}
const ProductTypeItemWrap = styled.li`
    &:not(:last-child) {
        margin-bottom: 10px;
    }
    a {
        color: ${configGlobal.colorDesc}
    }
`;