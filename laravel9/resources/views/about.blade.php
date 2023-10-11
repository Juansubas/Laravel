{{--@extends('layouts.app')--}}

{{--@section('title', "About")--}}
{{--@section('meta-description', 'About meta description')--}}

{{--@section('content')--}}
{{--    <h1>About</h1>--}}
{{--@endsection--}}


<x-layouts.app
    title="About"
    meta-description="About description"
    :sum="2 + 2"
>
    <h1 class="my-4 font-serif text-3xl text-center text-sky-600 dark:text-sky-500">About</h1>
</x-layouts.app>
