import { CURRENTUSER, FAIL, LOGIN, LOGOUT, REGISTER } from "../ActionsTypes/UsersTypes"
import axios from 'axios'
export const register=(cordUser, navigate)=>async(dispatch)=>{
    try {
        const res = await axios.post('/api/user/SignUp', cordUser)

        dispatch(
            {
                type : REGISTER,
                payload : res.data
            }
        )

        navigate('/Profile')
    } catch (error) {
        dispatch(
            {
                type: FAIL,
                payload : error.response.data.errors
            }
        )
    }
}


export const login=(cordUser, navigate)=>async(dispatch)=>{
    try {
        const res = await axios.post('/api/user/SignIn', cordUser)

        dispatch(
            {
                type : LOGIN,
                payload : res.data
            }
        )

        navigate('/Profile')
    } catch (error) {
         dispatch(
            {
                type: FAIL,
                payload : error.response.data.errors
            }
        )
    }
}

export const currentUser=()=>async(dispatch)=>{
    try {

        const config = {
            headers : {
                Authorization : localStorage.getItem('token')
            }
        }

        const res = await axios.get('/api/user/CurrentUser', config)

        dispatch(
            {
                type : CURRENTUSER,
                payload : res.data
            }
        )



    } catch (error) {
         dispatch(
            {
                type: FAIL,
                payload : error.response.data.errors
            }
        )
    }
}


export const logout=()=>{
    return(
        {
            type : LOGOUT
        }
    )
}