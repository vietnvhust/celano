import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { configGlobal } from '../../../../assets/styledGlobal/configGlobal';
function MenuItem({href, text}) {
    return (
        <LiWrap className="pr-1 pl-1">
            <Link className="text-uppercase" to={href}>{text}</Link>
        </LiWrap>
    )
}
export default React.memo(MenuItem);
const LiWrap = styled.li`
    
`;