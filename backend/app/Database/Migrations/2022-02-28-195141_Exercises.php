<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class Exercises extends Migration
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
                'unique'        => TRUE
            ],
            'slug'    => [
                'type'          => 'VARCHAR',
                'constraint'    => 200,
                'unique'        => TRUE
            ], 
            'description'    => [
                'type'          => 'TEXT',
                'null'          => TRUE
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
        $this->forge->createTable('exercises', true);
    }

    public function down()
    {
        $this->forge->dropTable( 'exercises' );
    }
}
