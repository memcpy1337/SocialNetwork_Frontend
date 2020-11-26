import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
const Header = (props) => {
    debugger;
    const logRef = React.createRef();
    const passRef = React.createRef();
    let textChange = () => {
        let text = logRef.current.value;
        props.onLoginTextChanged(text);
    }
    let textPassChange = () => {
        let text = passRef.current.value;
        props.onPassTextChanged(text);
    }
    let onLogin = () => {
        props.onLogin();
    }
    return (
        <header className={classes.header}>
            <img src='https://pngimg.com/uploads/samsung_logo/samsung_logo_PNG9.png'></img>
            <div>
                {
                    !props.isAuth
                    ?
                    <div className={classes.loginBlock}>
                        <div className={classes.loginButton}>
                            <input value={props.logValue} ref={logRef} placeholder="Логин" onChange={textChange}></input>
                            <input value={props.passValue} ref={passRef} placeholder="Пароль" onChange={textPassChange}></input>
                            <button onClick={onLogin}>Войти</button>
                        </div>
                    </div>
                    :
                    <div className={classes.loginBlock}>
                        <div className={classes.loginButton}>
                            <span>Welcome: {props.login}</span>
                            <button onClick={onLogin}>Выйти</button>
                        </div>
                    </div>
                }
            </div>
        </header>
    );
}
export default Header;