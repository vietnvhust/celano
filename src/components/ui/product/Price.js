import React from 'react'
import {formatPrice} from '../../../ultis/helpers'
export default function Price({price, ...props}) {
    return (
        <div {...props}><span className="regular_price">{formatPrice(price)}</span></div>
    )
}
