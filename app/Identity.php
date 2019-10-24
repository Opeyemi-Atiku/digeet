<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Identity extends Model
{
    protected $fillable = [
        'user_id', 'front', 'back', 'with_user', 'verified'
    ];

    public function user() {
        return $this->belongsTo('App\User');
    }
}
