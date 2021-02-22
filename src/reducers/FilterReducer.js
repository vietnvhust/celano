import {
    LOAD_PRODUCT,
    FILTER_PRODUCTS,
    LOAD_CATEGORIES,
    UPDATE_FILTERS
} from './ActionTypes'
const FilterReducer = (state, {type, payload}) => {
    switch (type) {
        case FILTER_PRODUCTS:
            const {all_products} = state
            const {category, color} = state.filters
            let products = [...all_products]
            if(category !== 'all'){
                products = products.filter((obj) =>
                    Object.values(obj).some((val) =>
                        val
                            .toString()
                            .toLowerCase()
                            .includes(category.toString().toLowerCase())
                    )
                );
            }
            if(color !== 'all'){
                products = products.filter((obj) =>
                    Object.values(obj).some((val) =>
                        val
                            .toString()
                            .toLowerCase()
                            .includes(color.toString().toLowerCase())
                    )
                );
            }
            return {...state, filtered_products: products}
        case LOAD_CATEGORIES:
            return {...state, all_categories: [...payload]}
        case LOAD_PRODUCT:
            return {...state, all_products: [...payload]}
        case UPDATE_FILTERS:
            const {name, value} = payload
            return {...state, filters: {...state.filters, [name]: value}}
        default:
            return {...state};
    }
}

export default FilterReducer