import React, {useContext} from 'react'
import ProductItem from '../../components/ui/products/MainProduct/ProductItem'
import { FilterContext } from '../../contexts/Filter.Context'
export default function MainProducts() {
    const { all_products } = useContext(FilterContext)
    return (
        <div className="row-fb">
            {
                all_products.length > 0 && all_products.map(({_id,name,price,image,colors,company,description,category,shipping,status,rating}, index) => <ProductItem key={index} id={_id} name={name} status={status} price={price} image={image} rating={rating} colors={colors} company={company} description={description} category={category} shipping={shipping} />)
            }
        </div>
    )
}
