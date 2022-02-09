// Login page
// called from HomePage.js

//Import node components
import React, {Component} from 'react';
import { Link } from "react-router-dom";

// Import SCSS
import "./LoginForm.scss";

export default class Login extends Component {
    state = {
        message: ""
    }


    render() {
        return( 
            <form className="login-form form">

                <div className="form__message error">{this.state.message}</div>
                <h2 className="form__heading">Login</h2>
                <label className="form__input--label">Login Name</label>
                <input type="text" className="form__input--text" placeholder="Login Name" />
                <label className="form__input--label">Password</label>
                <input type="password" className="form__input--text" />

                <div className="login-form__action form__action">
                    <button className="login-form__action--login btn btn__submit">Login</button>
                    {/* <button type="button" className="btn btn__cancel" onClick={() => this.formReset()}>Cancel</button>   */}
                    <Link to="/forgotten"><button type="button" className="btn btn__cancel">Forgotten password</button></Link>
                </div>
                <input type="checkbox" className="form__checkbox" name="remember" /><label className="form__checkbox--label" for="remember">Remember my Login</label>
            </form>


        ); 
    }
}