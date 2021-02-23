import React, {useContext} from 'react'
import Img from "../../../core/Img";
import FirstImg from "../../../../assets/images/first.svg";
import PrevImg from "../../../../assets/images/prev.svg";
import NextImg from "../../../../assets/images/next.svg";
import LastImg from "../../../../assets/images/last.svg";
import styled from "styled-components";
import {configGlobal} from "../../../../assets/styledGlobal/configGlobal";
import PaginationItem from "./PaginationItem";
import {FilterContext} from "../../../../contexts/Filter.Context";
const Pagination = () => {
    const {changeFirst, changeLast, changePrev, changeNext, data_products, page} = useContext(FilterContext)
    const totalPage = data_products.length
    return (
        <PaginationWrap>
            {
                page !== 0 && <button className='prev-btn' onClick={changeFirst}>
                    <Img src={FirstImg} alt={"Prev"} />
                </button>
            }
            {
                page !== 0 && <button className='prev-btn' onClick={changePrev}>
                    <Img src={PrevImg} alt={"Prev"} />
                </button>
            }

            <ul className={'pagination d-flex jc-bw ai-center'}>
                {
                    data_products.length > 0 && data_products.map((item, index) => <PaginationItem className={`${page === index ? 'active' : ''}`} key={index} page={index + 1} />)
                }
            </ul>
            {
                page + 1 !== totalPage && <button className='next-btn' onClick={changeNext}>
                    <Img src={NextImg} alt={"Next"} />
                </button>
            }
            {
                page + 1 !== totalPage && <button className='next-btn' onClick={changeLast}>
                    <Img src={LastImg} alt={"Next"} />
                </button>
            }

        </PaginationWrap>
    )
}
export default Pagination
const PaginationWrap = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     margin-top: 3rem;
     margin-bottom: 3rem;
    button {
        background: transparent;
        border: 1px solid ${configGlobal.colorBorder};
        width: 44px;
        height: 44px;
        border-radius: 4px;
        border-color: #D0D0D0;
        margin: 0 3px;
        cursor: pointer;
        color: #7F8B9C;
        &.active {
            border: 1px solid ${configGlobal.colorPrimary};
            background-color: ${configGlobal.colorPrimary};
            color: white;
        }
    }
`;
