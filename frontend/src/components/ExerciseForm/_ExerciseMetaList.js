// Exercise Meta list component
// Called from ExerciseForm.js

// import nodes
import React, {useState} from "react";

// import components
import ExerciseMetaItem from "./_ExerciseMetaItem";


export default function ExerciseMetaList( { exerciseId } )
{
    
    // Set State variables
    const [metaSelected, changeMeta]    = useState( null );
    const [selectedMetaIds, changeSelectedMetaIds]  = useState( exerciseId ? exerciseMetaData.filter( exercise => exercise.eId == exerciseId ) : ["2"] );
    
    // Set variables
    const metaList      = JSON.parse( window.sessionStorage.getItem( 'meta' ) );
    const parentMeta    = metaList.filter( meta => meta.parentId === '0' ); 
    const exerciseMetaData  = JSON.parse( window.sessionStorage.getItem( 'exercise_meta' ) );
    // let selectedMetaIds   = exerciseId ? exerciseMetaData.filter( exercise => exercise.eId == exerciseId ) : ["2"];       

    // Set functions

    const handleChangeMeta = (changedId) => {

        // This is nice but it needs to run on submit, not change
        // console.log( 'meta value', changedId );
        // // If the selectedMetaId is already in the array, do nothing
        const _res = selectedMetaIds.filter( meta => meta.id === changedId ); //console.log( '_res length', _res.length );

        if( !_res.length )      // If the selected id is not in the array, we need to change things
        {
            const metaParentId = metaList.filter( m => m.id === changedId ).map( m => m.parentId)[0];//console.log( 'metaParentId', metaParentId );
            const metaSibs = metaList.filter( m => m.parentId == metaParentId ).map( m => m.id );
            const temp = selectedMetaIds.filter( m => metaSibs.indexOf( m.id ) > -1 ).map( m => m.id ); //.push(id);
            temp.push( changedId );

        //     console.log( 'metaSibs', metaSibs );
            console.log( 'selectedMetaIds', selectedMetaIds );
            changeSelectedMetaIds( temp );
        }
    }    

    return ( 
        parentMeta.map( parent => { 

            return( 
                <>
                    <label className="form__input--label" >Select from {parent.name}</label> 
                    { metaList.filter( meta => meta.parentId === parent.id ).map( meta => {
                        return ( 
                            <ExerciseMetaItem 
                                meta={meta} 
                                key={meta.id} 
                                selectedMetaIds={selectedMetaIds} 
                                handleChangeMeta={handleChangeMeta} 
                                name={parent.slug}
                            /> 
                        );
                    })}
                </>
            );
        })
    )
}