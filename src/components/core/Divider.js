import React from 'react'
import styled from 'styled-components'
import { configGlobal } from '../../assets/styledGlobal/configGlobal';

function Divider({widthDivider, colorBorder}) {
    return (
        <DividerWrap widthDivider={widthDivider} colorBorder={colorBorder} className="pt-2 pb-1">
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