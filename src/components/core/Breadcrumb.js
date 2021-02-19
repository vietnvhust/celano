import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { configGlobal } from '../../assets/styledGlobal/configGlobal';

export default function Breadcrumb({href, text, divider="//", ...props}) {
    return (
        <BreadcrumbWrap {...props}>
            <div className="container">
                <ul className="d-flex">
                    <li>
                        <Link to='' >Home</Link>
                    </li>
                    <li className="divider">
                        <span>{divider}</span>
                    </li>
                    <li>
                        <Link to={href} >{text}</Link>
                    </li>
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
