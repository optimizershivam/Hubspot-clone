import axios from "axios";
import * as types from "./actionType"

export const register=(payload)=>(dispatch)=>{
    dispatch({type:types.REGISTER_REQUEST})
    return axios.post("https://masai-api-mocker.herokuapp.com/auth/register",payload).then((r)=>dispatch({type:types.REGISTER_SUCCESS,payload:r.data}) 
    // return types.REGISTER_SUCCESS
)
.catch((e)=>dispatch({type:types.REGISTER_FAILURE,payload:e})
// return types.REGISTER_FAILURE
)
}

export const login=(params)=>(dispatch)=>{
    dispatch({type:types.LOGIN_REQUEST})
    return axios.post("https://masai-api-mocker.herokuapp.com/auth/login",params).then((r)=>dispatch({type:types.LOGIN_SUCCESS,payload:r.data.token})
    // return types.LOGIN_SUCCESS
).catch((e)=>dispatch({type:types.LOGIN_FAILURE,payload:e})
// return types.LOGIN_FAILURE
)
}