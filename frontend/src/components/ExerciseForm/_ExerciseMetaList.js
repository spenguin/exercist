// Exercise Meta List component
// called from ExerciseForm.js

// import nodes
import React  from "react";

export default function ExerciseMetaList( {metaList, defaultOption, changeOption} )
{   
    return (
        Object.keys( metaList ).map(( category, i ) => { 

            if( '0' === metaList[i]['parentId'])
            {   
                return( 
                    <div className="form__radio--wrapper" key={i}>
                        <label className="form__radio-label">{metaList[i]['name']}</label>
                    </div>
                );
            }
            else
            { 
                return (
                    <div className="form__radio--wrapper" key={i}>
                        <input type="radio" className="form__radio" name="categoryId" value={i} checked={( i ) === defaultOption} onChange={() => changeOption(i)} /><label htmlFor="category" className="form__radio-label" onClick={() => changeOption(i)}>{metaList[i]['name']}</label>
                    </div>
                );
            }
        })
    );
    
}