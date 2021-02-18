import React from 'react'
import { useHover } from '../../core/hooks/useHover'
import Img from '../../core/Img'
export default function FooterBottomItem({icon, iconHover}) {
    const [refhover, ishover] = useHover();
    return (
        <li ref={refhover} className={ishover ? 'active': ''}>
            {
                ishover ? (<Img src={iconHover} alt="Social" />) : (<Img src={icon} alt="Social" />)
            }
        </li>
    )
}