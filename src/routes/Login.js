import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../store/actions";
import { KeyCodeUtils, LanguageUtils } from "../utils";

import userIcon from '../../src/assets/images/user.svg';
import passIcon from '../../src/assets/images/pass.svg';
import './Login.scss';
import { FormattedMessage } from 'react-intl';
import adminService from '../services/adminService';

class Login extends Component {
    constructor(props) {
        super(props);
        this.btnLogin = React.createRef();
    }

    initialState = {
        username: '',
        password: '',
        loginError: ''
    }

    state = {
        ...this.initialState
    };

    refresh = () => {
        this.setState({
            ...this.initialState
        })
    }

    onUsernameChange = (e) => {
        this.setState({ username: e.target.value })
    }

    onPasswordChange = (e) => {
        this.setState({ password: e.target.value })
    }

    redirectToSystemPage = () => {
        const { navigate } = this.props;
        const redirectPath = '/system/user-manage';
        navigate(`${redirectPath}`);
    }

    processLogin = () => {
        const { username, password } = this.state;

        const { adminLoginSuccess, adminLoginFail } = this.props;
        let loginBody = {
            username: 'admin',
            password: '123456'
        }
        //sucess
        let adminInfo = {
            "tlid": "0",
            "tlfullname": "Administrator",
            "custype": "A",
            "accessToken": "eyJhbGciOiJIU"
        }

        adminLoginSuccess(adminInfo);
        this.refresh();
        this.redirectToSystemPage();
        try {
            adminService.login(loginBody)
        } catch (e) {
            console.log('error login : ', e)
        }

    }

    handlerKeyDown = (event) => {
        const keyCode = event.which || event.keyCode;
        if (keyCode === KeyCodeUtils.ENTER) {
            event.preventDefault();
            if (!this.btnLogin.current || this.btnLogin.current.disabled) return;
            this.btnLogin.current.click();
        }
    };

    componentDidMount() {
        document.addEventListener('keydown', this.handlerKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handlerKeyDown);
        // fix Warning: Can't perform a React state update on an unmounted component
        this.setState = (state, callback) => {
            return;
        };
    }

    render() {
        return (
            <div className="container">
            <div className="row mt-5">
                <div className="col-4">
    
                </div>
                <div className="col-4 border rounded p-4 mt-5">
                <h1 className="text-center font mt-2">Handmade By Me</h1><br/>
                    <div className="text-dark px-3">
                        <div className="from-group mb-3">
                            <label for="username" className="form-label font ">Email</label>
                            <input type="tel" className="form-control" name="username" id="username" aria-describedby="username" />
                        </div>
                        <div className="from-group mb-3">
                            <label for="password" className="form-label font">Mật khẩu</label>
                            <input type="password" className="form-control" name="password" id="password" />
                        </div>
                        <div className="from-group form-check mb-3">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label font" for="exampleCheck1">Ghi nhớ tôi</label>
                        </div>
                        <button type="submit" name="btn-login" className="btn btn-outline-dark mb-5 mt-3 float-right">Login</button>
                    </div>
                </div>
               
            </div>
            
        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        lang: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
