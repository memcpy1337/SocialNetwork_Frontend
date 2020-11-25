import { StaticRouter } from "react-router-dom";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
let initialState = {
    posts: [
        { id: 1, message: 'Hello', likesCount: 12 },
        { id: 2, message: 'Goodbay', likesCount: 12 },
    ],
    newPostText: 'artbotva',
    userProfile: {},
    friends: [
        { id: 1, pic: 'https://bankoboev.ru/storage/avatar/bankoboev.ru-21535.jpg', name: "Vanyaadsssssssssssssssssssssssss dsadsad sdasdas" },
        { id: 2, pic: 'https://bankoboev.ru/storage/avatar/bankoboev.ru-21535.jpg', name: "Kolya" },
        { id: 3, pic: 'https://bankoboev.ru/storage/avatar/bankoboev.ru-21535.jpg', name: "Artyom" },
        { id: 4, pic: 'https://bankoboev.ru/storage/avatar/bankoboev.ru-21535.jpg', name: "Oleg" },
        { id: 5, pic: 'https://bankoboev.ru/storage/avatar/bankoboev.ru-21535.jpg', name: "Roman" },
    ]
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost =
            {
                id: 3,
                message: state.newPostText,
                likesCount: 0
            }
            let newState = { ...state }
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
            let newState = { ...state }
            newState.userProfile = action.user
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
export default profileReducer;