{{--@extends('layouts.app')--}}

{{--@section('title', "Home")--}}
{{--@section('meta-description', 'Home meta description')--}}

{{--@section('content')--}}
{{--    <h1>Inicio</h1>--}}
{{--@endsection--}}


{{--@component('components.layout')--}}
{{--    <h1>Inicio</h1>--}}
{{--@endcomponent--}}

<x-layouts.app
    title="Home"
    meta-description="Home description"
    :sum="2 + 2"
>
    <h1>Home</h1>
</x-layouts.app>
