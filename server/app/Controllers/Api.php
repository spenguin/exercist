<?php
/**
 * Endpoints for the React Front-end
 */

namespace App\Controllers;

class Api extends BaseController
{
    public function index()
    {
        return view('api');
    }

    /**
     * Validate Username and Password
     * return userData or false
     */
    public function validate()
    {   
        return view( 'api' );
        // $username = $request->getPost( "username" );
        // $password = $request->getPost( "password" );

        // $o  = FALSE;
        // if( $username === $password )
        // {
        //     $o = [
        //         "id" => "1",
        //         "name" => "Daisy",
        //         "username" => "DTesterton",
        //         "email" => "daisy@testerton.com",
        //         "nonce" => "12345abcde"            
        //     ];
        //     $o  = json_encode( $o );
        // }

        // return $o;
       
    }
}
