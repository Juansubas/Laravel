{{--@extends('layouts.app')--}}

{{--@section('title', "Blog")--}}
{{--@section('meta-description', 'Blog meta description')--}}

{{--@section('content')--}}
{{--    <h1>Blog</h1>--}}
{{--@endsection--}}


<x-layouts.app
    title="Blog"
    meta-description="Blog description"
    :sum="2 + 2"
>

    <h1>Blog</h1>
    <a href="{{ route('posts.create') }}">Create new post</a>
    @foreach($posts as $post)
        <div style="display: flex; align-items: baseline">
            <h2>
                <a href="{{ route('posts.show', $post) }}">
                    {{$post->title }}
                </a>
            </h2>
            <a href=" {{ route('posts.edit', $post) }} ">Edit</a>
        </div>
    @endforeach
</x-layouts.app>
