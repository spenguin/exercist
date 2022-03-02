<?php

namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;
// use App\Models\UserModel;

class Users extends ResourceController
{
    /**
     * Return an array of resource objects, themselves in array format
     *
     * @return mixed
     */
    public function index()
    {
        
    }

    /**
     * Return an array of resource objects, themselves in array format
     *
     * @return mixed
     */
    public function validateLogin()
    {
        helper( ['form'] );
        $rules = [
            'username'  => 'required',
            'password'  => 'required'
        ];

        if( !$this->validate( $rules ) ) return $this->fail( $this->validator->getErrors() );

        if( $this->request->getVar('username') === $this->request->getVar('password') )
        {
            return $this->respond([
                "id"        => "1",
                "name"      => "Daisy",
                "username"  => "DTesterton",
                "email"     => "daisy@testerton.com",
                "key"       => "12345abcde" 
            ]);
        }
    }


    /**
     * Return the properties of a resource object
     *
     * @return mixed
     */
    public function show($id = null)
    {
        //
    }

    /**
     * Return a new resource object, with default properties
     *
     * @return mixed
     */
    public function new()
    {
        //
    }

    /**
     * Create a new resource object, from "posted" parameters
     *
     * @return mixed
     */
    public function create()
    {
        //
    }

    /**
     * Return the editable properties of a resource object
     *
     * @return mixed
     */
    public function edit($id = null)
    {
        //
    }

    /**
     * Add or update a model resource, from "posted" properties
     *
     * @return mixed
     */
    public function update($id = null)
    {
        //
    }

    /**
     * Delete the designated resource object from the model
     *
     * @return mixed
     */
    public function delete($id = null)
    {
        //
    }
}
