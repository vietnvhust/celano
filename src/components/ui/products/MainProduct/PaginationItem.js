import React, {useContext} from 'react'
import {FilterContext} from "../../../../contexts/Filter.Context";
import styled from 'styled-components'
const PaginationItem = ({page, ...props}) => {
    const {changePage} = useContext(FilterContext)
    return (
        <li>
            <button {...props} onClick={() => changePage(page)} type={'button'}>{page}</button>
        </li>
    )
}
export default PaginationItem
const PaginationItemWrap = styled.li`
    .active {
        
    }
`;