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
            defaultOption: '2',
            textareaValue: "",
            sortedExercises: null,
            selectedCategory: 2,
            exerciseList: null
        }
        this.handleTextareaChange = this.handleTextareaChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    submit = (e) => {
        e.preventDefault();
    
        // Reset the message
        this.setState({
            message: ""
        })
    
        // Validate the name
        if( !e.target.name.value )
        {
            this.setState({
                message: "Exercise must have a name"
            })
        }
        else if( !this.isNameUnique( e.target.name.value ) )
        {
            this.setState({
                message: "Exercise name must be unique"
            })
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
                    console.log( 'response', response.data );
                    // return response
                    //window.location.replace( `/exercises/` );
                })
                .catch( err => console.log( 'Error writing data', err ) );
    
            e.target.reset();
            this.props.toggleModal();
        } 
    }    

    /**
     * Confirm that the provided Name is unique
     * @param (str) Name
     * @returns (bool) false: name already exists
     */
    isNameUnique = (testName) => {
        // console.log( 'exercises', this.props.exerciseList );
        if( !this.state.exerciseList )
        {
            return true;
        }
        else
        {
            const name = this.state.exerciseList.filter( exercise => exercise.name === testName );
            return name.length === 0;
        }
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
    
    handleTextareaChange = (e) => {
        this.setState({
            textareaValue: e.target.value
        })
    }    

    componentDidMount()
    {
    // Get Categories
        axios
            .get(  "http://localhost:8080/meta" )
            .then( response => {
                this.setState( { categories: response.data } );
            })
            .catch( err => { console.log( 'Error retrieving meta data', err ) } );
    }

    render() {
        
        if( !this.state.categories )
        {
            return( <p>... Loading Categories ...</p> );
        }
        else
        {
            const title = this.props.selectedExercise ? 'Amend Exercise' : 'Create a new Exercise';
            const button = this.props.selectedExercise ? 'Amend' : 'Create';
            
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

                    <ExerciseMetaList metaList={this.state.categories } defaultOption={this.state.defaultOption} changeOption={this.changeOption} />
                    <div className="form__action--wrapper">
                        <button className="btn btn__submit">{button}</button>
                        <button type="button" className="btn btn__cancel" onClick={() => this.formReset()}>Cancel</button>     
                    </div>                
                </form>
            );
        }
    }

}