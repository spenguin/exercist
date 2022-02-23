// Exercise Form component
// Called from ViewExercises.js

// import nodes
import React, {Component} from "react";



export default class ExerciseForm extends Component {
    state = {
        message: ""
    }
    

    render() {
        const title = this.props.selectedExercise ? 'Amend Exercise' : 'Create a new Exercise'; 
        return(
            <form className="exercise-form form" onSubmit={this.submit}>
            <div className="form__message error">{this.state.message}</div>
            <h2 className="form__heading">{title}</h2>
            <label className="form__input-label">Exercise Name (required)</label>
            {(() => {
                if( this.props.selectedExercise )
                {
                    return ( <p className="form__input-statement">{this.props.selectedExercise[0].name }</p> )
                }
                else
                {
                    return ( <input className="form__input" name="name" placeholder="Exercise name" /> )
                }
            })()}
            
            <p className="form__note">Name must be unique</p>

            <label className="form__input-label">Description</label>
            <textarea className="form__textarea" placeholder="Description (optional)" name="description" onBlur={this.textareaValue}></textarea>

            <label className="form__input-label">Select Category</label>
                {/* { 
                    this.state.categories.map( category => { 
                        return (
                            <div className="form__radio--wrapper" key={category.id}>
                                <input type="radio" className="form__radio" name="categoryId" value={category.id} checked={category.id === this.state.defaultOption} onChange={this.changeOption(category.id)} /><label htmlFor="category" className="form__radio-label" onClick={this.changeOption(category.id)}>{category.name}</label>
                            </div>
                        )
                    })
                } */}
            {/* <DisplayList list={this.state.parentList} /> */}

            <button className="btn btn__submit">Select</button>
            <button type="button" className="btn btn__cancel" onClick={() => this.formReset()}>Cancel</button>                    

        </form>
        )
    }
}