import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';

export const LoginPage = ({startLogin}) => (
    <div className="login-container">
        <div className="login-header-container">
            <div className="login-header">Personal Planner</div>
        </div>

        <div className="login-box-layout__box">
            <h1 className="login-box-layout__title">Welcome!</h1>
            <p>Access your planner using your Google account</p>
            <button className="login-button" onClick={startLogin}>Login</button>
        </div>
    </div>
);

const mapDispatchToProps = dispatch => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);