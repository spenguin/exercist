// View Exercises page
// called from App.js

// import node components
import React, {Component} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// import components
import Modal from "../../components/Modal/Modal";
import Search, {extractPairs} from "../../components/Search/Search";
import ExerciseForm from "../../components/ExerciseForm/ExerciseForm";
import ExercisesList from "../../components/ExercisesList/ExercisesList"

// import Utilities
// import {getExercises} from "../../utilities/DataUtils/DataUtils"
// import {extractPairs} from "../../utilities/ArrayUtils/ArrayUtils";

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
        this.getExercises();
        
    }

    componentDidUpdate( prevProps )
    {
        // const prevId = prevProps.match.params.exerciseId ? prevProps.match.params.exerciseId : null;
        // if( this.props.match.params.exerciseId && ( this.props.match.params.exerciseId !== prevId ) )
        // {   
        //     this.displayExercise( this.props.match.params.exerciseId );
        // }
    }

    getExercises()
    {
        axios
            .get(  "http://localhost:8080/exercises/" )
            .then( response => {
                
                this.setState( { exercisesList: response.data } );
                // if( this.props.match.params.exerciseId )
                // {
                //     this.displayExercise( this.props.match.params.exerciseId );
                // }
            })
            .catch( err => { console.log( 'Error retrieving data', err ) } ); 
            
            return true;
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

        const setExercises = () => { 
            this.getExercises();
        }
        
        if( !this.state.exercisesList )
        {
            return ( 
            
                <section className="exercises site-main">
                    <div className="exercises-wrapper max-wrapper">
                        <p>... Loading Exercises ...</p> 
                    </div>
                </section>            
            );
        }
        else
        {   
            const exerciseSearchList = extractPairs( this.state.exercisesList, 'id', 'name' ); 
            const listCount = 5;
            
            return (
                <section className="exercises site-main">
                    <div className="exercises-wrapper max-wrapper">
                        <Modal isActive={this.state.displayModal}>
                            <ExerciseForm exerciseList={this.state.exercisesList} selectedExercise={this.state.selectedExercise} toggleModal={toggleModal} setExercises={setExercises} />
                        </Modal>   

                        <Search list={exerciseSearchList} submit={submitSearch}/>

                        <h3>{listCount} most recent Exercises</h3>
                        <ExercisesList exercises={this.state.exercisesList} count={listCount} />

                        <div className="site-main__action-wrapper">
                            <button className="btn btn__add" onClick={toggleModal}>Add an Exercise</button>
                            <Link to="/"><button type="button" className="btn btn__cancel">Return to Home Page</button></Link>    
                        </div>              
                    </div>
                </section>
            )
        }
    }

}