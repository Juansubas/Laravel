<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\View\View;
use App\Models\User;
class UserController extends Controller
{
    public function index(int $user_id): string
    {
        //dd($user_id);

        //dd is equals to var_dump and die() methods
        //var_dump($user_id)
        //die()
        //return '<h1>Hola Mundo desde el controlador' . $user_id . '</h1>';

        //dd(User::all());
        $user = User::find($user_id);

        //dd($user);

        return view('welcome', ['user' => $user]);
    }
}
