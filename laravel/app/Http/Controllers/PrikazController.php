<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PrikazController extends Controller
{
    public function pocetna()
    {
        return view('pocetna');
    }
    public function termini()
    {
        return view('termini');
    }
}
