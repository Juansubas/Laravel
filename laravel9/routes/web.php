<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
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


Route::view('/', 'welcome')->name('home');
Route::view('/contact','contact')->name('contact');

Route::get('/blog',[PostController::class, 'index'])->name('posts.index');
Route::get('/blog/create',[PostController::class, 'create'])->name('posts.create');
Route::post('blog', [PostController::class, 'store'])->name('posts.store');

Route::get('/blog/{post}', [PostController::class, 'show'])->name('posts.show');
Route::get('blog/{post}/edit', [PostController::class, 'edit'])->name('posts.edit');

Route::patch('blog/{post}', [PostController::class, 'update'])->name('posts.update');


Route::view('/about', 'about')->name('about');
