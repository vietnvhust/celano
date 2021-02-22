import React from 'react'
import styled from 'styled-components'
import Button from '../../../core/Button'
import Heading from '../../../core/Heading'
import Input from '../../../core/Input'
import NewsletterImg from './../../../../assets/images/newsletter.jpg'
export default function SectionNewsletter() {
    return (
        <SectionNewsletterWrap style={{backgroundImage: `url(${NewsletterImg})`}}>
            <div className="newsletter">
                <div className="newsletter-inner text-center">
                    <Heading text="Sign Up For Our Newsletter" tag="h3"/>
                    <Heading className="mt-1 mb-2" text="It is a long established fact that a reader will be distracted by the readable content of a page." tag="p" />
                    <Input className="form-control w-100 text-center mb-2" placeholder="Your Email Address..." />
                    <Button text="Subscribe" className="btn btn-primary" />
                </div>
            </div>
        </SectionNewsletterWrap>
    )
}
const SectionNewsletterWrap = styled.section`
    padding: 10rem 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    position: relative;
    .newsletter-inner {
        max-width: 630px;
        padding: 5rem 3rem;
        margin: auto;
        background-color: #fff;
        p {
            max-width: 420px;
            margin-left: auto;
            margin-right: auto;
        }
    }
`;