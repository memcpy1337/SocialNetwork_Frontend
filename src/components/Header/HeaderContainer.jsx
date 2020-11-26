import React from 'react';
import { connect } from 'react-redux';
import * as Axios from 'axios'
import { addAuthTokenAC, textLogin, textPass } from '../../redux/auth-reducer';
import { onLogin } from '../../api/api';
const { default: Header } = require("./Header");

class HeaderContainer extends React.Component {

    onLoginButton() {
        onLogin(this.props.logValue, this.props.passValue).then(
            result => this.props.authTokenAdd(result),
            error => alert(error)
        )
    };

    onLoginTextChanged(text) {
        this.props.textLoginChanged(text);
    }
    onPassTextChanged(text) {
        this.props.textPassChanged(text);
    }
    render() {
        return <Header {...this.props} onLogin={this.onLoginButton.bind(this)} onLoginTextChanged={this.onLoginTextChanged.bind(this)} onPassTextChanged={this.onPassTextChanged.bind(this)} />
    }
}

let matStateToProps = (state) => {
    return {
        logValue: state.auth.logText,
        passValue: state.auth.passText,
        bearer: state.auth.bearer,
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}
let matDispatchToProps = (dispatch) => {
    return {
        textLoginChanged: (text) => {
            dispatch(textLogin(text));
        },
        textPassChanged: (text) => {
            dispatch(textPass(text));
        },
        authTokenAdd: (token) => {
            dispatch(addAuthTokenAC(token));
        }

    }
}

export default connect(matStateToProps, matDispatchToProps)(HeaderContainer);