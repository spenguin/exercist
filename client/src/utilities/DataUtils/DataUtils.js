// Utility to interface with endpoints

export function validate(username, password )
{
    // Test against validation endpoint server-side

    // Testing test for now
    if( username === password )
    {
        return {
            "id": "1",
            "name": "Daisy",
            "username": "DTesterton",
            "email": "daisy@testerton.com",
            "nonce": "12345abcde"            
        }
    }
    else 
    {
        return false;
    }
}


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
