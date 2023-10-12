<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules;
class RegisteredUserController extends Controller
{
    public function store(Request $request)
    {
        $request->validate(
            [
                'name' => ['required', 'string', 'max:255'],
                'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
                'password' => ['required', 'confirmed', Rules\Password::defaults()]
            ]
        );

        $user = User::create([
            'name' => $request->input('name'),
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);


        return to_route('posts.index')->with('status','Account created');
    }
}
