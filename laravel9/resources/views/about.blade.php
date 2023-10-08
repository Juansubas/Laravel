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
    <h1>About</h1>
</x-layouts.app>
