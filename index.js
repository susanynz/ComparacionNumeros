// Solicitar tres números que serán variables
alert(`INGRESA TRES NÚMEROS Y DÉJAME ORDENARLOS`);
//Se usa parseFloat para convertir cadenas de datos en objetos numericos para operaciones aritmeticas
let numero1 = parseFloat(prompt("Ingresa el primer número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
let numero3 = parseFloat(prompt("Ingrese el tercer número:"));

let numerosOrdenados;

// Verificar si los números son iguales. Se usa un operador ternario 
numero1 === numero2 && numero2 === numero3
  ? (console.log("Los números son iguales."), alert(`Los números son iguales`), numerosOrdenados = [numero1, numero2, numero3].sort((a, b) => a - b))
  : (numerosOrdenados = [numero1, numero2, numero3].sort((a, b) => a - b));

let mayor = numerosOrdenados[2];
let centro = numerosOrdenados[1];
let menor = numerosOrdenados[0];

// Imprimir los números ordenados de mayor a menor y de menor a mayor
console.log(`Ordenados de mayor a menor: ${mayor}, ${centro}, ${menor}`, alert(`Los números de mayor a menor son: ${mayor},${centro},${menor}`));
console.log(`Ordenados de menor a mayor: ${menor}, ${centro}, ${mayor}`, alert(`Los números de menor a mayor son: ${menor},${centro},${mayor}`));

