// Array utility functions

/**
 * Organise the Categories
 * @input (obj) meta from db
 * @response (array)
 * This function needs to be more robust
 */
export function extractCategories( array )
{
    const o = array.map( ( a,i ) => {
        // No idea
    });
    
}


/**
 * A second sorting function - because one isn't enough, apparently
 */
 export function organiseExercises( array )
 {
     let o = [];
     o[2] = {name:'Goal', 'children': []};
     o[3] = {name:'Builder', 'children': []};
     o[4] = {name:'Warmup', 'children': []};
 
     for( let i = 0; i < array.length; i++ )
     {   
         o[array[i]['mId']]['children'][i] = array[i]; 
     }
 
     return o;
 }