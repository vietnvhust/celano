import {
    HOME_PRODUCT_WOMAN,
    HOME_PRODUCT_MAN,
    PRODUCTS,
    PRODUCT
} from './ActionTypes'
const ProductReducer = (state, {type, payload}) => {
    switch (type) {
        case PRODUCT:
            return {...state, product:payload}
        case PRODUCTS:
            return {...state, products:payload}
        case HOME_PRODUCT_WOMAN:
            const woman_products = payload.products
            return {...state, woman_products}
        case HOME_PRODUCT_MAN:
            const man_products = payload.products
            return {...state, man_products}
        default:
            return {...state};
    }
}

export default ProductReducer