import React from 'react'
import styled from 'styled-components'
import Heading from '../../../core/Heading'
import Img from '../../../core/Img'
import CommentImg from '../../../../assets/images/comment.png'
import { configGlobal } from '../../../../assets/styledGlobal/configGlobal'
export default function BlogItem({title, author, desc, date, img, comments}) {
    return (
        <BlogItemWrap className="col-fb-4">
            <div className="inner">
                <Img src={img} alt={title} />
                <Heading tag="h6" text={title} className="text-upp mt-1 mb-1"/>
                <Heading tag="p" text={desc} className="mb-1" />
                <div className="meta d-flex jc-bw">
                    <p>by <span>{author}</span> on {date}</p>
                    <div className="comments">
                        <Img src={CommentImg} alt="Comment" /> {comments}
                    </div>
                </div>
            </div>
        </BlogItemWrap>
    )
}
const BlogItemWrap = styled.div`
    .inner {
        padding-left: 15px;
        padding-right: 15px;
    }

    & > img {
        width: 100%;
    }

    .comments {
        color: ${configGlobal.colorDesc}
    }
`;