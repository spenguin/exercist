<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class ExerciseMeta extends Migration
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
            'eId'   => [
                'type'          => 'INT',
                'constraint'    => 11,
                'unsigned'      => TRUE
            ],
            'mId'   => [
                'type'          => 'INT',
                'constraint'    => 11,
                'unsigned'      => TRUE                
            ]
        ]);

        $this->forge->addKey('id', true);
        $this->forge->addForeignKey('eId', 'exercises', 'id');
        $this->forge->addForeignKey('mId', 'meta', 'id');

        $this->forge->createTable('exercise_meta', true);          
    }

    public function down()
    {
        $this->forge->dropTable( 'exercise_meta' );
    }
}
