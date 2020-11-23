import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { messageActonCreator, updateMessageTextActionCreator } from '../../redux/dialogs-reducer';
import DialogItem from './DialogItem/DialogItem';
import Dialogs from './Dialogs';
import classes from './Dialogs.module.css';
import Message from './Messages/Messages';


let mapStateToProps = (state) => {
    return {
        data: state.messanger
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => { dispatch(messageActonCreator()) },
        onMessageChange: (text) => { dispatch(updateMessageTextActionCreator(text)) }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;