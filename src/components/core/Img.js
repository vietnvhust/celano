import React from 'react'
import styled from 'styled-components'
function Img({src, alt}) {
    return (
        <ImgWrap src={src} alt={alt} />
    )
}
export default React.memo(Img)
const ImgWrap = styled.img`
    max-width: 100%;
`;