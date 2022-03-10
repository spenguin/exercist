// Exercise Meta List component
// called from ExerciseForm.js

// import nodes
import React  from "react";

export default function ExerciseMetaList( {metaList, defaultOption, changeOption} )
{
    return (
        Object.keys( metaList ).map(( category, i ) => { 
                                
            return (
                <div className="form__radio--wrapper" key={i}>
                    <input type="radio" className="form__radio" name="categoryId" value={i+1} checked={( i+1 ) === defaultOption} onChange={() => changeOption(i+1)} /><label htmlFor="category" className="form__radio-label" onClick={() => changeOption(i)}>{metaList[i+1]['name']}</label>
                </div>
            )
        })
    );
    
}