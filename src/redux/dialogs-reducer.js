const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'Dima' },
        { id: 2, name: 'Kolya' },
        { id: 3, name: 'Vanya' },
        { id: 4, name: 'Artyom' },
    ],
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Privet' },
        { id: 3, message: 'Poka' },
    ],
    newMessageText: 'Input text'
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_MESSAGE_TEXT: {
            let newState = { ...state }
            newState.newMessageText = action.newMessageText;
            newState.newMessageText = action.newMessageText;
            return newState;
        }
        case ADD_MESSAGE: {
            let newMessage = {
                id: 4,
                message: state.newMessageText
            }
            let newState = {...state}
            newState.messages = [...state.messages]
            newState.messages.push(newMessage)
            newState.newMessageText = '';
            return newState;
        }
    }
    return state;
}
export const updateMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_MESSAGE_TEXT,
        newMessageText: text
    }
}
export const messageActonCreator = () => {
    return {
        type: ADD_MESSAGE,
    }
}
export default dialogsReducer;