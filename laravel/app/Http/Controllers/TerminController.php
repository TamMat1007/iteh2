<?php

namespace App\Http\Controllers;

use App\Models\Tretman;
use App\Models\Termin;
use Illuminate\Http\Request;

class TerminController extends Controller
{
    public function get_termini()
    {
        $termini = Termin::all();

        return response()->json([
            'termini' => $termini
        ]);
    }



    public function create_termin(Request $request)
    {
        $rezervisano_na = $request->input('rezervisano_na');
        $broj_termina = $request->input('broj_termina');
        $cena = $request->input('cena');
        $tretman_id = $request->input('tretman_id');
        $tretman = Tretman::find($tretman_id);
        $max_termina = $tretman->max_termina;
        $zakazani_termini = $tretman->zakazani_termini;
        if ($zakazani_termini + $broj_termina <= $max_termina) {
            Termin::insert([
                'rezervisano_na' => $rezervisano_na,
                'cena' => $cena,
                'broj_termina' => $broj_termina,
                'tretman_id' => $tretman_id
            ]);
            Tretman::find($tretman_id)->increment('zakazani_termini', $broj_termina);
        }
    }

    public function delete_termin(Request $request)
    {
        $id = $request->input('id');
        $termin = Termin::find($id);


        $tretman = Termin::find($id)->zaTretman()->get();
        $tretman_id = $tretman[0]->id;
        Tretman::find($tretman_id)->decrement('zakazani_termini', $termin->broj_termina);
        Termin::find($id)->delete();
    }
}
