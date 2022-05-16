// Exercise Form component
// Called from ExercisesPage.js

// import nodes
import React, {useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// import components
import ExerciseMetaList from "./_ExerciseMetaList";
import ExercisesList from "../ExercisesList/ExercisesList"



export default function ExerciseForm( {exerciseId, exerciseList, exerciseMetaList, handleChangeComponent, ...props} )
{   
    const params                                = useParams();
    
    // Set State variables
    const selectedExercise  = exerciseId ? exerciseList.filter( exercise => exercise.id === exerciseId ) : null;
    const [message, changeMessage]                      = useState( '' );
    const [descriptionValue, changeDescriptionValue]    = useState( exerciseId ? selectedExercise.description : '' );
    const [nameValue, changeNameValue]                  = useState( exerciseId ? selectedExercise.name : '' );
    const [selectedMetaIds, changeSelectedMetaIds]      = useState( exerciseId ? exerciseMetaData.filter( exercise => exercise.eId == exerciseId ) : ["2"] );

    // Set variables
    const title             = exerciseId ? 'Amend Exercise' : 'Create a new Exercise';
    const button            = exerciseId ? 'Amend' : 'Create';
    const requiredStr       = exerciseId ? '' : '(required)'; 
    const parentButton      = exerciseId ? 'Amend and Update Parents' : 'Create and Set Parents';
    const categoryWarning   = exerciseId ? 'Changing the Category will delete any selected Parent' : '';
    const metaList          = JSON.parse( window.sessionStorage.getItem( 'meta' ) );
    const parentMeta        = metaList.filter( meta => meta.parentId === '0' ); 
    const exerciseMetaData  = JSON.parse( window.sessionStorage.getItem( 'exercise_meta' ) );
    // const selectedMetaIds   = exerciseId ? exerciseMetaData.filter( exercise => exercise.eId == exerciseId ) : ["2"]; 
    


    // Set functions

    const submit = (path) => (e) => { 
        e.preventDefault();

        // console.log( 'path', path );
        // Reset the message
        changeMessage( '' );
        
        // Validate the name
        if( !nameValue )
        {
            changeMessage( "Exercise must have a name" ); 
        }
        else if( !isNameUnique( nameValue ) )
        {
            changeMessage( "Exercise name must be unique" );
        }
        else
        {   
            // Name is okay. 
            // Should probably sanitise both name and the description, though FIX
            // Is this an update or a create or both? FIX
            let str = "";

            // get meta parentIds
            // const metaValues = metaList.filter( meta => meta.parentId === '0' ).map( (p) => {
            //     str = "e.target.meta_" + p.id + ".value";
            //     return eval( str );
            // } );
            // console.log( 'metaValues', metaValues );

            if( params.exerciseId ) // Updating existing exercise data
            {

            }
            else
            {
                // If path is 0, just write form content to db and return to Exercise Page
                // Otherwise write data, then go to the set Parents exercises form in modal
                if( path )
                {
                    // console.log( 'add parents' );
                    // e.target.reset();
                    formReset();
                    handleChangeComponent( 'parents' );


                }
                else
                {
                    // console.log( 'don\'t add parents' );
                    // e.target.reset();
                    formReset();
                    props.toggleModal();                      
                }
                
                // axios
                //     .post( 'http://localhost:8080/exercises/create', {
                //         name: e.target.name.value,
                //         description: e.target.description.value,
                //         categoryId: e.target.categoryId.value,
                //         parentId: e.target.selected ? e.target.selected.value : null
                //     })
                //     .then( response => {
                //         //console.log( 'response', response.data );
                //         // return response
                //         //window.location.replace( `/exercises/` );
                //         props.setExercises();
                //         e.target.reset();
                //         formReset();
                //         props.toggleModal();                    
                //     })
                //     .catch( err => console.log( 'Error writing data', err ) );
            }
        }         
    }

    // Path based on Button selected
    const handleButtonClick = ( path ) => {
        console.log( 'button', path );
        submit();
    }

    /**
     * Confirm that the provided Name is unique
     * @param (str) Name
     * @returns (bool) false: name already exists
     */
    const isNameUnique = (testName) => {
        if( !exerciseList )
        {
            return true;
        }
        else
        {
            const name = exerciseList.filter( exercise => exercise.name === testName );
            return name.length === 0;
        }
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

    /**
     * handle changes to Exercise Description
     * @param {str} e 
     */
    const handleChangeDescriptionValue = (e) => {
        changeDescriptionValue( e.target.value );
    } 
    
    /**
     * handle changes to Exercise Name
     * @param {str} e 
     */
    const handleNameValue = (e) => { 
        changeNameValue( e.target.value );
    } 
    
    const passSelectedMetaIds = (meta) => {
        changeSelectedMetaIds( meta );
    }
    
    return (
        <form className="exercise-form form">
            <div className="form__message error">{message}</div>
            <h2 className="form__heading">{title}</h2>
            <label className="form__input--label">Exercise Name {requiredStr}</label>
            {(() => {
                if( exerciseId )
                {
                    return ( <p className="form__input--statement">{selectedExercise.name }</p> )
                }
                else
                {
                    return ( 
                        <>
                            <p className="form__note">Name must be unique</p> 
                            <input className="form__input--text" name="name" placeholder="Exercise name" onBlur={handleNameValue}/>
                        </>
                    )
                }
            })()}                 


            <label className="form__input--label">Description</label>
            <textarea className="form__textarea" placeholder="Description (optional)" name="description" onBlur={handleChangeDescriptionValue}></textarea>    

            <p className="form__note">{categoryWarning}</p>
            {/* <ExerciseMetaList selectedMetaIds={selectedMetaIds} handleChangeMeta={handleChangeMeta} />   */}
            <ExerciseMetaList exerciseId={exerciseId} passSelectedMetaIds={passSelectedMetaIds} />                 


            <div className="form__action--wrapper">
                <button  className="btn btn__submit" name="buttonValue" value="0" onClick={submit(0)}>{button}</button>

                <button  className="btn btn__submit parentButton" name="buttonValue" value="1" onClick={submit(1)}>{parentButton}</button>
                <button type="button" className="btn btn__cancel" onClick={() => formReset()}>Cancel</button>     
            </div>  
        </form>
    )
}