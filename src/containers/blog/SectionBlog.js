import React from 'react'
import styled from 'styled-components'
import Heading from '../../components/core/Heading'
import BlogItem from '../../components/ui/home/SectionBlog/BlogItem'

export default function SectionBlog() {
    return (
        <SectionBlogWrap className="pt-5 pb-5">
            <div className="heading-wrap text-center">
                <Heading tag="h2" text="Blog" />
                <Heading tag="p" text="Latest posts from blog" className="text-upp mt-1" />
            </div>
            <div className="item-wrap">
                <BlogItem />
            </div>
        </SectionBlogWrap>
    )
}
const SectionBlogWrap = styled.section`

`;