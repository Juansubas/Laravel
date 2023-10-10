<x-layouts.app
    :title="$post->title"
    :meta-description="$post->body"
    :sum="1 + 1"
>
    <h1>Edit form</h1>

    <form action="{{ route('posts.update', $post) }}" method="POST">
        @csrf @method('PATCH')
        <label >
            Title <br>
            <input name="title" type="text" value="{{ old('title', $post->title) }}">
            @error('title')
            <br>
            <small style="color: red"> {{ $message }} </small>
            @enderror
        </label> <br>
        <label >
            Body <br>
            <textarea name="body" >{{ old('body', $post->body) }}</textarea>
            @error('body')
            <br>
            <small style="color: red"> {{ $message }} </small>
            @enderror
        </label> <br>
        <button type="submit">Actualizar</button>
        <br>
    </form>

    <a href="{{ route('posts.index') }}">Regresar</a>
</x-layouts.app>


