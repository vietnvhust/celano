import React from 'react'
import styled from 'styled-components'
import Button from '../../../core/Button';
import Heading from '../../../core/Heading';
import IconText from '../../../core/IconText';
import Img from '../../../core/Img';
import ManImg from './../../../../assets/images/men.jpg'
export default function SectionManAside() {
    return (
        <SectionManAsideWrap className="col-fb-4">
            <Heading tag="h3" className="text-left text-capitalize" text="Man" />
            <Button className="btn btn-primary smaller text-uppercase mb-2" text="Popular products" />
            <Img src={ManImg} alt="Women" className="mb-2" />
            <div className="row-fb">
                <div className="col-fb-6">
                    <IconText tag='p' text="Jean" />
                    <IconText tag='p' text="Shirt" className="mt-1 mb-1" />
                    <IconText tag='p' text="Dress" />
                </div>
                <div className="col-fb-6">
                    <IconText tag='p' text="Glass" />
                    <IconText tag='p' text="Shoes" className="mt-1 mb-1" />
                    <IconText tag='p' text="Accessories" />
                </div>
            </div>
            <Button className="btn btn-secondary text-uppercase mt-2 w-100" text="view all" />
        </SectionManAsideWrap>
    )
}
const SectionManAsideWrap = styled.div`
    h3 {
        margin-bottom: 0.5rem;
    }
    .btn {
        font-size: 14px;
    }
`;