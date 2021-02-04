import React from 'react'
import styled from 'styled-components'
import IconImg1 from '../../../../assets/images/icon1.png'
import IconImg2 from '../../../../assets/images/icon2.png'
import IconImg3 from '../../../../assets/images/icon3.png'
import Heading from '../../../core/Heading'
import Img from '../../../core/Img'
const items = [
    {
        icon: IconImg1,
        h6: "Free Shipping",
        p: "Free shipping with all order above $100"
    },
    {
        icon: IconImg2,
        h6: "Free Shipping",
        p: "Free shipping with all order above $100"
    },
    {
        icon: IconImg3,
        h6: "Free Shipping",
        p: "Free shipping with all order above $100"
    }
]
export default function SectionEndHome() {
    return (
        <SectionEndHomeWrap>
            <div className="row-fb">
                {
                    items.length > 0 && items.map(({icon, h6, p}, index) => 
                        <div key={index} className="col-fb-4">
                            <div className="inner d-flex ai-center">
                                <div className="icon">
                                    <Img src={icon} alt="Icon" />
                                </div>
                                <div className="box-text">
                                    <Heading tag="h6" text={h6} className="text-upp" />
                                    <Heading tag="p" text={p} />
                                </div>
                            </div>
                        </div>    
                    )
                }                       
            </div>
        </SectionEndHomeWrap>
    )
}
const SectionEndHomeWrap = styled.div`
    img {
        margin-right: 1rem
    }
`;