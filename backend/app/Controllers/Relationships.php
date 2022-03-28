<?php

namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;
use App\Models\RelationshipsModel;

class Relationships extends ResourceController
{
    use ResponseTrait;

    public function __construct()
    {
        $this->model  = new RelationshipsModel();
    }

    /**
     * Return an array of resource objects, themselves in array format
     *
     * @return mixed
     */
    public function index()
    {
        $data   = $this->model->findAll();

        return $this->respond( $data );
    }    

}