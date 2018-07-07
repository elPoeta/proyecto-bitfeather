const btnNavPanel = document.querySelector('#btn-nav-panel');
const btnNavIcon = document.querySelector('#nav-icon-hamburger');
const navPanel = document.querySelector('.nav-panel');
const crearPost = document.querySelector('#crear-post');

btnNavIcon.addEventListener('click', (e)=>{
    e.preventDefault();
   navPanel.style.width='300px';
   navPanel.style.border= '3px solid #022037';
   navPanel.style.display='block';
});

btnNavPanel.addEventListener('click', (e)=>{
    e.preventDefault();
    navPanel.style.width='0px';
    navPanel.style.border= '0px';
});
crearPost.addEventListener('click', (e) =>{
   Vista.mostrarCrearPost();
});


           