import React from 'react'
import styled from 'styled-components'
import Button from '../../../core/Button';
import Heading from '../../../core/Heading';
import Img from '../../../core/Img';
import WomenImg from './../../../../assets/images/women.jpg'
export default function SectionWomanLeft() {
    return (
        <SectionWomanLeftWrap className="col-fb-4">
            <Heading tag="h3" className="text-left text-capitalize" text="Women" />
            <Button tag="button" className="btn btn-primary text-uppercase mb-2" text="Popular products" />
            <Img src={WomenImg} alt="Women" />
        </SectionWomanLeftWrap>
    )
}
const SectionWomanLeftWrap = styled.div`
    h3 {
        margin-bottom: 0.5rem;
    }
    .btn {
        padding: 3px 10px;
        font-size: 14px;
    }
`;