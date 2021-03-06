import React from 'react'
import styled from 'styled-components';

function ColorItem({color, ...props}) {
    return (
        <ColorItemWrap style={{backgroundColor: color}} {...props} ></ColorItemWrap>
    )
}
export default React.memo(ColorItem)
const ColorItemWrap = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: inline-block;
    margin-right: 5px;
    &:hover {
        cursor: pointer;
    }
`;