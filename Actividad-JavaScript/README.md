# Programando archivos JavaScript.

## Objetivos: 
  - Definición de funciones JavaScript que se ejcutarán desde HTML
  
### Requisitos:
  - Creado el archivo <b>index.html</b>.
  
#### Desarrollo:

<hr>
1. 

- Dentro de la carpeta js, crea los siguientes archivos:
  - icono_menu.js
- Continua con la secuencia de actividades. [Taller Dalia Empower](../)
<hr>

2. Abre el archivo <b>icono_menu.js</b>
  
  - Agrega el siguiente código:
  
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
        
    Notas:
      - iconoMenu: Constate que permite hacer referencia al elemento que hace match con el selector. <b>.icono-menu</b>
      - menuNavegacion: Constante que permite hacer referencia al elemento que hace match con el selector. <b>.menu-navegacion</b>
      - addEventListener: Función que nos permite agregarle un efecto o evento a algún componente.
        - Primer eventListener: Al recibir un click el ícono de menú, se le agrega la clase desaparece a <b>\<nav></b>
        - Segundo eventListener: Si <nav> tiene la clase desparece y se está dando click en algún lugar distinto a menuNavegacion y a algún lugar distinto al íconoMenu. Entonces se asigna o elimina la clase desaparece.
 
