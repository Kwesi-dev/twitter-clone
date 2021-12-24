import { LoginStart, LoginSuccess, LoginFailure, Logout } from "./userActions"
import {axiosInstance} from '../requests'

export const userLogin = async (dispatch, user)=>{
    dispatch(LoginStart())
    try{
        const res = await axiosInstance.post("/auth/login", user)
        dispatch(LoginSuccess(res.data))
    }catch{
        dispatch(LoginFailure())
    }
}

export const userLogout = (dispatch)=>{
    dispatch(Logout())
}

