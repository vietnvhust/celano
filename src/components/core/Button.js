import React from 'react'
// import styled from 'styled-components'

function Button({text,...props}) {
    return (
        // React.createElement('div','',
        //     React.createElement(tag,{...props},text)
        // )
        <button {...props} >{text}</button>
    )
}
export default React.memo(Button)
// const ButtonWrap = styled.div`
    
// `;