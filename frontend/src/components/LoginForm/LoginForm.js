// Login page
// called from HomePage.js

//Import node components
import React, {Component} from 'react';
import axios from 'axios';
// import { Link } from "react-router-dom"; FIX

// Import Utility function
// import {validate} from "../../utilities/DataUtils/DataUtils";

// Import SCSS
import "./LoginForm.scss";

export default class LoginForm extends Component {
    constructor() {
        super();
        this.state = {
            message: "" // Need data messages
        }
        // this.handleInputChange = this.handleInputChange.bind(this);
        this.submit = this.submit.bind(this);
    }    

    /**
     * Checks form submit then Validates the entry
     * @param (str) name
     * @param (str) password
     * @param (str) remember login
     * @returns (bool)
     */
    submit = (e) => {
        e.preventDefault(); 
        if( !e.target.username.value.length && !e.target.password.value.length )
        {
            this.setState({
                message: "Username and Password are both required"
            });
        }
        else
        {   
            // const _res = async() => validate( e.target.username.value, e.target.password.value ); //console.log( 'res', _res );
            axios
            .post( "http://localhost:8080/users/validateLogin", {
                username: e.target.username.value,
                password: e.target.password.value 
            } )
            .then( response => {
                console.log( "response", response );
                const _res = response.data;

                if( response.status === 200 )
                {
                    window.sessionStorage.setItem("isLoggedIn", "true");
                    window.sessionStorage.setItem( "user", JSON.stringify( _res ) ); console.log( "user", JSON.parse( window.sessionStorage.getItem( "user" ) ) );
                    this.props.toggleModal();
                }
                else
                {
                    this.setState({
                        message: "Username or Password is not correct. Please try again"
                    })
                }  

                // )    
            
            // if( _res )
            //     {
            //         window.sessionStorage.setItem("isLoggedIn", "true");
            //         window.sessionStorage.setItem( "user", JSON.stringify( _res ) ); console.log( "user", JSON.parse( window.sessionStorage.getItem( "user" ) ) );
            //         this.props.toggleModal();
            //     }
            //     else
            //     {
            //         this.setState({
            //             message: "Username or Password is not correct. Please try again"
            //         })
            //     }


            })
            .catch( err => console.log( err ) );

        }
    }

    /**
     * Validate the username and password with the db
     * @returns {obj} userData or false
     */
    // validate = ( username, password ) =>
    // {
    //     axios
    //         .post( "http://localhost:8080/api/validate" )
    //         .then( response => {
    //             console.log( "response", response );
    //         })
    //         .catch( err => console.log( err ) );
    // }


    render() {
        return( 
            <form className="login-form form" onSubmit={this.submit}>

                <div className="form__message error">{this.state.message}</div>
                <h2 className="form__heading">Login</h2>
                <label className="form__input--label">Login Name</label>
                <input type="text" className="form__input--text" name="username" placeholder="Login Name" required />
                <label className="form__input--label">Password</label>
                <input type="password" className="form__input--text" name="password" required />

                <div className="login-form__action form__action">
                    <button className="login-form__action--login btn btn__submit">Login</button>
                    <button type="button" className="btn btn__cancel" onClick={() => this.props.changeModal('forgotten')}>Forgotten password</button>
                </div>
                <input type="checkbox" className="form__checkbox" name="remember" value="1" /><label className="form__checkbox--label" htmlFor="remember">Remember my Login</label>
            </form>


        ); 
    }
}