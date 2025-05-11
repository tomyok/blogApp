// 1. Sumar todos los números de un array
const numeros = [5, 10, 15]

const total = numeros.reduce((sum, num) => sum + num, 0)
//console.log(total)

// 2. Multiplicar todos los números de un array
const nums = [2, 3, 4]

const producto = nums.reduce((mul, num) => mul * num, 1)
//console.log(producto)

// 3. Contar cuántas veces aparece cada fruta
const frutas = ['manzana', 'banana', 'manzana', 'pera', 'banana', 'banana']

// Resultado esperado:
// { manzana: 2, banana: 3, pera: 1 }

const conteo = frutas.reduce((frutas, fruta) => {
    frutas[fruta] = (frutas[fruta] || 0) + 1
    return frutas
}, {})

// console.log(conteo)

// 4. Juntar todas las palabras en una frase
const palabras = ['Hola', 'Tomy', 'cómo', 'va?']

// Resultado esperado: "Hola Tomy cómo va?"
const frase = palabras.reduce((acufrase, palabra) => {
    return acufrase = acufrase + " " + palabra
},"")

//console.log(frase)

// 5. Agrupar personas por edad
const personas = [
    { nombre: 'Ana', edad: 20 },
    { nombre: 'Juan', edad: 21 },
    { nombre: 'Lucía', edad: 20 },
  ]
  
  // Resultado esperado:
  // {
  //   20: [{ nombre: 'Ana'... }, { nombre: 'Lucía'... }],
  //   21: [{ nombre: 'Juan'... }]
  // }
  
const agrupadas = personas.reduce((personasNew, persona) => {
    if(personasNew[persona.edad]){
    personasNew[persona.edad] = [...personasNew[persona.edad],persona]
    } else {
    personasNew[persona.edad] = [persona]
    }
    return personasNew
},{})

console.log(agrupadas)
