export const LoginStart = ()=>{
    return ({type: "loginStart"})
}
export const LoginSuccess = (user)=>{
    return ({
        type: "loginSuccess",
        payload: user
    })
}
export const LoginFailure = ()=>{
    return ({type: "loginFailure"})
}
export const Logout = ()=>{
    return ({type: "logout"})
}