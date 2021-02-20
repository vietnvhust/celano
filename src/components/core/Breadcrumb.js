import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { configGlobal } from '../../assets/styledGlobal/configGlobal';
import BreadcrumbItem from './BreadcrumbItem';

export default function Breadcrumb({items, divider="//", ...props}) {
    return (
        <BreadcrumbWrap {...props}>
            <div className="container">
                <ul className="d-flex">
                    <li>
                        <Link to='' >Home</Link>
                    </li>
                    {
                        items.length > 0 && items.map(({href, text}, index) => <BreadcrumbItem divider={divider} key={index} href={href} text={text} />)
                    }
                </ul>
            </div>
        </BreadcrumbWrap>
    )
}
const BreadcrumbWrap = styled.div`
    background: ${configGlobal.colorBreadcrumb};
    padding: 0.8rem 0;
    .divider {
        margin: 0 5px;
    }

    a {
        color: ${configGlobal.colorDesc2};
    }
`;
