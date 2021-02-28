<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnsToTerminiForeign extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('termini', function (Blueprint $table) {
            $table->unsignedBigInteger('tretman_id');
            $table->foreign('tretman_id')->references('id')->on('tretmani')->onUpdate('cascade')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('termini_foreign', function (Blueprint $table) {
            //
        });
    }
}
