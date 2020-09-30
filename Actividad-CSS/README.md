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

  - Agrega el siguiente código justo después de el bloque body.
  
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
  
  - Agrega el siguiente código justo después de el bloque contenedor.
  
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

  - Agrega el siguiente código justo después de el bloque contenedor.
  
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

  - Agrega el siguiente código justo después de el bloque textos-cabezera.
  
         :root{
          scroll-behavior: smooth;
         }
         
  Notas:
    - La pseudo-class root, nos permite asignar una propiedad a todo lo que está dentro del tag \<html>.
<hr>    
    
6. Configurando <b>icono-menu & menu-navegacion</b>

  - Agrega el siguiente código justo después de el bloque <b>:root</b>:
  
        .icono-menu{
          position: fixed;
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
        }

        .menu-navegacion a{
            color: #fffaff;
            text-decoration: none;
        }
        
    Notas:
      - El selector icono-menu: Configura el estilo para el ícono de menú.
      - El selector menu-navegacion: Congiura el estilo del menú de navegación en la página.
      - El selector menu-navegacion a: Congigura el estilo de los elementos de tipo <b>a</b> dentro del menú de navegación.
