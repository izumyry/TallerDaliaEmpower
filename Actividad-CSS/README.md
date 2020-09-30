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
    
