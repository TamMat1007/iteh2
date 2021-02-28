<?php

namespace Database\Seeders;

use App\Models\Tretman;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class TerminiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 0; $i < 40; $i++) {
            $tretman_id = rand(1, 10);
            $tretman = Tretman::find($tretman_id);
            $broj_termina_rez = rand(1, 3);
            $max_termina = $tretman->max_termina;
            $zakazani_termini = $tretman->zakazani_termini;


            if ($zakazani_termini + $broj_termina_rez <= $max_termina) {
                DB::table('termini')->insert([
                    'rezervisano_na' => Str::random(6) . " " . Str::random(7),
                    'broj_termina' => $broj_termina_rez,
                    'cena' => $tretman->cena * $broj_termina_rez,
                    'tretman_id' => $tretman_id,
                ]);
                Tretman::find($tretman_id)->increment('zakazani_termini', $broj_termina_rez);
            }
        }
    }
}
