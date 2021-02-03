import React from 'react'
import ImgLogo from './../../../../assets/images/logo.svg'
import {Link} from 'react-router-dom'
import Img from './../../../core/Img'

export default function Logo() {
    return (
        <h1>
            <Link to="/" >
                <Img src={ImgLogo} alt="Logo" />
            </Link>
        </h1>
    )
}
