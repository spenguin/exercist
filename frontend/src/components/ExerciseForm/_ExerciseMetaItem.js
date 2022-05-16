// Exercise Meta Item component
// called from _ExerciseMetaList.js


// import nodes
import React, {useState} from "react";
import { Link, useParams } from "react-router-dom";


export default function ExerciseMetaItem( { meta, selectedMetaIds, handleChangeMeta, name } )
{   
    const params                                = useParams();
    
    // set variables
    // const exerciseMeta  = JSON.parse( window.sessionStorage.getItem( 'exercise_meta' ) );
    
    
    // set functions
    // const handleChangeMeta = (id) => {

    // }
    const checkedStr    = selectedMetaIds.filter( selected => selected == meta.id ); 
    // console.log( 'checkStr length', selectedMetaIds.filter( selected => selected == meta.id ).length );

    // console.log( 'selectedMeta', selectedMetaIds );
    
    return (
        <div className="form__radio--wrapper">
            <input type="radio" 
                className="form__radio" 
                name={"meta_" + name}
                value={meta.id} 
                checked={ selectedMetaIds.filter( selected => selected == meta.id ).length } 
                onChange={() => handleChangeMeta(meta.id)} />
            <label htmlFor={"meta_" + name} 
                className="form__radio-label" 
                onClick={() => handleChangeMeta(meta.id)}>
            {meta.name}</label>
        </div>
    );
}