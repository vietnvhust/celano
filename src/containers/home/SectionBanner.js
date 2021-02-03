import React from 'react'
import styled from 'styled-components'
import Button from '../../components/core/Button'
import Divider from '../../components/core/Divider'
import Heading from '../../components/core/Heading'
import BannerImg from './../../assets/images/banner.jpg'
import ArrowRightImg from './../../assets/images/arrow-right.svg'
import ArrowRightHoverImg from './../../assets/images/arrow-right-hover.svg'
import { configGlobal } from '../../assets/styledGlobal/configGlobal'
import { useHover } from '../../components/core/hooks/useHover'
function SectionBanner() {
    const [refHover, ishover] = useHover()
    return (
        <section>
            <BannerWrap ref={refHover} ishover={ishover}>
                <div className="container">
                    <Heading tag='p' className="text-left text-uppercase" text="Spring Collection" />
                    <Divider />
                    <Heading tag='h1' className="text-left text-capitalize" text="Discover our New & Modern Design" />
                    <Button tag='button' type="button" className="btn btn-primary text-uppercase d-flex ai-center mt-3" text="Discover now" />
                </div>
            </BannerWrap>
        </section>
        
    )
}
export default SectionBanner;
const BannerWrap = styled.div`
    background-image: url(${BannerImg});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    padding: 230px 0;
    h1 {
        max-width: 515px;
        font-size: 3.5em;
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