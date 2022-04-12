// Exercise Meta Item component
// called from _ExerciseMetaList.js


// import nodes
import React, {useState} from "react";
import { Link, useParams } from "react-router-dom";


export default function ExerciseMetaItem( { meta, selectedMetaIds } )
{   
    const params                                = useParams();
    
    // set variables
    const exerciseMeta  = JSON.parse( window.sessionStorage.getItem( 'exercise_meta' ) );
    
    
    // set functions
    const handleChangeMeta = (id) => {

    }

    const checkedStr    = selectedMetaIds.filter( selected => selected == meta.id ); 
    
    return (
        <div className="form__radio--wrapper">
            <input type="radio" 
                className="form__radio" 
                name="categoryId" 
                value={meta.id} 
                checked={ checkedStr.length } 
                onChange={() => handleChangeMeta(meta.id)} />
            <label htmlFor="categoryId" 
                className="form__radio-label" 
                onClick={() => handleChangeMeta(meta.id)}>
            {meta.name}</label>
        </div>
    );
}