import {
    LOAD_PRODUCT,
    FILTER_PRODUCTS,
    LOAD_CATEGORIES,
    UPDATE_FILTERS,
    CHANGE_PAGE,
    LOAD_PAGINATION,
    CHANGE_FIRST,
    CHANGE_LAST,
    CHANGE_NEXT,
    CHANGE_PREV
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
            const totalPageFilter = Math.ceil(products.length / state.limit)
            const newDatasFilter = Array.from({length:totalPageFilter}, (_, index) => {
                const startRecord = index * state.limit
                return [...products].slice(startRecord, startRecord + state.limit)
            })
            return {...state, filtered_products: products,total: totalPageFilter, data_products:newDatasFilter, page: 0 }
        case LOAD_CATEGORIES:
            return {...state, all_categories: [...payload]}
        case LOAD_PRODUCT:
            return {...state, all_products: [...payload], filtered_products: [...payload]}
        case UPDATE_FILTERS:
            const {name, value} = payload
            return {...state, filters: {...state.filters, [name]: value}}
        case LOAD_PAGINATION:
            const totalPage = Math.ceil(state.filtered_products.length / state.limit)
            const newDatas = Array.from({length:totalPage}, (_, index) => {
                const startRecord = index * state.limit
                return [...state.filtered_products].slice(startRecord, startRecord + state.limit)
            })
            return {...state, total: totalPage, data_products:newDatas }
        case CHANGE_PAGE:
            return {...state, page: payload - 1}
        case CHANGE_FIRST:
            return {...state, page: 0}
        case CHANGE_LAST:
            const totalPageLast = state.data_products.length
            return {...state, page: totalPageLast - 1}
        case CHANGE_NEXT:
            const totalPageNext = state.data_products.length
            let nextPage = state.page + 1
            if (nextPage > totalPageNext - 1) {
                nextPage = totalPageNext - 1
            }
            return {...state, page: nextPage}
        case CHANGE_PREV:
            let prevPage = state.page - 1
            if (prevPage < 0) {
                prevPage = 0
            }
            return {...state, page: prevPage}
        default:
            return {...state};
    }
}

export default FilterReducer