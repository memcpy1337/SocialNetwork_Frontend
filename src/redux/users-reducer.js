import { act } from "react-dom/test-utils";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
let initialState = {
    users: [
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            debugger;
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        }
        case SET_USERS: {
            return {
                ...state, users: [...state.users, ...action.users]
            }
        }
        default:
            return state;
    }
}
export default usersReducer;

export const followAC = (userId) => {
    return {
        type: FOLLOW,
        userId: userId
    }
}
export const unfollowAC = (userId) => {
    return {
        type: UNFOLLOW,
        userId: userId
    }
}
export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users: users
    }
}