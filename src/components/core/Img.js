import React from 'react'
import styled from 'styled-components'
function Img({src, alt, ...props}) {
    return (
        <ImgWrap src={src} alt={alt} {...props} />
    )
}
export default React.memo(Img)
const ImgWrap = styled.img`
    max-width: 100%;
`;