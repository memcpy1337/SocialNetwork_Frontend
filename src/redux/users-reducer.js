import { act } from "react-dom/test-utils";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_PAGE = 'SET_PAGE';
const SET_USER_COUNT = 'SET_USER_COUNT';
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';
let initialState = {
    users: [],
    pageSize: 1,
    totalUsersCount: 0,
    currentPage: 0,
    isFetching: true
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {            return {
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
        case SET_USERS: {            return {
                ...state, users: action.users
            }
        }
        case SET_PAGE: {
            return {
                ...state, currentPage: action.currentPage
            }
        }
        case SET_USER_COUNT: {
            return {
                ...state, totalUsersCount: action.userCount
            }
        }
        case TOOGLE_IS_FETCHING: {
            return {
                ...state, isFetching: action.isFetching
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
export const setCurrentPageAC = (currentPage) => {
    return {
        type: SET_PAGE,
        currentPage: currentPage
    }
}
export const setUserCountAC = (userCount) => {
    return {
        type: SET_USER_COUNT,
        userCount: userCount
    }
}
export const isFetchingAC = (isFetching) => {
    return {
        type: TOOGLE_IS_FETCHING,
        isFetching: isFetching
    }
}