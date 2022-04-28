// Utility to interface with endpoints
// Really struggling to get this working properly FIX

import axios from "axios";
const URL = "http://localhost:8080";

// set URLS
let exercisesURL    = `${URL}/exercises`;
let metaURL         = `${URL}/meta`;
let relationshipsURL= `${URL}/relationships`; 
let exercise_metaURL= `${URL}/exercisemeta`; 

// set Axios gets
const requestExercises      = axios.get ( exercisesURL );
const requestMeta           = axios.get ( metaURL );
const requestRelationships  = axios.get ( relationshipsURL );
const requestExerciseMeta   = axios.get ( exercise_metaURL ); 

/**
 * Read the data for the app 
 * Write it to Session variables
 */
export const setData = () => 
{   
    // let exercisesURL    = `${URL}/exercises`;
    // let metaURL         = `${URL}/meta`;
    // let relationshipsURL= `${URL}/relationships`; 
    // let exercise_metaURL= `${URL}/exercisemeta`;    
    
    // const requestExercises      = axios.get ( exercisesURL );
    // const requestMeta           = axios.get ( metaURL );
    // const requestRelationships  = axios.get ( relationshipsURL );
    // const requestExerciseMeta   = axios.get ( exercise_metaURL ); 


    axios.all([requestExercises, requestMeta, requestRelationships, requestExerciseMeta ]).then(axios.spread((...responses) => {

        window.sessionStorage.setItem( "exercises", JSON.stringify( responses[0].data ) );
        window.sessionStorage.setItem( "meta", JSON.stringify( responses[1].data ) );
        window.sessionStorage.setItem( "relationships", JSON.stringify( responses[2].data ) );
        window.sessionStorage.setItem( "exercise_meta", JSON.stringify( responses[3].data ) );


      })).catch(errors => {
      
        console.log( 'Errors reading data', errors );
      
      })
}

/**
 * Update the ExerciseList and ExerciseMetaList session data
 *
 */
export const updateExerciseData = () => {
    axios.all([requestExercises, requestExerciseMeta ]).then(axios.spread((...responses) => {

        window.sessionStorage.setItem( "exercises", JSON.stringify( responses[0].data ) );
        window.sessionStorage.setItem( "exercise_meta", JSON.stringify( responses[1].data ) );

    })).catch(errors => {
        console.log( 'Errors re-reading data', errors );
    })
}
    
    

// export const validate = ({ username,password }) => {
//     const URL = `http://localhost:8080/users/validateLogin`;
//     return axios(URL, {
//       method: 'POST/GET',
//       headers: {
//         'content-type': 'application/json', // whatever you want
//       },
//       data: { username, password },
//     })
//       .then(response => response.data)
//       .catch(error => {
//         throw error;
//     });
// };

// export function validate( username, password )
// {
//     // Test against validation endpoint server-side

//     axios
//         .post( "http://localhost:8080/users/validateLogin", {
//             username: username,
//             password: password
//         })
//         .then( response => {
//             console.log( "response", response.data );
//             return response.data;
//         })
//         .catch( err => console.log( err ) );

//     // // Testing test for now
//     // if( username === password )
//     // {
//     //     return {
//     //         "id": "1",
//     //         "name": "Daisy",
//     //         "username": "DTesterton",
//     //         "email": "daisy@testerton.com",
//     //         "nonce": "12345abcde"            
//     //     }
//     // }
//     // else 
//     // {
//     //     return false;
//     // }
// }


export function findUser( str )
{
    // Try to find str as either a username or an email address
    // If string is an email, check for that; otherwise as a username
    
    // If str is an email, test against daisy@testerton.com
    if( validateEmail( str ) )
    {
        if( str === "daisy@testerton.com" )
        {
            return {
                "id": "1",
                "name": "Daisy",
                "username": "DTesterton",
                "email": "daisy@testerton.com",
                "nonce": "12345abcde" 
            }
        }
    }
    else    // Not email, so assume (yes, I'm aware) username
    {   
        if( str === "DTesterton" )
        {
            return {
                "id": "1",
                "name": "Daisy",
                "username": "DTesterton",
                "email": "daisy@testerton.com",
                "nonce": "12345abcde" 
            }            
        }
    }

    return false;
}

/**
 * Validates reset code
 * @param {str} nonce 
 * @returns (JSON) Userdata or false
 */
export function validateNonce( str )
{
    if( !str ) return false;

    // Need to compare str to nonce field in db

    // Check against existing nonce 
    if( str === "12345abcde" )
    {
        return {
            "id": "1",
            "name": "Daisy",
            "username": "DTesterton",
            "email": "daisy@testerton.com",
            "nonce": "12345abcde" 
        } 
    }
    return false;
}

/**
 * 
 * @param {str} userId 
 * @param {str} password
 * @returns {bool} 
 */
export function resetPassword( id, password )
{
    // Need to hash password and write it to the db for the userId

    // Not much needs testing from this end
    return true;
} 

/**
 * 
 * @returns {array} exercises
 */
export function getExercises()
{
    // Need to read a joined list from the db

    // May need to get endpoints working now
}



function validateEmail(email) 
{
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
