// View Exercises page
// called from App.js

// import nodes
import React, {Component} from "react";
import { Link } from "react-router-dom";

// import components
import Modal from "../../components/Modal/Modal";
import Search from "../../components/Search/Search";
import ExerciseForm from "../../components/ExerciseForm/ExerciseForm";

// import Utilities
import {getExercises} from "../../utilities/DataUtils/DataUtils"

// import SCSS
import "../ViewExercises/ViewExercises.scss"


export default class ViewExercises extends Component {
    state = {
        displayModal: true,
        currentCategory: 2
    }

    componentDidMount() {

    }

    render() {

        const toggleModal = () => {
            this.setState( { displayModal: !this.state.displayModal } )
        } 

        return (
            <section className="exercises site-main">
                <div className="exercises-wrapper max-wrapper">
                    <Search />

                    <Modal isActive={this.state.displayModal}>
                        <ExerciseForm /> {/* exerciseList={this.state.exercisesList} selectedExercise={this.state.selectedExercise} toggleModal={toggleModal} /> */}
                    </Modal>
                    <button className="btn btn__add" onClick={toggleModal}>Add an Exercise</button>                    
                </div>
            </section>
        )
    }

}