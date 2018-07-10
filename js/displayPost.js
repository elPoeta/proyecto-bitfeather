class DisplayPost{
    
    constructor(){
        this.quill;
        this.listaPostsJson = JSON.parse( localStorage.getItem("post"));
       }

    mostrarTodos(){
        let template = this.listaPostsJson !== null ?  
        `<section class="main-post">
        <h2 class="titulo-main">Posts</h2>
         ${this.listaPostsJson.map(post =>
            `<article class="article-post">
                  <h2 class="titulo-post"><a href="#" id="${post.id}">${post.titulo}</a></h2>
                  <p>${post.subTitulo}</p>
               <ul>
                  <li><a href="#">categoria</a></li>
                  <li><a href="#">autor</a></li>
                  <li>fecha</li>
              </ul> 
          </article>`).join('')}`
        
        : `<section class="main-post">
        <h2 class="titulo-main">Posts</h2>
          <article class="article-post">
                  <h2 class="titulo-post"><a href="#">Oops!! No hay posts disponibles</a></h2>
                  <p>Se el primero en postear</p>
          </article>`  ;
          console.log(this.listaPostsJson);
          document.querySelector('#panel-contenido').innerHTML = template;
    }
}


       
     /*   let listaPostsJson = JSON.parse( localStorage.getItem("post"));
       console.log('index >> ',listaIndexJson);
        let texto = 
        `<h2>${listaPostsJson[listaIndex[0].id].titulo}</h2>
        <div id="blog"></div>`; 
       
     
     
     document.querySelector( '#contenedor-blog' ).innerHTML = texto;
     let blog = new Quill('#blog', options);
       blog.setContents(listaPostsJson[listaIndex[0].id].cuerpo); 
       
       
       
        viewProductos(id, idPanel){
        let productos = this.datos;
        let template =  `<section class="contenedor-productos text-center">
                         ${productos.map(producto =>
           `<div class="card">
              <img src="${producto.imagen}" class="img-card">
          
            <h2 class="titulo-card">${producto.nombre}</h2>
            <h3 class="precio-card">$ ${producto.precio}</h3>
            <hr>
            <button id="btn-agregar" onclick=agregarProdutoACarrito(${producto.id});><i class="fas fa-cart-plus"> </i>Agregar</button>
            </div>`).join('')}</section>`;    
            document.querySelector(idPanel).innerHTML = template;
        
    }
       
       
       */ 