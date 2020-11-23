import React from 'react';
import { NavLink } from 'react-router-dom';
import { messageActonCreator, updateMessageTextActionCreator } from '../../redux/dialogs-reducer';
import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css';
import Message from './Messages/Messages';

const Dialogs = (props) => {

    let dialogsArr = props.data.dialogs.map(users => {
        return <DialogItem id={users.id} name={users.name} />
    });
    let elementRef = React.createRef();
    let addMessage = () => {
        props.addMessage();
    }
    let onMessageChange = () => {
        let text = elementRef.current.value;
        props.onMessageChange(text);
    }
    let messagesArr = props.data.messages.map((mess) => <Message message={mess.message} />);
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {
                    dialogsArr
                }
            </div>
            <div className={classes.messages}>
                {
                    <span>{messagesArr}</span>
                }
            </div>
            <div className={classes.inputMessage}>
                <textarea ref={elementRef} onChange={onMessageChange} value={props.data.newMessageText}></textarea>
                <button className={classes.button} onClick={addMessage}>Send</button>
            </div>
        </div>
    );
}
export default Dialogs;