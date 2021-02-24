import {
    ADD_TO_CART,
    OPEN_SIDEBAR,
    CLOSE_SIDEBAR
} from './ActionTypes'
const CartReducer = (state, {type, payload}) => {
    switch (type) {
        case OPEN_SIDEBAR:
            return {...state, isOpenSidebar: true}
        case CLOSE_SIDEBAR:
            return {...state, isOpenSidebar: false}
        case ADD_TO_CART:
            let carts = [...state.carts]
            const {id, quantity, color, price, product} = payload
            const productFind = carts.find(x => x.id === id)
            if( productFind ) {
                const index = carts.findIndex(x => x.id === id)
                const newQuantity = carts[index].quantity + quantity
                const newPrice = newQuantity * price
                const newProduct = {...productFind, quantity: newQuantity, price: newPrice, product}
                carts[index] = newProduct
            }else {
                carts.push({id, quantity, color, price, product})
            }
            localStorage.setItem('cart', JSON.stringify(carts))
            return {...state, carts:carts}
        default:
            return {...state};
    }
}

export default CartReducer