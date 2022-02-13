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



function validateEmail(email) 
{
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
