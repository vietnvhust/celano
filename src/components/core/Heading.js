import React from 'react'
import styled from 'styled-components'

function Heading({tag,text,...props}) {
    return (
        React.createElement(tag,{...props},text)
    )
}
export default React.memo(Heading)