import React, {useContext} from 'react'
import ProductItem from '../../components/ui/products/MainProduct/ProductItem'
import { FilterContext } from '../../contexts/Filter.Context'
import Heading from "../../components/core/Heading";
import PaginateItem from "../../components/ui/products/MainProduct/PaginateItem";
import Img from "../../components/core/Img";
import FirstImg from "../../assets/images/first.svg";
import PrevImg from "../../assets/images/prev.svg";
import NextImg from "../../assets/images/next.svg";
import LastImg from "../../assets/images/last.svg";
import styled from "styled-components";
import {configGlobal} from "../../assets/styledGlobal/configGlobal";
const numberProducts = 6
export default function MainProducts() {
    const { all_products } = useContext(FilterContext)
    const {filtered_products} = useContext(FilterContext)
    let totlaPage;
    let elm = []
    if(filtered_products.length < numberProducts) {
        totlaPage = 1
        elm.push(<PaginateItem key={totlaPage} index={totlaPage} />)
    }else {
        totlaPage = Math.ceil( filtered_products.length / numberProducts )
        for (let i = 1; i <= totlaPage; i++) {
            elm.push(<PaginateItem key={i} index={i} />)
        }
    }
    const prevPage = () => {

    }
    const nextPage = () => {

    }
    const handlePage = () => {

    }
    if( filtered_products.length < 1 ){
        return (
            <div className="row-fb">
                <Heading tag={'p'} text={'Không có sản phẩm phù hợp'} />
            </div>
        )
    }else {
        return (
            <>
                <div className="row-fb">
                    {
                        filtered_products.length > 0 && filtered_products.map(({_id,name,price,image,colors,company,description,category,shipping,status,rating}, index) => <ProductItem key={index} id={_id} name={name} status={status} price={price} image={image} rating={rating} colors={colors} company={company} description={description} category={category} shipping={shipping} />)
                    }
                </div>
                <PaginationWrap>
                    <button className='prev-btn' onClick={prevPage}>
                        <Img src={FirstImg} alt={"Prev"} />
                    </button>
                    <button className='prev-btn' onClick={prevPage}>
                        <Img src={PrevImg} alt={"Prev"} />
                    </button>
                    <ul className={'pagination d-flex jc-bw ai-center'}>
                        {elm}
                    </ul>
                    <button className='next-btn' onClick={nextPage}>
                        <Img src={NextImg} alt={"Next"} />
                    </button>
                    <button className='next-btn' onClick={nextPage}>
                        <Img src={LastImg} alt={"Next"} />
                    </button>
                </PaginationWrap>
            </>
        )
    }
}
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
    }
`;
