<x-layouts.app
    :title="$post->title"
    :meta-description="$post->body"
    :sum="1 + 1"
>
    <h1>Edit form</h1>

    <form action="{{ route('posts.update', $post) }}" method="POST">
        @csrf @method('PATCH')
        @include('posts.form-fields')
        <button type="submit">Actualizar</button>
        <br>
    </form>

    <a href="{{ route('posts.index') }}">Regresar</a>
</x-layouts.app>


