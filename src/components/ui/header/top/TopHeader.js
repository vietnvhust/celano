import React, {useContext} from 'react'
import MapIcon from '../../../../assets/images/map.svg'
import PhoneIcon from '../../../../assets/images/phone1.svg'
import styled from 'styled-components'
import Img from "../../../core/Img";
import Heading from "../../../core/Heading";
import {UserContext} from "../../../../contexts/User.Context";
const TopHeader = () => {
    const {openLogin} = useContext(UserContext)
    return (
        <TopHeaderWrap>
            <div className="container">
                <div className="row-fb">
                    <div className="col-fb-6">
                        <div className="inner d-flex ai-center">
                            <div className="item d-flex ai-center">
                                <Img src={MapIcon} alt={'map'} />
                                <Heading tag={'p'} text={'10 Paterson St West Gladstone QLD 4680, Australia'} />
                            </div>
                            <div className="item d-flex ai-center">
                                <Img src={PhoneIcon} alt={'phone'} />
                                <Heading tag={'p'} text={'+566 4774 9940'} />
                            </div>
                        </div>
                    </div>
                    <div className="col-fb-6">
                        <Heading tag={'span'} text={'Sign In  or  Register'} onClick={openLogin} className={'float-right'} />
                    </div>
                </div>
            </div>
        </TopHeaderWrap>
    )
}

export default TopHeader
const TopHeaderWrap = styled.div`
    padding: 1rem 0;
    border-bottom: 1px solid #e9e9e9;
    img {
        margin-right: 10px;
    }
    .inner {
        .item {
            &:first-child {
                margin-right: 1rem;
                padding-right: 1rem;
                border-right: 1px solid #e9e9e9;
            }
        }
    }
    span {
        cursor: pointer;
    }
`;