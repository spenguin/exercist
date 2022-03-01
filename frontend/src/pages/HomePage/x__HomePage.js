// Home Page 
// called from app.js

// import nodes
import React, {Component} from "react";
import { Link } from "react-router-dom";

import LoginForm from "../../components/LoginForm/LoginForm";
import ForgottenForm from "../../components/LoginForm/LoginForm";


export default class HomePage extends Component {
    state = {
        modalComponent: 'login'
    }


    components = {
        login: LoginForm,
        forgotten: ForgottenForm
    };    
    
    
    
    render() {

       const TagName = this.components[this.state.modalComponent];

       return <TagName />
    }

}