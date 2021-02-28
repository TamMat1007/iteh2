<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnsToTermini extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('termini', function (Blueprint $table) {
            $table->string('rezervisano_na');
            $table->date('datum_rez');
            $table->integer('broj_termina');
            $table->integer('cena');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('termini', function (Blueprint $table) {
            //
        });
    }
}
