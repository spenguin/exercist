// Login page
// called from HomePage.js

//Import node components
import React, {Component} from 'react';

// Import SCSS
// import "./Login.scss";

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
                <input type="text" className="form__input--text" />
                <label className="form__input--label">Password</label>
                <input type="password" className="form__input--text" />


                <button className="btn btn__submit">Login</button>
                {/* <button type="button" className="btn btn__cancel" onClick={() => this.formReset()}>Cancel</button>   */}
                <button type="button" className="btn btn__cancel">Forgotten password</button>
            </form>


        ); 
    }
}