# Editando archivo estilos.css

## Objetivos: 
  - Definición de los estilos aplicados a cada componente html.
  
### Requisitos:
  - Creado y editando el archivo <b>index.html</b>.
  
#### Desarrollo:

<hr>
1. 

- Entra a la carpeta css.
- Crea el archivo estilos.css
- Inserta el siguiente código: 
    
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
         }
         
         body{
          font-family: 'Open Sans', sans-serif;
          }                    
    
   Notas:
    - El primer bloque, define las reglas para todos los componentes html (Uso del selector *)
    - El segundo bloque, define las reglas para el selector body.
    
- Continúemos con el punto 3 en: [Actividad HTML](../Actividad-HTML)  
<hr>

2. Configuración de estilo para los componentes con class: <b>contenedor</b>:

  - Agrega el siguiente código justo después del bloque body.
  
        .contenedor{
          width: 90%;
          max-width: 1200px;
          overflow: hidden;
          margin: auto;
          padding: 60px 0;
        }
       
    Notas:    
      - Operador punto:  permite hacer referencia a una class específica en los componentes html.
      - width: Asigna el ancho del componente html.
      - max-width: Asigna el máximo ancho del componente html y permite flexibilidad con ventanas más pequeñas.
      - overflow: Permite indicar que pasará con el contenido si es muy grande para estar el área.
      - margin: Permite control sobre márgenes(espacio entre los elementos); auto - los centrará horizontalmente dentro de su contenedor.
      - padding: Permite implementar espacios al rededor de un componente dentro de un borde. 60px (top & bottom), 0(left & right)
<hr>

3. Configuración de estilo para los componentes con class: <b>header</b>
  
  - Agrega el siguiente código justo después del bloque contenedor.
  
        .header{
          height: 100vh;
          background-image: linear-gradient(to top, rgba(235, 192, 253, 0.5) 0%, rgba(217, 222, 216, 0.507) 100%), url(../img/cocina.jpg);
          background-repeat: no-repeat;
          background-size: cover;
          background-attachment: fixed;
          background-position: center;
        }
        

    Notas:      
    - height: Establece la altura de un elemento. En este caso relativo al view port. (Area visible para el usuario en página web).
    - background-image: Imagen background del contenedor. Los colores fueron seleccionados de la página: https://webgradients.com/
    - background-repeat: No repetición de imagen - cover: cubre todo el contenedor.
    - background-attachment: Define si la imagen se desplazará o no con la página.
<hr>

4. Configuración de estilo para los componentes con class: <b>textos-cabezera</b>:

  - Agrega el siguiente código justo después del bloque header.
  
        .textos-cabezera{
          padding: 0;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          color: #fff;
        }
        
        .lema{
          font-size: 60px;
          margin-bottom: 15px;
        }

        .mensaje-lema{
          font-weight: 300;
          font-size: 25px
        }
        
    Notas:
      - height: Establece la altura de un elemento. En este caso lo define en % del contenedor.
      - display: Define un contenedor flexible.
      - justify-content & align-items: Justificación vertical y horizontal al centro.
      - flex-direction: Ubica los componentes en una dirección especificada. (Columna)
      - .lema & .mensaje-lema: Configuran los estilos para los mensajes en el encabezado.
<hr>

5. Configurando <b>scroll behavior</b>.

  - Agrega el siguiente código justo después del bloque con el selector <b>*</b>.
  
         :root{
          scroll-behavior: smooth;
         }
         
    Notas:
      - La pseudo-class root, nos permite asignar una propiedad a todo lo que está dentro del tag \<html>.
      - scroll-behavior: Nos permite definir el tipo de scroll que se aplicará en nuestra página.
<hr>    
    
