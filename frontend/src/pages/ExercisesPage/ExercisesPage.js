// View Exercises page
// called from App.js

// import node components
import React, {Component} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// import components
import Modal from "../../components/Modal/Modal";
import Search from "../../components/Search/Search";
import ExerciseForm from "../../components/ExerciseForm/ExerciseForm";

// import Utilities
// import {getExercises} from "../../utilities/DataUtils/DataUtils"

// import SCSS
import "../ExercisesPage/ExercisesPage.scss"


export default class ViewExercises extends Component {
    state = {
        displayModal: true,
        currentCategory: 0,
        exercisesList: null,
        selectedExercise: null,
        categoriesList: []
    }

    componentDidMount() {
        // Get Exercises
        axios
            .get(  "http://localhost:8080/exercises" )
            .then( response => {
                //console.log( 'data', response.data ); FIX
                this.setState( { exercisesList: response.data } );
                if( this.props.match.params.exerciseId )
                {
                    this.displayExercise( this.props.match.params.exerciseId );
                }
            })
            .catch( err => { console.log( 'Error retrieving data', err ) } );
        
        // Get Categories
        axios
            .get(  "http://localhost:8080/meta/readAll" )
            .then( response => {
                //console.log( 'categories', response.data ); FIX
                this.setState( { categoriesList: response.data } );

            })
            .catch( err => { console.log( 'Error retrieving data', err ) } );
        
    }

    componentDidUpdate( prevProps )
    {
        // const prevId = prevProps.match.params.exerciseId ? prevProps.match.params.exerciseId : null;
        // if( this.props.match.params.exerciseId && ( this.props.match.params.exerciseId !== prevId ) )
        // {   
        //     this.displayExercise( this.props.match.params.exerciseId );
        // }
    }

    displayExercise( id )
    {
        this.setState( {
            selectedExercise: this.state.exercisesList.filter( exercise => exercise.id == id ), // FIX ==
            displayModal: false
        })         
    }

    render() {

        const toggleModal = () => {
            this.setState( { displayModal: !this.state.displayModal } )
        } 

        const submitSearch = (e) => {
            e.preventDefault();
            const exerciseMatch = this.state.exercisesList.filter( exercise => exercise.name === e.target[0].value ); 
            window.location.replace( `/exercises/${exerciseMatch[0].id}` );
        }
        
        if( !this.state.exercisesList )
        {
            return ( <p>... Loading Exercises ...</p> );
        }
        else
        {        
            return (
                <section className="exercises site-main">
                    <div className="exercises-wrapper max-wrapper">
                        <Modal isActive={this.state.displayModal}>
                            <ExerciseForm categories={this.state.categories} exerciseList={this.state.exercisesList} selectedExercise={this.state.selectedExercise} toggleModal={toggleModal} />
                        </Modal>                    
                        <Search  exercises={this.state.exercisesList}/>
                        <button className="btn btn__add" onClick={toggleModal}>Add an Exercise</button>
                        <Link to="/"><button type="button" className="btn btn__cancel">Return to Home Page</button></Link>                  
                    </div>
                </section>
            )
        }
    }

}