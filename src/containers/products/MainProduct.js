import React, {useContext} from 'react'
import ProductItem from '../../components/ui/products/MainProduct/ProductItem'
import { FilterContext } from '../../contexts/Filter.Context'
import Heading from "../../components/core/Heading";
export default function MainProducts() {
    const {data_products, page} = useContext(FilterContext)
    const products = data_products.length > 0 ? data_products[page] : []
    if( products.length >0  ){
        return (
            <div className="row-fb">
                {
                    products.map(({_id,name,price,image,colors,company,description,category,shipping,status,rating}, index) => <ProductItem key={index} id={_id} name={name} status={status} price={price} image={image} rating={rating} colors={colors} company={company} description={description} category={category} shipping={shipping} />)
                }
            </div>
        )
    }else {
        return (
            <div className="row-fb">
                <Heading tag={'p'} text={'Không có sản phẩm phù hợp'} />
            </div>
        )
    }
}