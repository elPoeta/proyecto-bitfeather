let displayPosts = new DisplayPost();
const crearPost = document.querySelector('#crear-post');

displayPosts.mostrarTodos();

crearPost.addEventListener('click', (e) =>{
    let crearPost = new CrearPost();
     crearPost.mostrarCrearPost();
 });