import { createContext, useEffect, useReducer } from "react"
import {userReducer} from './userReducer'

const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error: false
}

export const UserContext = createContext(initialState) 

const UserContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(userReducer, initialState)

    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(state.user))
    },[state.user])
    return(
        <UserContext.Provider value={
            {
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch
            }
        }>
            {children}
        </UserContext.Provider>    
    )
}
export default UserContextProvider