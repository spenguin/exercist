// View Exercises page
// called from App.js

// import node components
import React, {useState} from "react";
import { Link, useParams } from "react-router-dom";

// import components
import Modal from "../../components/Modal/Modal";
import Search, {extractPairs} from "../../components/Search/Search";
import ExerciseForm from "../../components/ExerciseForm/ExerciseForm";
import ExercisesList from "../../components/ExercisesList/ExercisesList"

// import Utilities
// import {getExercises} from "../../utilities/DataUtils/DataUtils"
// import {extractPairs} from "../../utilities/ArrayUtils/ArrayUtils";

// import SCSS
// import "../ExercisesPage/ExercisesPage.scss"

export default function ExercisesPage(props) {
    const params                                = useParams();

    // Set State vars
    const [displayModal, changeModal]           = useState( params.exerciseId ? false : true ); 
    const [currentCategory, setCategory]        = useState( 0 );
    const [exerciseList, updateExerciseList]    = useState( JSON.parse( window.sessionStorage.getItem( 'exercises' ) ) );
    const [exerciseMetaList, updateExerciseMetaList]    = useState( JSON.parse( window.sessionStorage.getItem( 'exercise_meta' ) ) );
    
    // Set variables
    const exerciseSearchList                    = extractPairs( exerciseList, 'id', 'name' ); 
    const listCount                             = 5;
    const exerciseId                            = params.exerciseId ? params.exerciseId : null;    

    
    // Set functions
    const toggleModal = () => { 
        changeModal( !displayModal );
    }

    const submitSearch = (e) => {
        e.preventDefault();
        const exerciseMatch = exerciseList.filter( exercise => exercise.name === e.target[0].value ); 
        window.location.replace( `/exercises/${exerciseMatch[0].id}` );
    }     

    const setExercises = () => {

    }


    return (
        <section className="exercises site-main">
            <div className="exercises-wrapper max-wrapper">
                <Modal isActive={displayModal}>
                    <ExerciseForm 
                        exerciseList    = {exerciseList} 
                        exerciseId      = {exerciseId} 
                        exerciseMetaList= {exerciseMetaList}
                        toggleModal     = {toggleModal} 
                        setExercises    = {setExercises} 
                        // metaList={metaList}
                        // {...{...props, match: {params}} } 
                    /> 
                </Modal>   

                <Search list={exerciseSearchList} submit={submitSearch}/>

                <h3>{listCount} most recent Exercises</h3>
                <ExercisesList exercises={exerciseList} count={listCount} />

                <div className="site-main__action-wrapper">
                    <button className="btn btn__add" onClick={toggleModal}>Add an Exercise</button>
                    <Link to="/"><button type="button" className="btn btn__cancel">Return to Home Page</button></Link>    
                </div>              
            </div>
        </section>
    )



}
