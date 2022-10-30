import { LOGIN_LOAD , LOGIN_SUCCESS , LOGIN_FAILURE } from "../constant/constant"

export const getLoginReduce = (state = {} , action) => {

    switch(action.type){
        case LOGIN_LOAD:
            return {loading : true}
        case LOGIN_SUCCESS:
            return {loading : false , login : action.payload}
        case LOGIN_FAILURE:
            return {loading : false , error : action.payload}
        default :
            return state
    }
}