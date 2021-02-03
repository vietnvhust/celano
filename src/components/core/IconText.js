import React from 'react'
import styled from 'styled-components'
import Heading from './Heading'
import Img from './Img'
import ArrowRightImg from './../../assets/images/arrow-right-hover.svg'
import ArrowRightBlueHoverImg from './../../assets/images/arrow-right-blue-hover.svg'
import { useHover } from './hooks/useHover'
import { configGlobal } from '../../assets/styledGlobal/configGlobal'
function IconText({tag,text,...props}) {
    const [refHover, ishover] = useHover()
    const img = ishover ? ArrowRightBlueHoverImg : ArrowRightImg;
    return (
        <IconTextWrap className="d-flex ai-center" ref={refHover}>
            <Img src={img} />
            <Heading tag={tag} text={text} {...props} />
        </IconTextWrap>
    )
}
export default React.memo(IconText)
const IconTextWrap = styled.div`
    img {
        margin-right: 0.5rem;
        transition: ${configGlobal.transition}
    }
    :hover {
        img, p {
            transition: ${configGlobal.transition}
        }
        p {
            color: ${configGlobal.colorPrimary}
        }
    }
    p {
        transition: ${configGlobal.transition}
    }
`;