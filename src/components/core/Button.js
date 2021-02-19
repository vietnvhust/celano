import React from 'react'
// import styled from 'styled-components'

function Button({tag,text,...props}) {
    return (
        React.createElement('div','',
            React.createElement(tag,{...props},text)
        )
    )
}
export default React.memo(Button)
// const ButtonWrap = styled.div`
    
// `;