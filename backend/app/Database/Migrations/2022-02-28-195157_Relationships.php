<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class Relationships extends Migration
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
            'eId'    => [
                'type'          => 'INT',
                'constraint'    => 11,
                'unsigned'      => TRUE
            ],
            'parentId'    => [
                'type'          => 'INT',
                'constraint'    => 11,
                'unsigned'      => TRUE
            ],            
        ]);

        $this->forge->addForeignKey( 'eId', 'exercises', 'id' );  
        $this->forge->addForeignKey( 'parentId', 'exercises', 'id' );
        
        $this->forge->addKey( 'id', true );
        $this->forge->createTable( 'relationships', true );        
    }
    

    public function down()
    {
        $this->forge->dropTable( 'relationships' );
    }
}
