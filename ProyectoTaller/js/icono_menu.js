/* Definiendo Constantes*/
const iconoMenu = document.querySelector('.icono-menu');
const menuNavegacion = document.querySelector('.menu-navegacion');

/*Creando evento ícono menu*/
iconoMenu.addEventListener('click', ()=>{
    /* OJO comprobar que hace la clase desaparece sobre el menú de navegación */
    menuNavegacion.classList.toggle("desaparece");
});

window.addEventListener('click',(e)=>{
    console.log(e.target);
 if( menuNavegacion.classList.contains('desaparece') && e.target != menuNavegacion && e.target != iconoMenu){
        menuNavegacion.classList.toggle("desaparece");
    }
});