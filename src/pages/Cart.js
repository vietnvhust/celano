import React from 'react'
import Breadcrumb from "../components/core/Breadcrumb";
import styled from 'styled-components'
import Heading from "../components/core/Heading";
import Img from "../components/core/Img";
import AboutImg from "../assets/images/about.jpg";
import SectionEndHome from "../components/ui/home/SectionEndHome/SectionEndHome";
import Divider from "../components/core/Divider";
import CartContainer from "../containers/cart/CartContainer";
const itemsCart = [
    {
        href: "/cart",
        text: "Cart"
    }
]
export default function Cart() {
    return (
        <CartWrap>
            <Breadcrumb items={itemsCart} className="breadcrumb mb-4" />
            <div className="container text-center">
                <Heading tag="h1" text="Cart" className="mb-2" />
            </div>
            <CartContainer/>
            <div className="container mb-3 mt-3">
                <SectionEndHome />
                <Divider className="pt-2 pb-1" colorBorder="#f0f0f0" />
            </div>
        </CartWrap>
    )
}
const CartWrap = styled.div`
    
`;