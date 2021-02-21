import React from 'react'

export default function Sku({sku, ...props}) {
    return (
        <div {...props}>
            <p>
                SKU: <span>{sku}</span>
            </p>
        </div>
    )
}
