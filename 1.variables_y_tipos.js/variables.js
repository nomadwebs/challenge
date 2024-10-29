/*## Variables y tipos de datos:

Ejemplo: Declara variables como nombre = "Ana", edad = 30, direccion = "Madrid, España", email = "ana@example.com".
Requisito: Muestra la información en la consola en formato JSON.*/

let nombre = 'Ana'
let edad = 30
let direccion = 'Calle sin nombre 33'
let email = 'email@email.com'

let persona = {
    nombre,
    edad,
    direccion,
    email,
    presentarse() {
        return `hola, mi nombre es ${this.nombre}, tengo ${this.edad} años, mi dirección postal es: ${this.direccion}, y me puedes contactar en ${this.email}`
    },

    cambiardireccion(nuevaDireccion) {
        this.direccion = nuevaDireccion
    }
}

//Muestra un churro con los datos
console.log(JSON.stringify(persona))

//Así nos lo muestra de forma más visual
console.log(JSON.stringify(persona, null, 2))


//Llamamos a la función presentarse
console.log(persona.presentarse())


//cambiamos la dirección del contacto
persona.cambiardireccion('Calle de la amargura 44, 2o 1a, Esc. Z')

//volvemos a mostrar los datos
console.log(JSON.stringify(persona, null, 2))