import React from 'react'
import styled from 'styled-components'
import { configGlobal } from '../../assets/styledGlobal/configGlobal';

function Divider() {
    return (
        <DividerWrap className="pt-1">
            <span></span>
        </DividerWrap>
    )
}
export default React.memo(Divider)
const DividerWrap = styled.div`
    display: flex;
    span {
        width: 100px;
        height: 1px;
        background-color: ${configGlobal.colorTitle};
    }
`;