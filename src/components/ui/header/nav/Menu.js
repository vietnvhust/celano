import React from 'react'
import styled from 'styled-components'
import MenuItem from './MenuItem'
export default function Menu() {
    const menuItems = [
        {
            href: "/",
            text: "Home"
        },
        {
            href: "/about",
            text: "About"
        },
        {
            href: "/faq",
            text: "Faq"
        },
        {
            href: "/products",
            text: "Products"
        }
    ]
    return (
        <nav>
            <UlWrap className="menu d-flex ai-center">
                {
                    menuItems.map(({href, text}, index) => <MenuItem key={index} href={href} text={text} />)
                }
            </UlWrap>
        </nav>
    )
}
const UlWrap = styled.ul`

`;