# challenge

Días 1-10: Fundamentos de JavaScript (ES5 y ES6)


## 1. Variables y tipos de datos:

Ejemplo: Declara variables como nombre = "Ana", edad = 30, direccion = "Madrid, España", email = "ana@example.com".
Requisito: Muestra la información en la consola en formato JSON.


## 2. Condicionales y operadores lógicos:

Ejemplo: Una función clasificarEdad(edad) que retorne "Menor de edad", "Adulto", o "Tercera edad" según la edad.
Requisito: Usa operadores lógicos para clasificar entre 0-17, 18-64, y 65+ años.


Bucles:

Ejemplo: Un bucle for que recorra del 1 al 100.
Requisito: Muestra en la consola solo los números impares.


Funciones:

Ejemplo: Define calcularArea(base, altura) como arrow function que devuelva el área de un triángulo.
Requisito: Llama a la función con al menos tres valores distintos y muestra los resultados en la consola.


Alcance y this:

Ejemplo: Crea un objeto usuario con propiedades nombre, edad y un método presentarse().
Requisito: Usa this en presentarse() para imprimir nombre y edad del usuario.


Closures:

Ejemplo: Función contador() que devuelve una función interna para incrementar un valor y devolverlo.
Requisito: Llama a la función varias veces y observa cómo incrementa el valor.


Objetos y arrays:

Ejemplo: Define productos = [{nombre: "Laptop", precio: 800}, {nombre: "Monitor", precio: 150}].
Requisito: Usa un bucle for o forEach para mostrar solo los productos con precio mayor a $50.


Desestructuración:

Ejemplo: {nombre: 'Camila', edad: 24, pais: 'España'}.
Requisito: Usa desestructuración para extraer nombre y edad y muestra los valores en la consola.


Métodos de array (map, filter, reduce):

Ejemplo: [1, 2, 3, 4, 5].
Requisito: Usa map para los cuadrados, filter para pares, y reduce para la suma total.


Proyecto corto:

Ejemplo: inventario = [{nombre: "Camisa", precio: 20, cantidad: 5}].
Requisito: Implementa funciones para agregar, eliminar, y actualizar artículos, e imprime el inventario final en la consola.


Días 11-20: Profundización en ES6 y Casos Prácticos

Promesas y async/await:
Ejemplo: Simula una llamada a la API con setTimeout que retorne "Datos recibidos".
Requisito: Usa async y await para esperar la respuesta.


Manipulación de fechas:
Ejemplo: calcularDiasRestantes("2024-12-25").
Requisito: Calcula y devuelve cuántos días faltan desde hoy.


Manejo de errores:
Ejemplo: calcularRaiz(-5) debería lanzar un error.
Requisito: Usa try-catch y maneja el error mostrando un mensaje en consola.


JSON y localStorage:
Ejemplo: tareas = [{titulo: "Estudiar", completado: false}].
Requisito: Agrega funciones para almacenar, recuperar y eliminar tareas de localStorage.


Módulos en ES6:
Ejemplo: Crea saludar.js que exporte una función saludar(nombre).
Requisito: Importa y llama a saludar desde otro módulo mostrando el resultado en la consola.


Fetch API:
Ejemplo: Conéctate a https://pokeapi.co/api/v2/pokemon/1.
Requisito: Muestra en consola el nombre y la imagen del Pokémon.


Proyecto práctico:
Ejemplo: Conéctate a https://jsonplaceholder.typicode.com/posts.
Requisito: Muestra los primeros cinco títulos de posts en la consola.


Generadores:
Ejemplo: generadorPares().
Requisito: El generador debe devolver solo números pares en cada iteración.


Proxy y Reflect:
Ejemplo: Un objeto persona con nombre y edad.
Requisito: Usa un Proxy para interceptar y mostrar en la consola cada acceso o modificación de las propiedades.


Proyecto corto:
Ejemplo: Calculadora de presupuesto con ingresos y gastos.
Requisito: Permite almacenar las transacciones en localStorage y calcula el total actual.
Días 21-30: React + Vite: Ejercicios y Componentes


Primeros pasos en React y Vite:
Ejemplo: Configura un proyecto básico en Vite.
Requisito: Muestra "¡Hola, React!" en el componente App.


Componentes y props:
Ejemplo: Crea un componente Tarjeta con props titulo y contenido.
Requisito: Usa el componente en App con diferentes títulos y contenidos.


Eventos y useState:
Ejemplo: Un componente Contador que incremente y decremente un número.
Requisito: Usa useState para manejar el valor del contador.


Ciclo de vida con useEffect:
Ejemplo: Crea un componente que use useEffect para mostrar "Componente montado" en la consola.
Requisito: Agrega un botón para desmontar el componente y muestra "Componente desmontado" en la consola.


Múltiples componentes:
Ejemplo: Un componente Lista que reciba un array de nombres como prop.
Requisito: Genera elementos Item con cada nombre y muéstralos en una lista.


Navegación entre vistas:
Ejemplo: Usa react-router para crear las vistas "Inicio" y "Acerca de".
Requisito: Configura enlaces de navegación entre ambas vistas.


Ejercicio práctico:
Ejemplo: Un contador con colores de fondo.
Requisito: Usa condicionales para cambiar el color según el valor del contador (par: azul, impar: verde).


To-Do list:
Ejemplo: Una lista de tareas con un formulario para agregar tareas.
Requisito: Guarda las tareas en localStorage y permite eliminarlas.


Context API:
Ejemplo: Crea un contexto para manejar un contador.
Requisito: Permite modificar el contador desde componentes hijos.


Proyecto final:
Ejemplo: Una aplicación de lista de contactos en React.
Requisito: Permite agregar, ver y eliminar contactos. Usa react-router para navegación y localStorage para persistencia.
