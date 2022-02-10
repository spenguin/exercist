// Login page
// called from HomePage.js

//Import node components
import React, {Component} from 'react';
// import { Link } from "react-router-dom"; FIX

// Import SCSS
import "./LoginForm.scss";

export default class LoginForm extends Component {
    state = {
        message: ""
    }


    render() {
        return( 
            <form className="login-form form">

                <div className="form__message error">{this.state.message}</div>
                <h2 className="form__heading">Login</h2>
                <label className="form__input--label">Login Name</label>
                <input type="text" className="form__input--text" name="username" placeholder="Login Name" />
                <label className="form__input--label">Password</label>
                <input type="password" className="form__input--text" name="password" />

                <div className="login-form__action form__action">
                    <button className="login-form__action--login btn btn__submit">Login</button>
                    {/* <button type="button" className="btn btn__cancel" onClick={() => this.formReset()}>Cancel</button>   */}
                    <button type="button" className="btn btn__cancel" onClick={() => this.props.changeModal('forgotten')}>Forgotten password</button>
                </div>
                <input type="checkbox" className="form__checkbox" name="remember" /><label className="form__checkbox--label" htmlFor="remember">Remember my Login</label>
            </form>


        ); 
    }
}