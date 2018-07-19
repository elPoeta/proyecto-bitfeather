class CrearPost{
   constructor(){
    this.quill;
   }

     mostrarCrearPost(){
      const  template = `
        <section class="main-crear-post">
        <h2 class="titulo-main">Crear Post</h2>
        <form>
        <input type="text" id="crear-titulo" name="crear-titulo" placeholder="Titulo">
        <input type="text" id="crear-subtitulo" name="crear-subtitulo" placeholder="Subtitulo">
        <select>
            <option>Selecionar Categoria</option>
            <option value="CSS">CSS 3</option>
            <option value="HTML5">HTML 5</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Java">Java</option>
          </select>
      <label for="cuerpo"><h3>Cuerpo:</h3></label>
      <input name="cuerpo" id="crear-cuerpo" type="hidden">
      <div id="editor"></div>
        <h3>Tags:</h3>
        <textarea id="-crear-tag" name="tag" rows="5"></textarea>
        <button id="btn-publicar-post">Publicar</button>
        </form>
        </section>`;
        document.querySelector('#panel-main').innerHTML = template;
        this.renderEditor();
    }

    renderEditor(){
        const toolbarOptions = [
            ['bold', 'italic', 'underline'],        
            ['blockquote', 'code-block','link', 'image', 'video'],
          
            [{ 'header': 1 }, { 'header': 2 }],               
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'script': 'sub'}, { 'script': 'super' }],      
            [{ 'indent': '-1'}, { 'indent': '+1' }],        
            [{ 'direction': 'rtl' }],                    
          
            [{ 'size': ['small', false, 'large', 'huge'] }],  
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          
            [{ 'color': [] }, { 'background': [] }],        
            [{ 'font': [] }],
            [{ 'align': [] }]
          
            //['clean']                                       
          ];

         this.quill = new Quill('#editor', {
            modules: {  
              toolbar: toolbarOptions,
              imageResize: {}
            },
            placeholder: 'Construye aquí tu epopeya...',
            theme: 'snow'
          });
          const botonPublicarPost = document.querySelector('#btn-publicar-post');
          botonPublicarPost.addEventListener('click', (e)=>{
            //e.preventDefault();
            this.publicarPost();
      });
    }

    publicarPost(){
        let titulo = document.querySelector('#crear-titulo');
        let subTitulo = document.querySelector('#crear-subtitulo');
        let posteos = {};
        let postsInit =  localStorage.getItem("post");
        
        if ( postsInit === null ){
          postsInit = "[]";
        }
        
        let listaPosts = JSON.parse( postsInit ); 
      
        posteos.id = listaPosts.length;
        posteos.titulo = titulo.value;
        posteos.subTitulo = subTitulo.value;
        posteos.cuerpo = this.quill.getContents();

        console.log('ID>> ',posteos.id);
        console.log("titulo >> ",posteos.titulo);
        console.log("posteos ",posteos.cuerpo);
        
        listaPosts.push( posteos );  
        localStorage.setItem( "post", JSON.stringify( listaPosts ));    
    }
}



