const crearPost = document.querySelector('#crear-post');
crearPost.addEventListener('click', (e) =>{
    template = `
    <section class="main-crear-post">
    <h2 class="titulo-main">Crear Post</h2>
    <form>
    <input type="text" id="crear-titulo" placeholder="Titulo">
    <input type="text" id="crear-subtitulo" placeholder="Subtitulo">
    <select>
        <option>Selecionar Categoria</option>
        <option value="cat1">Categoria 1</option>
        <option value="cat2">Categoria 2</option>
        <option value="cat3">Categoria 3</option>
        <option value="cat4">Categoria 4</option>
      </select>
  <h3>Cuerpo:</h3>
    <textarea name="cuerpo" id="editor"></textarea>
    <h3>Tags:</h3>
    <textarea name="tag" rows="5"></textarea>
    <button id="btn-publicar-post">Publicar</button>
    </form>
    </section>`;
    document.querySelector('#panel-contenido').innerHTML = template;
    ClassicEditor
            .create( document.querySelector( '#editor' ) )
            .catch( error => {
                console.error( error );
            } );
});


           