6. Configurando <b>icono-menu & menu-navegacion</b>

  - Agrega el siguiente código justo después del bloque <b>mensaje-lema</b>:
  
        .icono-menu{
          position: fixed;
          /*z-index:10; /*solo para demo desaparece*/
          top: 30px;
          right: 30px;
          background: #fff;
          width: 40px;
          height: 40px;
          cursor: pointer;
          border-radius: 10px;
          box-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
        }

        .menu-navegacion{    
            position: fixed;
            top: 0;
            right: 0;
            width: 13vw;
            height: 100%;
            background-image: linear-gradient(45deg, rgba(255, 154, 157, 0.705) 0%, rgba(250, 208, 196, 0.712) 99%, #fad0c4 100%);
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            box-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
            transform: translate(100%);
            transition: transform .3s ease-in-out;
        }
        
        .desaparece{
          transform: translate(0%);
         }

        .menu-navegacion a{
            color: #fffaff;
            text-decoration: none;
        }
        
    Notas:
      - El selector icono-menu: Configura el estilo para el ícono de menú.
      - El selector menu-navegacion: Congiura el estilo del menú de navegación en la página.
      - El selector desaparece: Permitirá aparecer y desaparecer el menú navegacional. ( Se configurará con JavaScript )
      - El selector menu-navegacion a: Configura el estilo de los elementos de tipo <b>a</b> dentro del menú de navegación.
      
7. Configurando el menú de comida:

  - Agrega el siguiente código justo después del bloque <b><menu-navegacion a></b>
  
        .titulo-menu{
          text-align: center;
          font-weight: 300;
          color: #9f8ad0;
          margin-bottom: 40px;
          font-size: 40px;
        }

        .menu-comida{
            background: #f2f2f2;
        }

        .contenedor-menu{
            display: flex;
            justify-content: space-evenly; 
            flex-wrap: wrap;   
        }

        .imagen-menu{
            object-fit: cover;
            width: 30%;
            display: block;
            margin-bottom: 15px;
            box-shadow: 0 0 6px rgba(0,0,0,.5);
            cursor: pointer;
        }

    Notas: 
      - El selector titulo-menu: Configura el título de la sección que despliega el menú.
      - El selector menu-comida: Configura el color del background de la sección de las imágenes del menú.
      - El selector contenedor-menu: Configura la sección que contiene cada imágen de nuestro menú.
      - El selector imagen-menu: Configura cada imagen en el menú.
      
8. Configurando el pie de página:

  - Agrega el siguiente código justo después del bloque: <b>imagen-menu</b>
  
        footer{
          background: #ba92d1;
          padding-bottom: 0.1px;
        }

        .contenedor-footer{
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            padding-top: 60px;
            padding-bottom: 40px;
        }

        .lema-footer{
            width: 40%;
            color: #fff;
        }

        .negocio{
            font-weight: 500;
            font-size: 40px;
        }

        .whatsapp{
          font-weight: 900;
          color: #fff;
        }

        .icono-whatsapp{
            font-size: 30px;
            line-height: 60px;
            width: 30px;
            height: 60px;
            margin-left: 3px;
        }

        .redes-sociales{
            width:60%;
            display:flex;
            justify-content: flex-end;
        }

        .icono-social-media{
            display: inline-block;
            margin-left: 20px;
            width: 60px;
            height: 60px;
            border: 1px solid #fff;
            border-radius: 50%;
            text-align: center;
            color: #fff;
        }

        .icono-social-media:hover{
            background: #fff;
            color: #ba92d1;
        }

        .icono-social-media i{
            font-size: 30px;
            line-height: 60px;
        }

        .line{
            width: 90%;
            max-width: 1200px;
            margin: 0 auto;
            height: 2px;
            background: #fff;
            margin-bottom: 60px;
        }

    Notas:
      - El selector footer: Configura toda la sección que pertenece al pie de página.
      - El selector contenedor-footer: Configura el contenedor que muestra el mensaje e icónos de redes sociales.
      - El selector lema-footer: Configura el contenedor que posee los mensajes en pie de página.
      - El selector negocio: Configura el mensaje con el nombre del Restaurante.
      - El selector negocio+p: Configura el elemento <b>p</b> dentro del contenedor lema-footer.
      - El selector whatsapp: Configura la sección que contiene la información de contacto de whatsapp.
      - El selector icono-whatsapp: Configura el componente <b>i</b> que muestra los íconos de whatsapp.
      - El selecto redes-sociales: Configura el contenedor donde se encuentran los íconos de las redes sociales.
      - El selector icono-social-media: Configura el componente <b>a</b> que permitiria asociar el ícono de redes sociales a un enlace.
      - El selector icono-social-media:hover: Configura la acción a ejecutarse al pasar el mouse sobre los íconos de redes sociales.
      - El selector icono-social-media i: Configura el componente <b>i</b> que muestra los íconos de redes sociales.
      - El selector line: Configura la línea agregada justo antes de cerrar el bloque <b>footer</b>.
    
    
    

 
