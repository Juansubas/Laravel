<?php

namespace App\Http\Controllers;

use App\Http\Requests\SavePostRequest;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::get();

        return view('posts.index', ['posts' => $posts]);
    }

    public function show(Post $post)
    {
        return view('posts.show', ['post' => $post]);
    }

    public function create()
    {
        return view('posts.create', ['post' => new Post()]);
    }

    public function store(SavePostRequest $request)
    {
//        $validated =$request->validate([
//            'title' => ['required', 'min:4'],
//            'body' => 'required'
//        ]);

//        $post = new Post;
//        $post->title = $request->input('title');
//        $post->body = $request->input('body');
//        $post->save();

//        Post::created([
//            'title' => $request->input('title'),
//            'body' => $request->input('body')
//        ]);
        Post::created($request->validate());

        session()->flash('status', 'Post created!');

        return to_route('posts.index');
    }

    public function edit(Post $post)
    {
        return view('posts.edit', ['post' => $post]);
    }

    public function update(SavePostRequest $request, Post $post)
    {
        $validated =$request->validate([
            'title' => ['required', 'min:4'],
            'body' => 'required'
        ]);

//        $post->title = $request->input('title');
//        $post->body = $request->input('body');
//        $post->save();

//        $post->update([
//            'title' => $request->input('title'),
//            'body' => $request->input('body')
//        ]);

        Post::updated($request->validate());

        session()->flash('status', 'Post updated!');

        return to_route('posts.show' , $post);
    }
}
