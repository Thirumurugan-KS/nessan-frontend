import axios from "axios";
import { PRODUCTS_LOAD , PRODUCTS_SUCCESS , PRODUCTS_FAILURE, PRODUCT_LOAD, PRODUCT_SUCCESS, PRODUCT_FAILURE } from "../constant/constant";

export const getProductsAction = () => async(dispatch) => {
    try {
        dispatch({ type : PRODUCTS_LOAD})

        let {data} = await axios.get("https://nessan-backend.onrender.com/");

        dispatch({ type : PRODUCTS_SUCCESS , payload : data})

    } catch (error) {
        dispatch({ type : PRODUCTS_FAILURE , payload : "Error occured"})        
    }

}


export const getIndivProductAction = (id) => async(dispatch) => {
    try {
        dispatch({ type : PRODUCT_LOAD})

        let {data} = await axios.get(`https://nessan-backend.onrender.com/product/${id}`);

        dispatch({ type : PRODUCT_SUCCESS , payload : data})

    } catch (error) {
        dispatch({ type : PRODUCT_FAILURE , payload : "Error occured"})        
    }

}