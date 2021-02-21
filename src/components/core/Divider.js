import React from 'react'
import styled from 'styled-components'
import { configGlobal } from '../../assets/styledGlobal/configGlobal';

function Divider({widthDivider, colorBorder, ...props}) {
    return (
        <DividerWrap {...props} widthDivider={widthDivider} colorBorder={colorBorder} >
            <span></span>
        </DividerWrap>
    )
}
export default React.memo(Divider)
const DividerWrap = styled.div`
    display: flex;
    span {
        width: ${props => props.widthDivider ? props.widthDivider : "100%"};
        height: 1px;
        background-color: ${props => props.colorBorder ? props.colorBorder : configGlobal.colorTitle};
    }
`;