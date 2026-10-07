import { CURRENTUSER, FAIL, LOGIN, LOGOUT, REGISTER } from "../ActionsTypes/UsersTypes"

const initialState = {
    user : {},
    errors : []
}

const UsersReducer=(state = initialState, action)=>{
    switch (action.type) {
        
        case REGISTER : 
        localStorage.setItem('token', action.payload.token)
        return {...state, user : action.payload.newUser, errors : []}

        case LOGIN :
        localStorage.setItem('token', action.payload.token)
        return {...state, user : action.payload.found, errors : []}

        case CURRENTUSER : return {...state, user : action.payload}

        case LOGOUT : 
        localStorage.removeItem('token')
        return {...state, user : {}, errors : []}

        case FAIL : return {...state, errors : action.payload}

        default: return state
    }
}

export default UsersReducer