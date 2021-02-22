import React from 'react'
const PaginateItem = ({index}) => {
    return (
        <li>
            <button type={'button'}>{index}</button>
        </li>
    )
}
export default PaginateItem