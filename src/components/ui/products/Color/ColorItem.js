import React,{useContext} from 'react'
import styled from 'styled-components';
// import Button from "../../../core/Button";
import {FilterContext} from "../../../../contexts/Filter.Context";

const ColorItem = ({color,index,handleSelectColor, ...props}) => {
    const {updateFilter} = useContext(FilterContext)
    const handleClickColor = (e) => {
        handleSelectColor(index)
        updateFilter(e)
    }
    if(color==="all") {
        return (
            <ColorItemWrap onClick={(e)=>handleClickColor(e)} type={"button"} data-color={"all"} name={'color'} text={color} {...props} >{color}</ColorItemWrap>
        )
    }else {
        return (
            <ColorItemWrap onClick={(e)=>handleClickColor(e)} type={"button"} data-color={color} name={'color'} text='' style={{backgroundColor: color}} {...props} ></ColorItemWrap>
        )
    }
}
export default React.memo(ColorItem)
const ColorItemWrap = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: inline-block;
    margin-right: 5px;
    border: 0;      
    &:hover {
        cursor: pointer;
    }
`;