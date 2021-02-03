import React from 'react'
import styled from 'styled-components'
import Heading from '../../../core/Heading'
import Img from '../../../core/Img'
export default function BlogItem({title, author, desc, date, img, comment}) {
    return (
        <div className="col-fb-4">
            <Img src={img} alt={title} />
            <Heading tag="h6" text={title} className="text-upp mt-1 mb-1"/>
            <Heading tag="p" text={desc} className="mb-1" />
            <div className="meta">
                <p>by <span>{author}</span> on {date}</p>
                <div>

                </div>
            </div>
        </div>
    )
}