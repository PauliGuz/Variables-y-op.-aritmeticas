//se crean variables para ingresar 5 números
let num1 = parseInt(prompt("ingrese número 1"));
let num2 = parseInt(prompt("ingrese número 2"));
let num3 = parseInt(prompt("ingrese número 3"));
let num4 = parseInt(prompt("ingrese número 4"));
let num5 = parseInt(prompt("ingrese número 5"));
// resultado de la suma de todos los números
let resultadoSuma = num1 + num2 + num3 + num4 + num5;
//promedio de los números
let resultadoPromedio = resultadoSuma/5

let resultadoTexto = "su suma es " + resultadoSuma + "\n ";
resultadoTexto+= "su promedio es " + resultadoPromedio;
alert(resultadoTexto)
