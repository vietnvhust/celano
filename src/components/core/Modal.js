import React, {useContext} from "react";
import styled from 'styled-components'
import CloseImg from '../../assets/images/close.svg'
import Img from "./Img";
import {UserContext} from "../../contexts/User.Context";

function Modal({children}) {
    const {isOpenLogin, closeLogin} = useContext(UserContext)
    return (
        <ModalWrap>
            <div id="open-modal" className={`modal-window ${isOpenLogin ? 'modal-open' : ''}`}>
                <div className="inner">
                    <div className="content">
                        <button onClick={closeLogin} className={''} type={'button'}>
                            <Img className={'close-modal'} src={CloseImg} alt={'Close'}/>
                        </button>
                    </div>
                    {children}
                </div>
            </div>
        </ModalWrap>
    )
}

export default Modal
const ModalWrap = styled.div`
    .modal-window {
        position: fixed;
        background-color: rgba(0, 0, 0, 0.25);
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 999;
        visibility: hidden;
        opacity: 0;
        pointer-events: none;
        transition: all 0.3s;
    }
    .modal-window.modal-open {
        visibility: visible;
        opacity: 1;
        pointer-events: auto;
    }
    .inner {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        .content {
            position: relative;
            width: 800px;
            height: 400px;
            background-color: #ffffff;    
            z-index: 1000;
            box-shadow: -2px 4px 6px 0px rgb(0 0 0 / 5%);
        }
        img.close-modal {
            position: absolute;
            top: 25px;
            right: 25px;
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