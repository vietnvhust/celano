import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Button from '../../components/core/Button'
import Divider from '../../components/core/Divider'
import Heading from '../../components/core/Heading'
import BannerImg from './../../assets/images/banner.jpg'
import ArrowRightImg from './../../assets/images/arrow-right.svg'
import ArrowRightHoverImg from './../../assets/images/arrow-right-hover.svg'
import { configGlobal } from '../../assets/styledGlobal/configGlobal'
export default function Banner() {
    const [value, setValue] = useState(false);
    const refHover = useRef(null)
    const handleMouseOver = () => setValue(true);
    const handleMouseOut = () => setValue(false);
    useEffect(
        () => {
            const node = refHover.current
            if (node) {
                node.addEventListener('mouseover', handleMouseOver);
                node.addEventListener('mouseout', handleMouseOut);
                return () => {
                    node.removeEventListener('mouseover', handleMouseOver);
                    node.removeEventListener('mouseout', handleMouseOut);
                };
            }
        },
        [refHover.current] // Recall only if ref changes
    );
    return (
        <BannerWrap ref={refHover} ishover={value}>
            <div className="container">
                <Heading tag='p' className="text-left text-uppercase" text="Spring Collection" />
                <Divider />
                <Heading tag='h1' className="text-left text-capitalize" text="Discover our New & Modern Design" />
                <Button tag='button' type="button" className="btn btn-primary text-uppercase d-flex ai-center mt-3" text="Discover now" />
            </div>
        </BannerWrap>
    )
}
const BannerWrap = styled.div`
    background-image: url(${BannerImg});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    padding: 230px 0;
    h1 {
        max-width: 515px;
    }
    :hover {
        .btn {
            transition: ${configGlobal.transition};
            background-color: white;
            color: ${configGlobal.colorTitle};
        }
    }
    .btn::after {
        content: "";
        width: 6px;
        height: 10px;
        background-image: url(${props => props.ishover === true ? ArrowRightHoverImg : ArrowRightImg});
        background-repeat: no-repeat;
        margin-left: 1rem;
    }
`;