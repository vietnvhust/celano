import React from 'react'
import styled from 'styled-components'
import Ads1 from './../../../../assets/images/ads1.jpg'
import Ads2 from './../../../../assets/images/ads2.jpg'
import Ads3 from './../../../../assets/images/ads3.jpg'
import { configGlobal } from './../../../../assets/styledGlobal/configGlobal'
import Heading from './../../../core/Heading'
const items = [
    {
        img: Ads1,
        p: 'new arrivals',
        h3: 'summer 2020'
    },
    {
        img: Ads2,
        p: 'new arrivals',
        h3: 'summer 2020'
    },
    {
        img: Ads3,
        p: 'new arrivals',
        h3: 'summer 2020'
    }
]
export default function SectionAds() {
    return (
        <SectionAdsWrap>
            <div className="row-fb">
                {
                    items.length > 0 && items.map(({img,p,h3}, index) => 
                        <div key={index} className="col-fb-4">
                            <div className="inner">
                                <div className="ads-item" style={{ backgroundImage: `url(${img})` }}>
                                    <div className="ads-item__inner text-center">
                                        <Heading tag="p" text={p} className="text-upp" />
                                        <Heading tag="h3" text={h3} className="text-upp" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }                
            </div>
        </SectionAdsWrap>
    )
}
const SectionAdsWrap = styled.section`
    padding-left: 15px;
    padding-right: 15px;
    .row-fb {
        margin-left: -15px;
        margin-right: -15px;
    }
    .inner {
        padding-left: 15px;
        padding-right: 15px;
    }
    .ads-item {
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        color: ${configGlobal.colorTitle};
        padding: 160px;
        position: relative;
        &__inner {
            background-color: white;
            padding: 25px 35px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%)
        }
    }
`;