// Set State vars
const [message, changeMessage]                  = useState( '' );
const [metaSelected, changeMeta]                = useState( [2] );  // Will need to expand defaults when further Meta sets are added
const [exerciseParents, changeExerciseParents]  = useState( null );

// Set variables
const title             = props.exerciseId ? 'Amend Exercise' : 'Create a new Exercise';
const button            = props.exerciseId ? 'Amend' : 'Create';
const requiredStr       = props.exerciseId ? '' : '(required)';
// const selectedExercise  = props.exerciseId ? props.exerciseList[props.exerciseId] : null;
// const textareaValue     = props.exerciseId ? selectedExercise.description : '';


const submit = (e) => {
    e.preventDefault();
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

const handleChangeMeta = (id) => {
    changeMeta( id );

    const parentList = props.exerciseList.filter( exercise => exercise.mId === (id - 1).toString() );      

}  

const changeTextareaValue = (e) => {
    textareaValue = e.target.description.value;
} 

return(
    <form className="exercise-form form" onSubmit={submit}>
        <div className="form__message error">{message}</div>
        <h2 className="form__heading">{title}</h2>
        <label className="form__input--label">Exercise Name {requiredStr}</label>
        {/* {(() => {
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
        })()}      */}

        <label className="form__input--label">Description</label>
        <textarea className="form__textarea" placeholder="Description (optional)" name="description" onBlur={changeTextareaValue}></textarea>                    
{/* 
        <ExerciseMetaList metaList={props.metaList} selectedMeta={selectedMeta} handleChangeMeta={handleChangeMeta} /> */}

        {/* <DisplayList list={parentList} selected={exerciseParents} /> */}

        <div className="form__action--wrapper">
            <button className="btn btn__submit">{button}</button>
            <button type="button" className="btn btn__cancel" onClick={() => formReset()}>Cancel</button>     
        </div>                
    </form>
);    
