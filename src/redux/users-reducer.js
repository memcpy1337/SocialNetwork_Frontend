import { act } from "react-dom/test-utils";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
let initialState = {
    users: [
        { id: 1, photoUrl: "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg", followed: true, fullname: 'Dmitry', status: 'I am a boss', location: { city: 'Minsk', country: 'Belarus' } },
        { id: 2, photoUrl: "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg", followed: false, fullname: 'Artyom', status: 'Wheeling on ocean', location: { city: 'Moscow', country: 'Russia' } },
        { id: 3, photoUrl: "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg", followed: true, fullname: 'Alex', status: 'You reached a wrong number', location: { city: 'Vladivostok', country: 'Russia' } },
        { id: 4, photoUrl: "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg", followed: false, fullname: 'Misha', status: 'Hi whats up', location: { city: 'Orel', country: 'Russia' } },
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