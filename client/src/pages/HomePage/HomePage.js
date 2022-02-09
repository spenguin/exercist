// Home Page 
// called from app.js

// import nodes
import React, {Component} from "react";
import { Link } from "react-router-dom";

// import components
import Modal from "../../components/Modal/Modal";
import LoginForm from "../../components/LoginForm/LoginForm";
import ForgottenForm from "../../components/ForgottenForm/ForgottenForm";

// SCSS
import "../HomePage/HomePage.scss";


export default class HomePage extends Component {
    // constructor(props) {
    //     super(props);
        state = {
            displayModal: false,
            displayNav: false,
            modalComponent: "login",
            components: {
                login: LoginForm,
                forgotten: ForgottenForm
            }
        };
    //   }

    
    render() {
        const toggleModal = () => {
            this.setState( { displayModal: !this.state.displayModal } )
        }   

        const CurrentComponent = this.state.components[this.state.modalComponent];

        return (
            <section className="home site-main">

                <Modal isActive={this.state.displayModal} >
                    <CurrentComponent />
                </Modal>
                <div className="home-wrapper site-wrapper max-wrapper">
                {(() => {
                    if( this.state.displayNav ) 
                    {                    
                        return( 
                            <>
                                <Link to="/create" className="home__link btn btn__nav btn__cta">Create an Exercise Class</Link>
                                <Link to="/exercises" className="home__link btn btn__nav">Create or Edit Exercises</Link>
                                <Link to="/categories" className="home__link btn btn__nav">Create or Edit Categories</Link>
                            </>
                        );
                    }
                })()}                        
                </div>
            </section>
        );
    }
}