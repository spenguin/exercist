// Contact Form 
// called from HomePage.js and SiteFooter.js

//Import node components
import React, {Component} from 'react';

// Import SCSS
import "./ContactForm.scss";

export default class ContactForm extends Component {
    state = {
        message: ""
    }

    render() {

        return (
            <form className="contact-form form">

                <div className="form__message error">{this.state.message}</div>
                <h2 className="form__heading">Contact</h2>
                <label className="form__input--label">Your Name</label>
                <input type="text" className="form__input--text" placeholder="Your Name" name="name" required />
                <label className="form__input--label">Your Email Address</label>
                <input type="email" className="form__input--text" placeholder="Your Email Address" name="email" required />
                <label className="form__input--label">Your Message</label>
                <textarea name="message" className="form__textarea" placeholder="Your message" required />

                <div className="contact-form__action form__action--wrapper">
                    <button className="contact-form__action--send btn btn__submit">Send</button>
                    <button type="button" className="btn btn__cancel" onClick={() => this.props.changeModal('login')}>Return to Login</button>
                </div>
                
                <input type="checkbox" className="form__checkbox" name="remember" /><label className="form__checkbox--label" htmlFor="sendcopy">Send copy to your email?</label>
            </form>


        )
    }
}