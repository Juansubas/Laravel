<x-layouts.app
    title="Crear nuevo post"
    meta-description="Formulario para crear un nuevo blog post"
    :sum="1 + 1"
>
    <h1> Create new post </h1>

    <form action="{{ route('posts.store') }}" method="POST">
        @csrf
        <label >
            Title <br>
            <input name="title" type="text">
        </label> <br>
        <label >
            Body <br>
            <textarea name="body"></textarea>
        </label> <br>
        <button type="submit">Enviar</button>
        <br>
    </form>

    <a href="{{ route('posts.index') }}">Regresar</a>
</x-layouts.app>


