<?php

namespace Database\Seeders;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class TretmaniSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 0; $i < 10; $i++) {
            $naziv = Str::random(6);
            DB::table('tretmani')->insert([
                'naziv' => "TRETMAN " . $naziv,
                'datum' =>  Carbon::today()->addDays(rand(0, 365)),
                'cena' => 100 * rand(5, 20),
                'zakazani_termini' => 0,
                'max_termina' => rand(8,12),
            ]);
        }
    }
}
