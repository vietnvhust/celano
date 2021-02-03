import React, { useContext } from 'react'
import styled from 'styled-components'
import Heading from '../../components/core/Heading'
import BlogItem from '../../components/ui/home/SectionBlog/BlogItem'
import { HomeContext } from '../../contexts/Home.context'
import Blog1 from '../../assets/images/blog1.jpg'
export default function SectionBlog() {
    const { posts } = useContext(HomeContext)
    return (
        <SectionBlogWrap className="pt-5 pb-5">
            <div className="container">
                <div className="heading-wrap text-center">
                    <Heading tag="h2" text="Blog" />
                    <Heading tag="p" text="Latest posts from blog" className="text-upp mt-1" />
                </div>
                <div className="item-wrap mt-3">
                    <div className="row-fb">
                        {
                            posts.length > 0 && posts.map(({title, author, desc, date, img, comment}, index) => <BlogItem key={index} title={title} author={author} desc={desc} date={date} img={Blog1} comment={comment} /> )
                        }              
                    </div>
                </div>
            </div>
        </SectionBlogWrap>
    )
}
const SectionBlogWrap = styled.section`

`;