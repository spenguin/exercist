// Exercise Meta List component
// called from ExerciseForm.js

// import nodes
import React  from "react";

export default function ExerciseMetaList( {metaList, selectedCategory, changeOption} )
{   console.log( 'selectedCategory', selectedCategory ); console.log( 'metaList', metaList );
    return (
        Object.keys( metaList ).map(( category, i ) => { 

            if( '0' === metaList[i]['parentId'])
            {   
                return( 
                    <label className="form__input--label" key={i}>Select from {metaList[i]['name']}</label>
                );
            }
            else
            { 
                return ( 
                    <div className="form__radio--wrapper" key={i}>
                        <input type="radio" 
                            className="form__radio" 
                            name="categoryId" 
                            value={metaList[i]['id']} 
                            checked={( metaList[i]['id'] ) === selectedCategory} 
                            onChange={() => changeOption(metaList[i]['id'])} />
                        <label htmlFor="categoryId" 
                            className="form__radio-label" 
                            onClick={() => changeOption(i)}>
                        {metaList[i]['name']}</label>
                    </div>
                );
            }
        })
    );
    
}