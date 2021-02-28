<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Termin;

class Tretman extends Model
{
    use HasFactory;
    protected $table = "tretmani";
    public $timestamps = false;

    public function termini()
    {
        return $this->hasMany(Termin::class);
    }
}
