<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'description'];

    public function subjects()
    {
        return $this->hasMany(Subject::class);
    }

    public function users()
    {
        return $this->belongsToMany(User::class, 'course_user')->withPivot('role');
    }
}
