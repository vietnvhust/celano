import React, {useReducer, createContext} from 'react'
import {OPEN_LOGIN, CLOSE_LOGIN} from '../reducers/ActionTypes'
import reducer from '../reducers/UserReducer'
const initialState = {
    isOpenLogin: false
}
export const UserContext = createContext()
function UserProvider({children}) {
    const [state, dispatch] = useReducer(reducer,initialState)
    const openLogin = () => {
        dispatch({type: OPEN_LOGIN})
    }
    const closeLogin = () => {
        dispatch({type: CLOSE_LOGIN})
    }
    return (
        <UserContext.Provider value={{...state, openLogin, closeLogin}}>
            {children}
        </UserContext.Provider>
    );
}
export default UserProvider