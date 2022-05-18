// Parent Form component
// called from Exercise Page

// import nodes
import React, {useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


export default function ParentForm( {exerciseId, ...props} )
{
    //Set State variables
    const [message, changeMessage]                      = useState( '' );  
    
    // Set variables
    const title             = exerciseId ? 'Amend Parents' : 'Add Parents'; 
    const button            = exerciseId ? 'Amend' : 'Create';
    
    // Set functions
    const submit = (e) => {
        e.preventDefault();
    }

    /**
     * Reset the form then toggle the Modal
    */
     const formReset = () => { 
        // if( selectedExercise )
        // {
        //     window.location.replace( '/exercises' );
        // }
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
        );
        Array.from(document.querySelectorAll("textarea")).forEach(
            textarea => (textarea.value = "")
        );
        props.toggleModal();
    }     
    
    return (
        <form className="parent-form form" onSubmit={submit}>
            <div className="form__message error">{message}</div>
            <h2 className="form__heading">{title}</h2>


            <div className="form__action--wrapper">
                <button  className="btn btn__submit" >{button}</button>

                <button type="button" className="btn btn__cancel" onClick={() => formReset()}>Cancel</button>     
            </div>  
        </form>
    )    
}
