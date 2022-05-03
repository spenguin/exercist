// Forgotten Form component
// called from HomePage.js


//Import node components
import React, {Component} from 'react';
// import { Link } from "react-router-dom"; FIX

// Import Utility function
import {findUser} from "../../utilities/DataUtils/DataUtils";
import { sendEmail } from '../../utilities/EmailUtils/EmailUtils';

// Import SCSS
import "./ForgottenForm.scss";

export default class Login extends Component {
    state = {
        message: ""
    }


    /**
     * Checks form submit then Validates the entry
     * @param (str) name
     * @returns (bool)
     */
     submit = (e) => {
        e.preventDefault(); 
        if( !e.target.login.value.length )
        {
            this.setState({
                message: "Username or Email are required"
            });
        } 
        else
        {
            const _res = findUser( e.target.login.value );
            if( _res )  // Only fires if user has been found
            {
                sendEmail( _res, 'forgottenEmail' );
            }
            else
            {
                console.log( "Login not found" );
            }
            this.setState({
                message: "If your login was found, an email to reset the password will be sent"
            });
        }   
    }

    render() {
        return( 
            <form className="forgotten-form form" onSubmit={this.submit}>

                <div className="form__message error">{this.state.message}</div>
                <h2 className="form__heading">Forgotten Login</h2>
                <p className="form__text">If your Login Name or Email Address is registered, you will receive an email to reset your password</p>
                <label className="form__input--label">Login Name or Email Address</label>
                <input type="text" className="form__input--text" placeholder="Login Name or Email Address" name="login" required />

                <div className="forgotten-form__action form__action--wrapper">
                    <button className="forgotten-form__action--login btn btn__submit">Submit</button>
                    <button type="button" className="btn btn__cancel" onClick={() => this.props.changeModal('contact')}>Need more help?</button>
                </div>
                <button type="button" className="btn btn__cancel" onClick={() => this.props.changeModal('login')}>Return to Login</button>
            </form>


        ); 
    }
}