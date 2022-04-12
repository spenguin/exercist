// Exercise Meta list component
// Called from ExerciseForm.js

// import nodes
import React, {useState} from "react";

// import components
import ExerciseMetaItem from "./_ExerciseMetaItem";


export default function ExerciseMetaList( { exerciseId } )
{
    
    // Set variables
    const metaList      = JSON.parse( window.sessionStorage.getItem( 'meta' ) );
    const parentMeta    = metaList.filter( meta => meta.parentId === '0' ); 
    const exerciseMetaData  = JSON.parse( window.sessionStorage.getItem( 'exercise_meta' ) );
    const selectedMetaIds   = exerciseId ? exerciseMetaData.filter( exercise => exercise.eId == exerciseId ) : ["2"];       

    // Set functions

    const handleChangeMeta = (id) => {
        
    }    

    return ( 
        parentMeta.map( parent => { 

            return( 
                <>
                    <label className="form__input--label" >Select from {parent.name}</label> 
                    { metaList.filter( meta => meta.parentId === parent.id ).map( meta => {
                        return ( <ExerciseMetaItem meta={meta} key={meta.id} selectedMetaIds={selectedMetaIds} handleChangeMeta={handleChangeMeta} /> );
                    })}
                </>
            );
        })
    )
}