<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Tretman;

class Termin extends Model
{
    use HasFactory;
    protected $table = "termini";
    public $timestamps = false;

    public function zaTretman()
    {
        return $this->belongsTo(Tretman::class, 'tretman_id', 'id');
    }
}
