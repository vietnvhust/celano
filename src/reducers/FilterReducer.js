import {
    LOAD_PRODUCT
} from './ActionTypes'
const FilterReducer = (state, {type, payload}) => {
    switch (type) {
        case LOAD_PRODUCT:
            return {...state, all_products: [...payload]}
        default:
            return {...state};
    }
}

export default FilterReducer