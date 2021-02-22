import React, { useContext } from 'react'
import Category from '../../components/ui/products/Category/Category'
import Color from '../../components/ui/products/Color/Color'
import ProductType from '../../components/ui/products/ProductType/ProductType'
import { FilterContext } from '../../contexts/Filter.Context'
import {getUniqueValues} from '../../ultis/helpers'
import BannerProduct from '../../assets/images/banner_product.jpg'
import Img from '../../components/core/Img'
export default function SidebarProduct() {
    const { all_products } = useContext(FilterContext)
    let colors = getUniqueValues(all_products, 'colors')
    return (
        <div>
            <Category className="mb-3" />
            <ProductType className="mb-3" />
            <Color className="mb-3" colors={colors} />
            <Img src={BannerProduct} alt="Banner Product" />
        </div>
    )
}