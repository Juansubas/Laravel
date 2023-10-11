<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ $title ?? '' }}</title>
    <meta name="description" content="{{ $metaDescription ?? 'Default meta description'}}">
    @vite('resources/css/app.css')
{{--    <title>@yield('title')</title>--}}
{{--    <meta name="description" content="@yield('meta-description', 'Default meta description')">--}}
</head>
<body class="antialiased bg-slate-100 dark:bg-slate-900">
{{--@include('partials.navigation')--}}

{{--@yield('content')--}}
<x-layouts.navigation />

@if(session('status'))
    <div>{{ session('status') }}</div>
    <div class="max-w-screen-xl px-3 py-2 mx-auto font-bold text-white sm:px-6 lg:px-8 bg-emerald-500 dark:bg-emerald-700">
        {{ session('status') }}
    </div>
@endif

<pre>
    {{ $sum }}
</pre>

{{ $slot }}
</body>
</html>
