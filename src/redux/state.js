import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import dialogsReducer from "./dialogs-reducer"

let store = {
    _state: {
        profile: {
            posts: [
                { id: 1, message: 'Hello', likesCount: 12 },
                { id: 2, message: 'Goodbay', likesCount: 12 },
            ],
            newPostText: 'artbotva',
            friends: [
                { id: 1, pic: 'https://bankoboev.ru/storage/avatar/bankoboev.ru-21535.jpg', name: "Vanyaadsssssssssssssssssssssssss dsadsad sdasdas" },
                { id: 2, pic: 'https://bankoboev.ru/storage/avatar/bankoboev.ru-21535.jpg', name: "Kolya" },
                { id: 3, pic: 'https://bankoboev.ru/storage/avatar/bankoboev.ru-21535.jpg', name: "Artyom" },
                { id: 4, pic: 'https://bankoboev.ru/storage/avatar/bankoboev.ru-21535.jpg', name: "Oleg" },
                { id: 5, pic: 'https://bankoboev.ru/storage/avatar/bankoboev.ru-21535.jpg', name: "Roman" },
            ],
        },
        messanger: {
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
            newMessageText: 'Input text',
        },
        siderbar: {}
    },
    _callSubscriber() {
        console.log("no subscriber");
    },
    setSubscriber(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        this._state.profile = profileReducer(this._state.profile, action);
        this._state.messanger = dialogsReducer(this._state.messanger, action);
        this._state.siderbar = sidebarReducer(this._state.siderbar);
        this._callSubscriber(this._state);
    }

}

export default store;