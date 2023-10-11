{{--@extends('layouts.app')--}}

{{--@section('title', "Contact")--}}
{{--@section('meta-description', 'Contact meta description')--}}

{{--@section('content')--}}
{{--    <h1>Contact</h1>--}}
{{--@endsection--}}


<x-layouts.app
    title="Contact"
    meta-description="Contact description"
    :sum="2 + 2"
>
    <h1 class="my-4 font-serif text-3xl text-center text-sky-600 dark:text-sky-500">Contact</h1>
</x-layouts.app>
