import React from 'react'

export default function ProductMiddle({description, ...props}) {
    return (
        <div {...props}>
            {description}
        </div>
    )
}