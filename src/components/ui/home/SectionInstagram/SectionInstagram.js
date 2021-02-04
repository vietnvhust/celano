import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import InstagramImg from '../../../../assets/images/instagram.svg'
import { configGlobal } from '../../../../assets/styledGlobal/configGlobal'
import Heading from '../../../core/Heading'
import Img from '../../../core/Img'
import InstagramImg1 from '../../../../assets/images/instagram1.jpg'
import InstagramImg2 from '../../../../assets/images/instagram2.jpg'
import InstagramImg3 from '../../../../assets/images/instagram3.jpg'
import InstagramImg4 from '../../../../assets/images/instagram4.jpg'
import InstagramImg5 from '../../../../assets/images/instagram5.jpg'
import InstagramImg6 from '../../../../assets/images/instagram6.jpg'
export default function SectionInstagram() {
    return (
        <SectionInstagramWrap>
            <div className="heading d-flex text-center jc-center">
                <Img src={InstagramImg} alt="Instagram" className="icon" />
                <Heading tag="h4" text="instagram" className="text-upp" />                
            </div>
            <Link to="/" className="text-center text-upp d-block mb-3" >Follow Us</Link>
            <div className="d-flex jc-sa">
                <div className="row-fb">
                    <div className="col-fb-2">
                        <Img src={InstagramImg1} alt="Instagram" />
                    </div>
                    <div className="col-fb-2">
                        <Img src={InstagramImg2} alt="Instagram" />
                    </div>
                    <div className="col-fb-2">
                        <Img src={InstagramImg3} alt="Instagram" />
                    </div>
                    <div className="col-fb-2">
                        <Img src={InstagramImg4} alt="Instagram" />
                    </div>
                    <div className="col-fb-2">
                        <Img src={InstagramImg5} alt="Instagram" />
                    </div>
                    <div className="col-fb-2">
                        <Img src={InstagramImg6} alt="Instagram" />
                    </div>
                </div>
            </div>
        </SectionInstagramWrap>
    )
}
const SectionInstagramWrap = styled.div`
    img.icon {
        margin-right: 0.5rem;
    }
    h4 {
        color: ${configGlobal.colorTitle}
    }
    a {
        text-decoration: underline;
        color: ${configGlobal.colorPrimary}
    }
`;