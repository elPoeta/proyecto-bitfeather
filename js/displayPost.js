class DisplayPost{
    
    constructor(){
        this.listaPostsJson = JSON.parse( localStorage.getItem("post"));
       }

    mostrarTodos(){
        let template = this.listaPostsJson !== null ?  
        `<section class="main-post">
        <h2 class="titulo-main">Posts</h2>
         ${this.listaPostsJson.map(post =>
            `<article class="article-post">
                  <h2 class="titulo-post" id="post-${post.id}"><a href="#">${post.titulo}</a></h2>
                  <p>${post.subTitulo}</p>
               <ul>
                  <li><a href="#">categoria</a></li>
                  <li><a href="#">autor</a></li>
                  <li>Fecha</li>
              </ul> 
          </article>`).join('')}`
        
        : `<section class="main-post">
        <h2 class="titulo-main">Posts</h2>
          <article class="article-post">
                  <h2 class="titulo-post"><a href="#">Oops!! No hay posts disponibles</a></h2>
                  <p>Se el primero en postear</p>
          </article>`;

          document.querySelector('#panel-main').innerHTML = template;
        
          if(this.listaPostsJson !== null ){
            let tituloPost = document.querySelectorAll('.titulo-post');
            for (let i = 0; i < tituloPost.length; i++) {

              tituloPost[i].addEventListener('click', ()=> {
                let id = tituloPost[i].getAttribute('id');
                id =id.replace(/\D/g,'');
                this.mostrarBlog(id);
              });
          
            }
          }
    }

    mostrarBlog(id){
        let options = {
            readOnly: true,
            scrollingContainer: '#scrolling-container'
          };

          let template = 
          `<section class="blog-post">
          <h2 class="titulo-main">${this.listaPostsJson[id].titulo}</h2>
          <p class="subtitulo-blogPost">${this.listaPostsJson[id].subTitulo}</p>
          <hr>
          <div id="scrolling-container">
          <div id="blog"></div>
          </div>
          </section>`;  
          document.querySelector('#panel-main').innerHTML = template;
          let blog = new Quill('#blog', options);
          blog.setContents(this.listaPostsJson[id].cuerpo);
    }
}