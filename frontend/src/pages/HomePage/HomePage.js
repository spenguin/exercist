// Home Page 
// called from app.js

// import nodes
import React, {useState} from "react";
import { Link } from "react-router-dom";

// import components
import Modal from "../../components/Modal/Modal";
import LoginForm from "../../components/LoginForm/LoginForm";
import ForgottenForm from "../../components/ForgottenForm/ForgottenForm";
import ContactForm from "../../components/ContactForm/ContactForm";

// SCSS
import "../HomePage/HomePage.scss";


export default function HomePage() {
    
    // Set State vars
    const [displayModal, changeModal]           = useState( window.sessionStorage.getItem( 'isLoggedIn' ) ? false : window.sessionStorage.getItem( 'isLoggedIn' ) );
    const [modalComponent, changeModalComponent]= useState( 'login' );

    // Set variables
    const components = {
        login: LoginForm,
        forgotten: ForgottenForm,
        contact: ContactForm        
    } 
    const CurrentComponent = components[modalComponent]; 
    
    // Set functions
    const toggleModal = () => { 
        changeModal( !displayModal );
    } 

    const handleChangeComponent = (page) => {
        changeModal( true );
        setTimeout(() =>{
            changeModalComponent(page);
            changeModal( false );
        }, 1000 );
    }  

    return (
        <section className="home site-main">

        <Modal isActive={displayModal} >
            <CurrentComponent changeModal={handleChangeComponent} toggleModal={toggleModal} />
        </Modal>
        <div className="home-wrapper site-wrapper max-wrapper">
        {(() => {
            if( window.sessionStorage.getItem("isLoggedIn") ) 
            {                    
                return( 
                    <>
                        <Link to="/create" className="home__link btn btn__nav btn__cta">Create an Exercise Class</Link>
                        <Link to="/exercises" className="home__link btn btn__nav">Create or Edit Exercises</Link>
                        {/* <Link to="/categories" className="home__link btn btn__nav">Create or Edit Categories</Link> */}
                    </>
                );
            }
            else
            {
                return(
                    <p>Explanation of Exercist</p>
                )
            }
        })()}                        
        </div>
    </section>
    )
}