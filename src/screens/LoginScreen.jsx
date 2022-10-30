import { Button } from 'bootstrap';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { getLoginAction } from '../action/loginAction'
import LoadingComponent from '../components/LoadingComponent';


const LoginScreen = () => {

  const dispatch = useDispatch();

  let userObject = useSelector(state => state.userObject);

  let {loading , error , login } = userObject;

    useEffect(()=>{
      if(!login){
      dispatch(getLoginAction());
      }
    } , [])

  return (
    <div className='login-page'>
    {
      loading ? <LoadingComponent/>
    : error ? "Error occured" 
    : login ? 
    <>
    <Link to="/product/add"><span style={{"color" : "blue"}}>Add product</span></Link>
    <br></br>
    <Link to="/product/delete"><span style={{"color" : "blue"}}>Delete product</span></Link>
    </> : "" 
    }
    </div>
    
  )
}

export default LoginScreen
