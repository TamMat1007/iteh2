<?php

namespace App\Http\Controllers;

use App\Models\Tretman;
use App\Models\Termin;
use Illuminate\Http\Request;

class TretmanController extends Controller
{
    public function get_tretmani()
    {
        $tretmani = Tretman::all();

        return response()->json([
            'tretmani' => $tretmani
        ]);
    }

    public function get_zakazani_termini_tretmana(Request $request)
    {
        $tretman_id = $request->input('tretman_id');
        $termini = Tretman::find($tretman_id)->termini()->get();

        return response()->json([
            'termini' => $termini
        ]);
    }
}
