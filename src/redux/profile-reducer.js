import { StaticRouter } from "react-router-dom";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const IS_USER_FETCHING = 'IS-USER-FETCHING';
let initialState = {
    posts: [
        { id: 1, message: 'Hello', likesCount: 12 },
        { id: 2, message: 'Goodbay', likesCount: 12 },
    ],
    newPostText: 'artbotva',
    userProfile: {
        profile: {},
        isFetching: false
    },
    friends: [
        { id: 1, pic: 'https://bankoboev.ru/storage/avatar/bankoboev.ru-21535.jpg', name: "Vanyaadsssssssssssssssssssssssss dsadsad sdasdas" },
        { id: 2, pic: 'https://bankoboev.ru/storage/avatar/bankoboev.ru-21535.jpg', name: "Kolya" },
        { id: 3, pic: 'https://bankoboev.ru/storage/avatar/bankoboev.ru-21535.jpg', name: "Artyom" },
        { id: 4, pic: 'https://bankoboev.ru/storage/avatar/bankoboev.ru-21535.jpg', name: "Oleg" },
        { id: 5, pic: 'https://bankoboev.ru/storage/avatar/bankoboev.ru-21535.jpg', name: "Roman" },
    ]
}

const profileReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case ADD_POST: {
            let newPost =
            {
                id: 3,
                message: state.newPostText,
                likesCount: 0
            }
            newState = { ...state }
            newState.posts = [...state.posts]
            newState.posts.push(newPost);
            newState.newPostText = '';
            return newState;
        }
        case UPDATE_NEW_POST_TEXT:
            newState = { ...state }
            newState.newPostText = action.newPostText
            return newState;
        case SET_USER_PROFILE:
            newState = { ...state }
            newState.userProfile = { ...state.userProfile }
            newState.userProfile.profile = action.user
            return newState;
        case IS_USER_FETCHING:
            newState = { ...state }
            newState.userProfile = { ...state.userProfile }
            newState.userProfile.isFetching = action.fetching
            return newState;
    }
    return state;
}
export const postActionCreator = () => {
    return { type: ADD_POST };
}
export const updatePostTextActionAcreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newPostText: text
    }
}
export const setUserProfile = (user) => {
    debugger;
    return {
        type: SET_USER_PROFILE,
        user: user
    }
}
export const isUserProfileFethcing = (fetching) => {
    return {
        type: IS_USER_FETCHING,
        fetching
    }
}
export default profileReducer;