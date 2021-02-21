import React from 'react'
import styled from 'styled-components'
import StartEmptyImg from './../../assets/images/start-empty.svg'
import StartImg from './../../assets/images/start.svg'
import Img from './Img'
function Rating({withRating, ...props}) {
    return (
        <RatingWrap {...props}>
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
export default React.memo(Rating)
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