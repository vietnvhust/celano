import {OPEN_LOGIN, CLOSE_LOGIN} from './ActionTypes'

const userReducer = (state, {type, payload}) => {
    switch (type) {
        case CLOSE_LOGIN:
            return {...state, isOpenLogin: false}
        case OPEN_LOGIN:
            return {...state, isOpenLogin: true}
        default:
            return {...state}
    }
}

export default userReducer