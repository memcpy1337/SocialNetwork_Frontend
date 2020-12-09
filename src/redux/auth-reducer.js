import { act } from "react-dom/test-utils";
import jwt_decode from "jwt-decode";

const SET_USER_DATA = 'SET-USER-DATA';
const PASS_TEXT_CHANGE = 'PASS-TEXT-CHANGE';
const LOGIN_TEXT_CHANGE = 'LOGIN-TEXT-CHANGE';
const ADD_AUTH_TOKEN = 'ADD-AUTH-TOKEN';

let initialState = {
    bearer: null,
    userId: null,
    login: null,
    isAuth: false,
    passText: '',
    logText: '',
    isFetching: true
}

const authReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_USER_DATA: {
            newState = { ...state, ...action.user };
            debugger;
            return newState;
        }
        case LOGIN_TEXT_CHANGE: {
            newState = { ...state, logText: action.text };
            return newState;
        }
        case PASS_TEXT_CHANGE: {
            newState = { ...state, passText: action.text };
            return newState;
        }
        case ADD_AUTH_TOKEN: {
            newState = {
                ...state,
                bearer: action.token,
                isAuth: true
            };
            localStorage.setItem('token', action.token);
            return newState;
        }
        default:
            return state;
    }
}
export default authReducer;

export const setUserAC = (user) => {
    return {
        type: SET_USER_DATA,
        user: {
            userId: user.id,
            login: user.username,
            isAuth: user.isAuth
        }
    }
}
export const textLogin = (text) => {
    return {
        type: LOGIN_TEXT_CHANGE,
        text
    }
}
export const textPass = (text) => {
    return {
        type: PASS_TEXT_CHANGE,
        text
    }
}
export const addAuthTokenAC = (token) => {
    return {
        type: ADD_AUTH_TOKEN,
        token
    }
}


