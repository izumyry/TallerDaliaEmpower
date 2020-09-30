# Editando archivo index.html

## Objetivos: 
  - Definición de estructura de archivo: index.html
  
### Requisitos:
  - Creado el archivo <b>index.html</b>.
  
#### Desarrollo:

<hr>
1. 

- Utilizando tags, definiremos la estructura básica de tu página html.

    Tags utilizados:
    - Estructura completa de la página: \<html>
    - Encabezado: \<head>
    - Cuerpo: \<body>
 
 - Agregaremos las fuentes de los íconos de redes sociales que se integrarán a nuestro proyecto (Dentro del tag body.)
   Notas: 
   - Todos los íconos y sus fuentes en esta seción fueron obtenidos de: https://boxicons.com/
   - Los tipos de letras fueron obtenidas de: fonts.google.com
    
    Inserta el siguiente código: 
    
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="taller" content="width=device-width initial-scale=1.0">
          <title>Taller Págian Web - Dalia Empower</title>            
          <link rel="stylesheet" href="css/estilos.css">
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css"> 
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap" >
        </head>
        <body>
          <i class='bx bxl-facebook'></i>
          <i class='bx bxl-twitter' ></i>
          <i class='bx bxl-instagram' ></i>
        </body> 
        </html>
        
 - Prueba en Live Server
<hr> 

2. Debido a que ya hemos indicado el tipo de fuentes con las que en nuestro proyecto trabajará. 
   - Vamos a la primer parte de la [Actividad CSS](../Actividad-CSS)
<hr> 

3. Copia el siguiente código justo después del tag \<body>
  
        <header class="header" id="id-header">
          <img src="img/icono-menu.svg" alt="" class="icono-menu">
          <nav class="menu-navegacion">
            <a href="#inicio">Inicio</a>
            <a href="#menu">Menú</a>
            <a href="#contacto">Contacto</a>    
          </nav>
          <div class="contenedor textos-cabezera">
            <h1>Sabores de hogar...</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
          </div>
        </header>

Notas:

- Componente header: Encabezado del cuerpo de nuestra página, con class e id que utilizaremos posteriormente desde css.
- Componente img: Agregamos el ícono de menú al encabezado, con class que utilizaremos posteriormente en JavaScript.
- Componente nav: Definición de menú de navegación.
- Componente div: Definición de otra sección en el documento.
<hr> 

4.- Copia el siguiente código justo después del tag \<header>

     <main>
      <section class="menu-comida" id="menu">
        <div class="contenedor estructura-menu">
         <h2 class="subtitulo">Menú</h2>
         <div class="contenedor-menu">
           <img src="img/ensaladas.jpg" alt="" class="imagen-menu">
           <img src="img/carnes.jpg" alt="" class="imagen-menu">
           <img src="img/hamburguesas.jpg" alt="" class="imagen-menu">
           <img src="img/pizzas.jpg" alt="" class="imagen-menu">
           <img src="img/postres.jpg" alt="" class="imagen-menu">
           <img src="img/bebidas.jpg" alt="" class="imagen-menu">
         </div>
        </div>
      </section>
    </main>
    
Notas:
  - Componente main: Especifica el principal contenido del documento.
  - Componente section: Especifica una sección nueva dentro de main.
  - Componente div: "sección" nueva que permitirá asignar un estilo a un conjunto de componentes.
  - Componente img: Permite insertar una imagen.
<hr>

5.- Copia el siguiente código justo después del tag \<main>

    <footer id="contactactanos">
      <div class="contenedor footer">
        <div class="contactos">
          <h2 class="negocio">Rincón Brujo</h2>
          <p>Sabor de hogar.</p>
        </div>
        <div class="redes-sociales">
          <a href="./" class="icono-social-media">
            <i class='bx bxl-facebook'></i>
          </a>
          <a href="./" class="icono-social-media">
            <i class='bx bxl-twitter' ></i>
          </a>
          <a href="./" class="icono-social-media">
            <i class='bx bxl-instagram' ></i>
          </a>
        </div>
      </div>
    </footer>
    
Notas:
  - Componente footer: Especifica el pie de página.
  - Componente a: Crea un link.
  - Los componentes i (redes sociales), ya los teníamos previamente. Por lo cual solo deberás copiar y pegar estos elementos dentro al tag \<a> 
<hr>

6.- Copia el siguiente código justo después del tag \<footer>

    <script src="js/icono_menu.js"></script>
    <script src="js/lightbox.js"></script
    
Notas:
  - Componente script: Permite "incrustar" o hacer referencia a un archivo que contendrá código JavaScript.
<hr>

7.- En el punto anterior agregamos referencias a archivos JavaScript aún no creados. 
    - Pasemos a la actividad número 1 de la [Actividad JavaScript](../Actividad-JavaScript) 


