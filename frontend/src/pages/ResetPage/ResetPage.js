// Reset Page
// called from App.js

// import nodes
import React, {Component} from "react";
import { validateNonce, resetPassword } from "../../utilities/DataUtils/DataUtils";


export default class ResetPage extends Component {
    state = {
        message: "...We're confirming your reset code...",
        displayForm: false,
        userId: null
    }

    componentDidMount()
    {
        let _res;
        if( this.props.match.params.resetId && ( _res = validateNonce( this.props.match.params.resetId ) ) )
        {
            this.setState({
                displayForm: true,
                message: "",
                userId: _res['id']
            })
        }
        else
        {
            this.setState({
                message: "The reset code provided is either not valid or out of date"
            })
        }
    }

    submit = (e) => { 
        e.preventDefault();
        if( e.target.password.value.length && e.target.passconf.value.length && e.target.password.value === e.target.passconf.value )
        {
            resetPassword( this.state.userId, e.target.password.value );
            this.setState({
                message: "Password has been reset"
            });
        }
        else
        {
            this.setState({
                message: "New Password and password confirmation are both required and must match"
            });        
        }
    }

    render() {

        if( !this.state.displayForm )
        {
            return (
                <section className="reset site-main">
                    <p>{this.state.message}</p>
                </section>
            )
        }

        return (
            <section className="reset site-main">
                <form className="reset-form form" onSubmit={this.submit}>

                    <div className="form__message error">{this.state.message}</div>
                    <h2 className="form__heading">Reset Password</h2>
                    <label className="form__input--label">New Password</label>
                    <input type="password" className="form__input--text" placeholder="New Password" name="password" required />

                    <label className="form__input--label">New Password again</label>
                    <input type="password" className="form__input--text" placeholder="New Password again" name="passconf" required />                

                    <div className="forgotten-form__action form__action">
                        <button className="forgotten-form__action--login btn btn__submit">Submit</button>
                    </div>
                </form>
            </section>
        );
    }
}