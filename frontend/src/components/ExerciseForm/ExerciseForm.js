// Exercise Form component
// Called from ExercisesPage.js

// import nodes
import React, {Component} from "react";
import axios from 'axios';

// import components
import ExerciseMetaList from "./_ExerciseMetaList"

// Import Utilities
import {organiseExercises} from "../../utilities/ArrayUtils/ArrayUtils";


export default class ExerciseForm extends Component {
    constructor() {
        super();
        this.state = {
            categories: null,
            message: "",
            defaultOption: 0,
            textareaValue: "",
            sortedExercises: null,
            selectedCategory: 2
        }
        // this.handleTextareaChange = this.handleTextareaChange.bind(this);
        // this.submit = this.submit.bind(this);
    }

    submit = (e) => {
        e.preventDefault();
    }

    /**
     * Reset the form then toggle the Modal
     */
    formReset = () => { 
        if( this.props.selectedExercise )
        {
            window.location.replace( '/exercises' );
        }
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
        );
        Array.from(document.querySelectorAll("textarea")).forEach(
            textarea => (textarea.value = "")
        );
        this.props.toggleModal();
    }   
    
    changeOption = (id) => {
        this.setState({
            defaultOption: id
        });

        if( this.props.selectedExercise )
        {
            this.setState({
                defaultOption: this.props.selectedExercise[0].mId
            })
        }

        // Need to present the possible parent Exercises 
        if( !(id === this.state.selectedCategory ) )
        {
            this.setState({
                selectedCategory: id
            });

            if( this.state.sortedExercises )
            {
                const parentList = this.state.sortedExercises[id-1] ? this.state.sortedExercises[id-1] : null;
                this.setState({
                    parentList: parentList
                });
            }
            
            // switch( id ) {
            //     case 3:
            //         const parentList = this.state.sortedExercises[]
            //         this.setState({
            //             parentList: this.state.sortedExercises[2]
            //         });
            //         break;
            //     case 4 :
            //         this.setState({
            //             parentList: this.state.sortedExercises[3]
            //         });
            //         break;
            //     default:
            //         this.setState({
            //             parentList: null
            //         });
            // }
        }        

    }     

    componentDidMount()
    {
    // Get Categories
        axios
            .get(  "http://localhost:8080/meta/readAll" )
            .then( response => {
                this.setState( { categories: response.data } );
            })
            .catch( err => { console.log( 'Error retrieving data', err ) } );
    }

    render() {
        // console.log( 'bool', !this.state.categories ); console.log( 'categories', this.state.categories );
        if( !this.state.categories )
        {
            return( <p>... Loading Categories ...</p> );
        }
        else
        {
            const title = this.props.selectedExercise ? 'Amend Exercise' : 'Create a new Exercise'
            
            return(
                <form className="exercise-form form" onSubmit={this.submit}>
                    <div className="form__message error">{this.state.message}</div>
                    <h2 className="form__heading">{title}</h2>
                    <label className="form__input--label">Exercise Name (required)</label>
                    {(() => {
                        if( this.props.selectedExercise )
                        {
                            return ( <p className="form__input--statement">{this.props.selectedExercise[0].name }</p> )
                        }
                        else
                        {
                            return ( <input className="form__input--text" name="name" placeholder="Exercise name" /> )
                        }
                    })()}     
                    <p className="form__note">Name must be unique</p>

                    <label className="form__input--label">Description</label>
                    <textarea className="form__textarea" placeholder="Description (optional)" name="description" onBlur={this.textareaValue}></textarea>                    

                    <label className="form__input--label">Select Category</label>
                    <ExerciseMetaList metaList={this.state.categories } defaultOption={this.state.defaultOption} changeOption={this.changeOption} />

                    <button className="btn btn__submit">Select</button>
                    <button type="button" className="btn btn__cancel" onClick={() => this.formReset()}>Cancel</button>                     
                </form>
            );
        }
    }

}