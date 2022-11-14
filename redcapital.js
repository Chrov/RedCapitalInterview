console.log('\n')
// Task 1

// Fibonacci sin recursividad 
// num -> cantidad de numeros a imprimir de fibonacci
function fibonacci(num) {
  // Valores base que siempre estarán.
  var fibonacciArray = [0, 1];

  for (let i = 2; i <= num; i++) {
    // Formula de Fibonacci -> Fn = (Fn-1) + (Fn-2)
    fibonacciArray[i] = fibonacciArray[i - 1] + fibonacciArray[i - 2]
  }
  return fibonacciArray
}

var secuencia = fibonacci(10)
console.log(secuencia + '\n')


// Task 2
function invertirCadena(text) {
  var textoRetorno = ''
  // text.length - 1 ---> para no tener problemas con los indices. 
  for (let i = text.length - 1; i >= 0; i--) {
    textoRetorno = textoRetorno + text[i]
  }
  return textoRetorno;
}

var invertir = invertirCadena('ABCDEFG')
console.log(invertir + '\n')





// Task 3
function multiplicar(num1 = 1, num2 = 1) {
  if (isNaN(num1) || isNaN(num2)) {
    return console.error("ERROR" + '\n');
  }
  else {
    var total = 0;
    for (let i = 0; i < num1; i++) {
      total = total + num2;
    }
    return total;

  }
}

var resultado = multiplicar(23, 13);
if (resultado !== undefined) console.log(resultado + '\n');





// Task 4
const arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
  29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51,
  52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74,
  75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97,
  98, 99, 100, 169
]

// Funcion que corrobora si el número es primo
{
  function esPrimo(num) {

    for (var i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }

    return num !== 1;
  }
}

function numPrimo(arr = []) {
  var arrPrimos = [];

  for (let i = 2; i < arr.length; i++) {
    if (esPrimo(i)) {
      arrPrimos.push(i);
    }
  }

  return arrPrimos
}

var varPrimos = numPrimo(arr);
console.log(varPrimos);