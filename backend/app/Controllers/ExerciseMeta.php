<?php

namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;
// use App\Models\ExerciseModel;
// use App\Models\RelationshipsModel;
use App\Models\ExerciseMetaModel;

class ExerciseMeta extends ResourceController
{
    use ResponseTrait;

    public function __construct()
    {
        $this->model  = new ExerciseMetaModel();
    }
    
    /**
     * Return an array of resource objects, themselves in array format
     *
     * @return mixed
     */
    public function index()
    {
        $builder    = $this->model->builder();
        $builder->select( '*' );
        $data       = $builder->get()->getResultArray();

        return $this->respond( $data );
    }
}