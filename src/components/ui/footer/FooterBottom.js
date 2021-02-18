import React from 'react'
import styled from 'styled-components'
import Heading from '../../core/Heading'
import LocationImg from '../../../assets/images/location.svg'
import PhoneImg from '../../../assets/images/phone.svg'
import EmailImg from '../../../assets/images/email.svg'
import Img from '../../core/Img'
import { configGlobal } from '../../../assets/styledGlobal/configGlobal'
import Logo from '../../../assets/images/logo.svg'
import FacebookIcon from '../../../assets/images/facebook-f.svg'
import FacebookHoverIcon from '../../../assets/images/facebook-f-hover.svg'
import InstagramIcon from '../../../assets/images/instagram-f.svg'
import InstagramHoverIcon from '../../../assets/images/instagram-f-hover.svg'
import TwitterIcon from '../../../assets/images/twitter.svg'
import TwitterHoverIcon from '../../../assets/images/twitter-hover.svg'
import LinkedinIcon from '../../../assets/images/linkedin-in.svg'
import LinkedinHoverIcon from '../../../assets/images/linkedin-in-hover.svg'
import PinterestIcon from '../../../assets/images/pinterest-p.svg'
import PinterestHoverIcon from '../../../assets/images/pinterest-p-hover.svg'
import { useHover } from '../../core/hooks/useHover'
const ulItems = [
    {
        icon: LocationImg,
        text: "10 Paterson St West Gladstone QLD 4680, Australia"
    },
    {
        icon: PhoneImg,
        text: "+566 4774 9940"
    },
    {
        icon: EmailImg,
        text: "zalita@domain.com"
    }
]
const ulItems2 = [
    {
        text: "Help & FAQs"
    },
    {
        text: "Returns Policy"
    },
    {
        text: "Terms & Conditions"
    },
    {
        text: "Privacy Policy"
    }
]
const socialItems = [
    {
        icon: FacebookIcon,
        iconHover: FacebookHoverIcon
    },
    {
        icon: InstagramIcon,
        iconHover: InstagramHoverIcon
    },
    {
        icon: TwitterIcon,
        iconHover: TwitterHoverIcon
    },
    {
        icon: PinterestIcon,
        iconHover: PinterestHoverIcon
    },
    {
        icon: LinkedinIcon,
        iconHover: LinkedinHoverIcon
    }
]
export default function FooterBottom() {
    const [refhover, ishover] = useHover();
    return (
        <FooterBottomWrap className="mb-4">
            <div className="container">
                <div className="row-fb">
                    <div className="col-fb-4">
                        <Heading tag="h6" text="Contact us" className="text-upp mb-2" />
                        <ul className="info">
                            {
                                ulItems.length > 0 && ulItems.map(({icon, text}, index) => <li key={index}><Img src={icon} alt={text} /><span>{text}</span></li>)
                            }
                        </ul>
                    </div>
                    <div className="col-fb-4">
                        <FooterBottomCenterWrap className="text-center">
                            <Img src={Logo} alt="Logo Footer" className="mb-2" />
                            <ul className="socials d-flex ai-center jc-center">
                                {
                                    socialItems.length > 0 && socialItems.map(({icon, iconHover}, index) => 
                                        <li ref={refhover} className={ishover ? 'active': ''} key={index}>
                                            {
                                                ishover ? (<Img src={iconHover} alt="Social" />) : (<Img src={icon} alt="Social" />)
                                            }
                                        </li>
                                    )
                                }
                            </ul>
                        </FooterBottomCenterWrap>
                    </div>
                    <div className="col-fb-4">
                        <Heading tag="h6" text="Information" className="text-upp mb-2 text-right" />
                        <ul>
                            {
                                ulItems2.length > 0 && ulItems2.map(({text}, index) => <li className="text-right" key={index}><span>{text}</span></li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </FooterBottomWrap>
    )
}
const FooterBottomWrap = styled.div`
    li {
        line-height: 30px;
    }
    .info img {
        margin-right: 5px;
    }
    span {
        font-size: 14px;
        color: ${configGlobal.colorDesc}
    }
    .socials {
        li {
            width: 36px;
            height: 36px;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid #888888;
            margin: 0 5px;
        }
    }
`;
const FooterBottomCenterWrap = styled.div`

`;