import React from 'react'
import styled from 'styled-components'
import Heading from '../../core/Heading'
import PaymentImg from '../../../assets/images/payment.png'
import Img from '../../core/Img'
export default function FooterAbsolute() {
    return (
        <FooterAbsoluteWrap>
            <div className="container">
                <div className="row-fb">
                    <div className="col-fb-6">
                        <Heading tag="p" text="© Celano 2020. All Rights Reserve. Design by KatoThemes" />
                    </div>
                    <div className="col-fb-6">
                        <Img src={PaymentImg} alt="Payment" className="float-right" />
                    </div>
                </div>
            </div>
        </FooterAbsoluteWrap>
    )
}
const FooterAbsoluteWrap = styled.div`
    padding: 20px 0;
    background-color: #f8f8f8
`;