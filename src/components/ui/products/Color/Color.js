import React, {useState} from 'react'
import styled from 'styled-components'
import { configGlobal } from '../../../../assets/styledGlobal/configGlobal';
import Heading from '../../../core/Heading'
import ColorItem from './ColorItem';
import CheckedImg from '../../../../assets/images/check.svg'
// import {FilterContext} from "../../../../contexts/Filter.Context";
export default function Color({colors,...props}) {
    const [active, setActive] = useState(0)
    // const { updateFilter } = useContext(FilterContext)
    const handleSelectColor = (indexx) => {
        setActive(indexx)
    }
    return (
        <ColorWrap {...props}>
            <Heading tag="p" className="text-upp mb-2" text="Color" />
            <div className="d-flex ai-center">
            {
                !!colors && colors.map((item, index) => <ColorItem handleSelectColor={handleSelectColor} className={`color_item ${active === index ? "active" : ""} ${item === 'all' ? 'all' : ''}`} key={index} index={index} color={item} />)
            }
            </div>
        </ColorWrap>
    )
}
const ColorWrap = styled.div`
    p {
        color: ${configGlobal.colorTitle};
        font-weight: bold;
    }
    .color_item {
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
        font-size: 10px;
        &.active {
            position: relative;
            &::after {
                content: "";
                background-image: url(${CheckedImg});
                position: absolute;
                top: 50%;
                left: 50%;
                width: 16px;
                height: 16px;
                transform: translate(-50%, -50%);
                background-size: cover;                
            }
            &.all {
                border: 2px solid ${configGlobal.colorPrimary};
                &::after {
                    content: none;
                }
            }
        }
    }
`;