import axios from "axios";
import { LOGIN_LOAD , LOGIN_SUCCESS , LOGIN_FAILURE } from "../constant/constant"

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { auth , provider } from "../utils/firebase";

export const getLoginAction = () => async(dispatch) => {
    dispatch({ type : LOGIN_LOAD});

    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);

    const user = result.user;

    dispatch({ type : LOGIN_SUCCESS , payload : user})
    // ...
  }).catch((error) => {

    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...

    dispatch({ type : LOGIN_FAILURE , payload : "Error occured"})
  });
}