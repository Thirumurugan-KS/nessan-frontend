import { getIndivProductReduce, getProductsReduce } from "./reducer/productsReducer";
import thunk from 'redux-thunk'
import { getLoginReduce } from "./reducer/loginReducer";

const { createStore , combineReducers ,applyMiddleware} = require("redux");


const { composeWithDevTools } = require('redux-devtools-extension')


const reducer = combineReducers({
    productsArray : getProductsReduce,
    productObject : getIndivProductReduce,
    userObject : getLoginReduce
})

const middlewareData = [thunk]

const initialState = {
    productsArray : {},
    productObject : {}
}

export const store = createStore(reducer,initialState, composeWithDevTools(applyMiddleware(...middlewareData)))