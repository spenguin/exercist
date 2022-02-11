// Forgotten Form component
// called from HomePage.js


//Import node components
import React, {Component} from 'react';
// import { Link } from "react-router-dom"; FIX

// Import SCSS
import "./ForgottenForm.scss";

export default class Login extends Component {
    state = {
        message: ""
    }


    render() {
        return( 
            <form className="forgotten-form form">

                <div className="form__message error">{this.state.message}</div>
                <h2 className="form__heading">Forgotten Login</h2>
                <p className="form__text">If your Login Name or Email Address is registered, you will receive an email to reset your password</p>
                <label className="form__input--label">Login Name or Email Address</label>
                <input type="text" className="form__input--text" placeholder="Login Name or Email Address" name="login" required />

                <div className="forgotten-form__action form__action">
                    <button className="forgotten-form__action--login btn btn__submit">Submit</button>
                    <button type="button" className="btn btn__cancel" onClick={() => this.props.changeModal('contact')}>Need more help?</button>
                </div>
                <button type="button" className="btn btn__cancel" onClick={() => this.props.changeModal('login')}>Return to Login</button>
            </form>


        ); 
    }
}