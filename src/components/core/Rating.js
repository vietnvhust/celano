import React from 'react'
import styled from 'styled-components'
import StartEmptyImg from './../../assets/images/start-empty.svg'
import StartImg from './../../assets/images/start.svg'
import Img from './Img'
export default function Rating({withRating}) {
    return (
        <RatingWrap className="rating-wrap mb-1">
            <div className="rating">
                <div className="start-empty">
                    <span><Img src={StartEmptyImg} alt="start" /></span>
                    <span><Img src={StartEmptyImg} alt="start" /></span>
                    <span><Img src={StartEmptyImg} alt="start" /></span>
                    <span><Img src={StartEmptyImg} alt="start" /></span>
                    <span><Img src={StartEmptyImg} alt="start" /></span>
                </div>
                <div className="start" style={{width: `${withRating}%`}}>
                    <span><Img src={StartImg} alt="start" /></span>
                    <span><Img src={StartImg} alt="start" /></span>
                    <span><Img src={StartImg} alt="start" /></span>
                    <span><Img src={StartImg} alt="start" /></span>
                    <span><Img src={StartImg} alt="start" /></span>
                </div>
            </div>
        </RatingWrap>
    )
}
const RatingWrap = styled.div`
    .rating {
        position: relative;
        width: 70px;
        height: 20px;
        .start {
            position: absolute;
            left: 0;
            top: 0;
            overflow: hidden;
            height: 20px;
        }
    }
`;