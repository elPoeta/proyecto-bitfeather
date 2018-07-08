const seleccionCategoriaNavbar = document.querySelector('#selecion-categoria-navbar');
const menuHorizontalCat = document.querySelector('#menu-horizontal-cat');
const btnNavPanel = document.querySelector('#btn-nav-panel');
const btnNavIcon = document.querySelector('#nav-icon-hamburger');
const navPanel = document.querySelector('.nav-panel');
const crearPost = document.querySelector('#crear-post');
const desplegarMenuCategoriasSidePanel = document.querySelector('#submenu-categorias');
const subMenuCate = document.querySelector('#sub-menu-cat');

seleccionCategoriaNavbar.addEventListener('click', (e)=>{
    e.preventDefault();
    if(menuHorizontalCat.classList.contains('hide-menu')){
        menuHorizontalCat.classList.remove('hide-menu');
    }
    else{
        menuHorizontalCat.classList.add('hide-menu');
    }
});

btnNavIcon.addEventListener('click', (e)=>{
    e.preventDefault();
   navPanel.style.width='250px';
   navPanel.style.border= '3px solid #022037';
   navPanel.style.display='block';
});

btnNavPanel.addEventListener('click', (e)=>{
    e.preventDefault();
    navPanel.style.width='0px';
    navPanel.style.border= '0px';
    subMenuCate.classList.add('hide-menu');
});

desplegarMenuCategoriasSidePanel.addEventListener('click', (e) =>{
    e.preventDefault();
    if(subMenuCate.classList.contains('hide-menu')){
        subMenuCate.classList.remove('hide-menu');
    }
    else{
        subMenuCate.classList.add('hide-menu');
    }
});

crearPost.addEventListener('click', (e) =>{
   Vista.mostrarCrearPost();
});


           