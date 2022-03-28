// Exercise Form component
// Called from ExercisesPage.js

// import nodes
import React, {useState} from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

// import components
import ExerciseMetaList from "./_ExerciseMetaList"
import DisplayList from "../DisplayList/DisplayList";

// Import Utilities 
// import {organiseExercises} from "../../utilities/ArrayUtils/ArrayUtils"; FIX

export default function ExerciseForm(props) {
    // Set State vars
    const [message, changeMessage ]             = useState( '' );
    const [selectedCategory, changeCategory ]   = useState( 2 );
    const [exerciseParents, changeExerciseParents]  = useState( null );

    // Set variables
    const title             = props.exerciseId ? 'Amend Exercise' : 'Create a new Exercise';
    const button            = props.exerciseId ? 'Amend' : 'Create';
    const requiredStr       = props.exerciseId ? '' : '(required)';
    const selectedExercise  = props.exerciseId ? props.exerciseList[props.exerciseId] : null;
    const textareaValue     = props.exerciseId ? selectedExercise.description : '';
    // const exerciseParents = props.exerciseId ? this.state.relationships.filter( relationship => relationship.eId ===  this.props.exerciseId ) : null;
        




    // Set functions
    const submit = (e) => {
        e.preventDefault();
    
        // Reset the message
        changeMessage( '' );
    
        // Validate the name
        if( !e.target.name.value )
        {
            changeMessage( "Exercise must have a name" );
        }
        else if( !this.isNameUnique( e.target.name.value ) )
        {
            changeMessage( "Exercise name must be unique" );
        }
        else
        {   
            // Name is okay. 
            // Should probably sanitise both name and the description, though FIX
            // Is this an update or a create or both? FIX
            axios
                .post( 'http://localhost:8080/exercises/create', {
                    name: e.target.name.value,
                    description: e.target.description.value,
                    categoryId: e.target.categoryId.value,
                    parentId: e.target.selected ? e.target.selected.value : null
                })
                .then( response => {
                    //console.log( 'response', response.data );
                    // return response
                    //window.location.replace( `/exercises/` );
                    props.setExercises();
                    e.target.reset();
                    formReset();
                    props.toggleModal();                    
                })
                .catch( err => console.log( 'Error writing data', err ) );
        } 
    } 

    /**
     * Confirm that the provided Name is unique
     * @param (str) Name
     * @returns (bool) false: name already exists
     */
    const isNameUnique = (testName) => {
        // console.log( 'exercises', this.props.exerciseList );
        if( !props.exerciseList )
        {
            return true;
        }
        else
        {
            const name = this.props.exerciseList.filter( exercise => exercise.name === testName );
            return name.length === 0;
        }
    }  

    /**
     * Reset the form then toggle the Modal
     */
    const formReset = () => { 
        if( props.selectedExercise )
        {
            window.location.replace( '/exercises' );
        }
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
        );
        Array.from(document.querySelectorAll("textarea")).forEach(
            textarea => (textarea.value = "")
        );
        props.toggleModal();
    }     


    const changeOption = (id) => {
        // this.setState({
        //     defaultOption: id
        // });
        changeCategory( id );


        // if( this.state.selectedExercise )
        // {
        //     this.setState({
        //         defaultOption: this.state.selectedExercise[0].mId
        //     })
        // }

        // // Need to present the possible parent Exercises 
        // if( !(id === this.state.selectedCategory ) )
        // {
        //     this.setState({
        //         selectedCategory: id
        //     });

        //     const parentList = this.props.exerciseList.filter( exercise => exercise.mId == id-1 );
        //     this.setState({
        //         parentList: parentList
        //     });
        // }  
        const parentList = props.exerciseList.filter( exercise => exercise.mId == id - 1 );      

    }  

    const changeTextareaValue = (e) => {
        textareaValue = e.target.description.value;
    }     
    
    return(
        <form className="exercise-form form" onSubmit={submit}>
            <div className="form__message error">{message}</div>
            <h2 className="form__heading">{title}</h2>
            <label className="form__input--label">Exercise Name {requiredStr}</label>
            {(() => {
                if( props.exerciseId )
                {
                    return ( <p className="form__input--statement">{selectedExercise[0].name }</p> )
                }
                else
                {
                    return ( 
                        <>
                            <input className="form__input--text" name="name" placeholder="Exercise name" />
                            <p className="form__note">Name must be unique</p> 
                        </>
                    )
                }
            })()}     

            <label className="form__input--label">Description</label>
            <textarea className="form__textarea" placeholder="Description (optional)" name="description" onBlur={changeTextareaValue}></textarea>                    

            <ExerciseMetaList metaList={props.categoryList} selectedCategory={selectedCategory} changeOption={changeOption} />

            {/* <DisplayList list={parentList} selected={exerciseParents} /> */}

            <div className="form__action--wrapper">
                <button className="btn btn__submit">{button}</button>
                <button type="button" className="btn btn__cancel" onClick={() => formReset()}>Cancel</button>     
            </div>                
        </form>
    );
    
    
}