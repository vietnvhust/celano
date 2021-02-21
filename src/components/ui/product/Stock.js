import React from 'react'

export default function Stock({stock, ...props}) {
    return (
        <div {...props} >
            <p>
                Availability: <span>{stock > 0 ? `In stock (${stock})` : 'Out of stock'}</span>
            </p>
        </div>
    )
}
