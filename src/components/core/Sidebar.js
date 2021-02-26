import React, {useContext} from 'react'
import styled from 'styled-components'
import CloseImg from '../../assets/images/close.svg'
import Img from "./Img";
import {CartContext} from "../../contexts/Cart.Context";
// import CartImg from "../../assets/images/cart.svg";
// import {configGlobal} from "../../assets/styledGlobal/configGlobal";
const Sidebar = ({children}) => {
    const {isOpenSidebar, closeSidebar} = useContext(CartContext)
    return (
        <SidebarWrap>
            <div className={`inner sidebar-right sidebar-animate ${isOpenSidebar ? 'sidebar-open': ''}`}>
                <div className="content">
                    <button onClick={closeSidebar} className={''} type={'button'}><Img className={'close-sidebar'} src={CloseImg} alt={'Close'} /></button>
                    {children}
                </div>
            </div>
        </SidebarWrap>
    )
}

export default Sidebar
const SidebarWrap = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    .inner {
        position: relative;
        width: 100%;
        height: 100%;
        background-color: #ffffff;    
        z-index: 1000;
        box-shadow: -2px 4px 6px 0px rgb(0 0 0 / 5%);
        .content {
            padding: 0 20px;
        }
        &.sidebar-animate {
            -webkit-transition: -webkit-transform 300ms ease;
            -moz-transition: -moz-transform 300ms ease;
            transition: transform 300ms ease;
        }
        &.sidebar-right {
            -webkit-transform: translate3d(100%,0,0);
            -moz-transform: translate3d(100%,0,0);
            transform: translate3d(100%,0,0);
        }
        &.sidebar-right.sidebar-open {
            -webkit-transform: translate3d(0,0,0);
            transform: translate3d(0,0,0);
            -moz-transform: none;
        }
        img.close-sidebar {
            position: absolute;
            top: 25px;
            left: 25px;
            width: 20px;
            height: 20px;
            cursor: pointer;
        }
        button {
            border: 0;
            background-color: transparent;
            cursor: pointer;    
        }
    }
`;