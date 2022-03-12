<?php

namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;
use App\Models\ExerciseModel;
use App\Models\RelationshipsModel;
use App\Models\ExerciseMetaModel;

class Exercises extends ResourceController
{
    use ResponseTrait;

    public function __construct()
    {
        $this->model  = new ExerciseModel();
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

    /**
     * Return an array of exercises, each joined to their meta classifications, and their parent exercises
     * 
     * @return mixed
     */
    // public function readAll()
    // {   
    //     $data   = $this->model->findAll();
    //     return $this->respond( $data );        
    // }

    /**
     * Return the properties of a resource object
     *
     * @return mixed
     */
    public function show($id = null)
    {
        // $model = new ProductModel();
        $data = $this->model->find(['id'  => $id]);
        if (!$data) return $this->failNotFound('No Data Found');
        return $this->respond($data[0]);
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
       
        
        helper(['form, url']);
        $rules = [
            'name'          => 'required',
            'categoryId'    => 'required'
        ];
        $data   = [
            'name' => $this->request->getVar( 'name' ),
            'description' => $this->request->getVar( 'description' ),
            'slug'  => url_title( $this->request->getVar( 'name' ), '-', TRUE )
        ];
        
        if(!$this->validate($rules)) return $this->fail($this->validator->getErrors()); 

        $this->model->save($data);

        $eId    = $this->model->getInsertID();
        $mId    = $this->request->getVar( 'categoryId' ); //var_dump( $mId );
        $data   = [
            'eId'   => $eId,
            'mId'   => $mId
        ];

        $exercise_meta  = new ExerciseMetaModel();
        
        $exercise_meta->save( $data );

        // // Need to check if any parents have been selected

        // // $data   = [
        // //     'eId'   => $eId,
        // //     'parentId'  => 
        // // ]

        $response = [
            'status' => 201,
            'error' => null,
            'messages' => [
                'success' => 'Data Inserted'
            ]
        ];
        return $this->respondCreated($response);
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
