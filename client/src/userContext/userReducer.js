
export const userReducer = (state, action)=>{
    switch(action.type){
        case "loginStart":
            return{
                user: null,
                isFetching: true,
                error: false
            }
        case "loginSuccess":
            return{
                user: action.payload,
                isFetching: false,
                error: false
            }
        case "loginFailure":
            return{
                user: null,
                isFetching: false,
                error: true
            }
        case "logout":
            return{
                user: null,
                isFetching: false,
                error: false
            }
        default:
            return{
                ...state
            }
    }
}