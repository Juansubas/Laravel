<?php

use App\Http\Controllers\PostController;
use App\Models\Post;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    $posts = [];
    if(auth()->check()){
        //$posts = Post::where('user_id', auth()->id())->get();
        $posts = auth()->user()->usersCoolPosts()->latest()->get();
    }
    return view('home',['posts'=> $posts]);
});

Route::post('/register', [UserController::class, 'register']);
Route::post('/logout', [UserController::Class, 'logout']);
Route::post('/login', [UserController::Class, 'login']);

// Blog Post
Route::post('/createPost',[PostController::class, 'createPost']);
Route::get('/editPost/{post}',[PostController::class, 'showEditScreen']);
Route::put('/editPost/{post}',[PostController::class, 'actuallyUpdatePost']);
Route::delete('/deletePost/{post}', [PostController::class, 'deletePost']);
