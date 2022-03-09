<?php

namespace App\Database\Seeds;

use CodeIgniter\Database\Seeder;

class MetaSeeder extends Seeder
{
    public function run()
    {
        $data = [
            [
                'name'  => 'Categories',
                'slug'  => 'categories'
            ],
            [
                'parentId'  => 1,
                'name'  => 'Goals',
                'slug'  => 'goals'
            ],
            [
                'parentId'  => 1,
                'name'  => 'Builders',
                'slug'  => 'builders'
            ],
            [
                'parentId'  => 1,
                'name'  => 'Warm-Ups',
                'slug'  => 'warm-ups'
            ]                                   
        ];

        // Simple Queries
        // $this->db->query("INSERT INTO users (username, email) VALUES(:username:, :email:)", $data);

        // Using Query Builder
        $this->db->table('users')->insert($data);
    }
}
