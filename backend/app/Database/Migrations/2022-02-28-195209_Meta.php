<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class Meta extends Migration
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
            'parentId'  => [
                'type'          => 'INT',
                'constraint'    => 11,
                'unsigned'      => TRUE,  
                'default'       => 0              
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
            ]
        ]);
            
        $this->forge->addKey('id', true);
        $this->forge->createTable('meta', true);           
    }

    public function down()
    {
        $this->forge->dropTable( 'meta' );
    }
}
