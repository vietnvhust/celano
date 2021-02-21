import React, { useState, useEffect } from 'react'
import BigImg from '../../../assets/images/big_img.jpg'
import SmallImage1 from '../../../assets/images/1.jpg'
import SmallImage2 from '../../../assets/images/2.jpg'
import SmallImage3 from '../../../assets/images/3.jpg'
import SmallImage4 from '../../../assets/images/4.jpg'
import SmallImage5 from '../../../assets/images/5.jpg'
import styled from 'styled-components'
import Img from '../../core/Img'
import NextImg from '../../../assets/images/button_slider_down.svg'
import NextImgActive from '../../../assets/images/button_slider_down_active.svg'
import PrevImg from '../../../assets/images/button_slider_up.svg'
import PrevImgActive from '../../../assets/images/button_slider_up_active.svg'
import { configGlobal } from '../../../assets/styledGlobal/configGlobal'
export default function ProductGallery({images}) {
    const [indexSlider, setIndexSlider] = useState(0)
    const prevSlide = () => {
        const indexCurrent = indexSlider
        let prevIndex = indexCurrent - 1
        if(prevIndex < 0) {
            prevIndex = 0
        }
        setIndexSlider(prevIndex)
    }
    const nextSlide = () => {
        const indexCurrent = indexSlider
        let nextIndex = indexCurrent + 1
        if(nextIndex > images.length -1) {
            nextIndex = images.length -1
        }
        setIndexSlider(nextIndex)
    }
    return (
        <ProductGalleryWrap className="product_gallery d-flex">
            <div className="product_gallery__left">
                {
                    !!images && images.map((item, index) => <div key={index} className={`gallery_item ${ indexSlider === index ? "active" : '' }`}><Img src={item} onClick={() => setIndexSlider(index)} alt="gallery item" /></div>)
                }
                <div className="navigation d-flex jc-bw">
                    <button className='prev' onClick={prevSlide}>
                        <Img src={PrevImg} alt="prev" />
                    </button>
                    <button className='next' onClick={nextSlide}>
                        <Img src={NextImg} alt="next" />
                    </button>
                </div>
            </div>
            <div className="product_gallery__right">
                <Img src={!!images ? images[indexSlider] : ""} alt="gallery item" />
            </div>
        </ProductGalleryWrap>
    )
}
const ProductGalleryWrap = styled.div`
    .product_gallery {
        &__left {
            width: 80px;
            margin-right: 20px;
            .gallery_item {
                transition: ${configGlobal.transition};
                &:not(:last-child) {
                    margin-bottom: 20px;
                }
                &.active {
                    border: 2px solid ${configGlobal.colorPrimary};
                    transition: ${configGlobal.transition};
                }
            }
            button {
                width: 35px;
                height: 24px;
                background: #F4F4F4;
                border: 0;
                cursor: pointer;
            }
        }
    }
`;