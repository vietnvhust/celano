import React, {useState} from 'react'
import styled from 'styled-components';
import ColorItem from './ColorItem';
import CheckedImg from '../../../assets/images/check.svg'
export default function Colors({handleSelectColor, colors, ...props}) {
    const [active, setActive] = useState(0)
    const handleClickColor = (index) => {
        handleSelectColor(index)
        setActive(index)
    }
    return (
        <ColorsWrap {...props}>
            <div className="wrap">
                {
                    !!colors && colors.map((item, index) => <ColorItem onClick={()=>handleClickColor(index)} className={`color_item ${active === index ? "active" : ""}`} key={index} color={item} />)
                }
            </div>
        </ColorsWrap>
    )
}
const ColorsWrap = styled.div`
    .color_item {
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
        }
    }
`;