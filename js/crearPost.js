class CrearPost{
     mostrarCrearPost(){
      const  template = `
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
      <label for="cuerpo">Cuerpo</label>
      <input name="cuerpo" type="hidden">
      <div id="editor"></div>
        <h3>Tags:</h3>
        <textarea name="tag" rows="5"></textarea>
        <button id="btn-publicar-post">Publicar</button>
        </form>
        </section>`;
        document.querySelector('#panel-contenido').innerHTML = template;
        
        this.renderEditor();
    }

    renderEditor(){
        const toolbarOptions = [
            ['bold', 'italic', 'underline', 'strike'],        
            ['blockquote', 'code-block', 'image', 'video'],
          
            [{ 'header': 1 }, { 'header': 2 }],               
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'script': 'sub'}, { 'script': 'super' }],      
            [{ 'indent': '-1'}, { 'indent': '+1' }],        
            [{ 'direction': 'rtl' }],                    
          
            [{ 'size': ['small', false, 'large', 'huge'] }],  
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          
            [{ 'color': [] }, { 'background': [] }],        
            [{ 'font': [] }],
            [{ 'align': [] }],
          
            ['clean']                                       
          ];

          let quill = new Quill('#editor', {
            modules: {  
              toolbar: toolbarOptions,
              imageResize: {}
            },
            theme: 'snow'
          });
          const botonPublicarPost = document.querySelector('#btn-publicar-post');
          botonPublicarPost.addEventListener('click', (e)=>{
            e.preventDefault();
          let cuerpo = document.querySelector('input[name=cuerpo]');
          cuerpo.value = JSON.stringify(quill.getContents());
          console.log(cuerpo.value);

          let textoajason = JSON.parse(cuerpo.value);
          console.log('textoajson<',textoajason);
       
        });
    }
}