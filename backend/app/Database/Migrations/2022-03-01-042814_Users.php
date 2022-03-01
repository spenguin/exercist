<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class Users extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'id'    => [
                'type'          => 'INT',
                'constraint'    => 11,
                'auto_increment'=> TRUE,
                'unsigned'      => TRUE
            ],
            'name'    => [
                'type'          => 'VARCHAR',
                'constraint'    => 200,
                'unique'        => FALSE
            ],
            'username'    => [
                'type'          => 'VARCHAR',
                'constraint'    => 60,
                'unique'        => TRUE
            ], 
            'pwhash'    => [
                'type'          => 'VARCHAR',
                'constraint'    => 255,
                'unique'        => FALSE
            ],    
            'email'    => [
                'type'          => 'VARCHAR',
                'constraint'    => 100,
                'unique'        => TRUE
            ],     
            'key'    => [
                'type'          => 'VARCHAR',
                'constraint'    => 255,
                'unique'        => FALSE
            ],                           
            'status'    => [
                'type'          => 'INT',
                'constraint'    => 1,
                'default'       => 1                
            ]   
        ]);

        $this->forge->addField( "created TIMESTAMP DEFAULT CURRENT_TIMESTAMP" );
        $this->forge->addField( "updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP" );

        $this->forge->addKey('id', true);
        $this->forge->createTable('users', true);        
    }

    public function down()
    {
        $this->forge->dropTable( 'users' );
    }
}
