import React from 'react'
import styled from 'styled-components'
import Heading from './Heading'
import Img from './Img'
import MinusIcon from './../../assets/images/minus.svg'
import PlusIcon from './../../assets/images/plus.svg'
import { configGlobal } from '../../assets/styledGlobal/configGlobal'
export default function AccordionItem({title, content, active}) {
    return (
        <AccordionItemWrap>
            <div className="accordion-heading d-flex jc-bw ai-center mt-1 mb-1 pb-1">
                <Heading tag="h6" text={title} />
                {active ? (<Img src={MinusIcon} />) : (<Img src={PlusIcon} />) }
            </div>
            {
                active ? (<div className="accordion-content">{content}</div>) : ''
            }
        </AccordionItemWrap>
    )
}
const AccordionItemWrap = styled.div`
    .accordion-heading {
        border-bottom: 1px solid ${configGlobal.colorBorder}
    }
`;