import { PRODUCTS_LOAD , PRODUCTS_SUCCESS , PRODUCTS_FAILURE, PRODUCT_LOAD, PRODUCT_SUCCESS, PRODUCT_FAILURE } from "../constant/constant"

export const getProductsReduce = (state = {} , action) => {

    switch(action.type){
        case PRODUCTS_LOAD:
            return {loading : true}
        case PRODUCTS_SUCCESS:
            return {loading : false , products : action.payload}
        case PRODUCTS_FAILURE:
            return {loading : false , error : action.payload}
        default :
            return state
    }
}

export const getIndivProductReduce = (state = {} , action) => {

    switch(action.type){
        case PRODUCT_LOAD:
            return {loading : true}
        case PRODUCT_SUCCESS:
            return {loading : false , product : action.payload}
        case PRODUCT_FAILURE:
            return {loading : false , error : action.payload}
        default :
            return state
    }
}