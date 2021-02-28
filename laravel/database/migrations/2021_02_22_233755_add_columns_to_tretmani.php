<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnsToTretmani extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('tretmani', function (Blueprint $table) {
            $table->string('naziv');
            $table->date('datum');
            $table->integer('cena');
            $table->integer('zakazani_termini');
            $table->integer('radni_sati');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('tretmani', function (Blueprint $table) {
            //
        });
    }
}
