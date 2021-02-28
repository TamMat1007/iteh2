<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PrikazController;
use App\Http\Controllers\TerminController;
use App\Http\Controllers\TretmanController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/*Route::get('/', function () {
    return view('welcome');
});*/


    Route::get('/', [PrikazController::class,'pocetna']);
    Route::get('/termini', [PrikazController::class,'termini']);

    Route::get('/termini/prikazi', [TerminController::class,'get_termini']);
    Route::post('/termini/zakazi', [TerminController::class,'create_termin']);
    Route::delete('/termini/obrisi', [TerminController::class,'delete_termin']);

    Route::get('/tretmani/prikazi', [TretmanController::class,'get_tretmani']);
    Route::get('/tretmani/prikazi_termine', [TretmanController::class,'get_zakazani_termini_tretmana']);



