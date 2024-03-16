//se crean variables para ingresar 2 números
let num1 = parseInt(prompt("ingrese número mayor a 0"));
let num2 = parseInt(prompt("ingrese número 2, mayor a 0 y distinto al primer"));
//se realizan los ejercicios requeridos para dar respuesta 
let resultadoSuma = num1 + num2;
let resultadoResta = num1 - num2;
let resultadoMultiplicacion = num1 * num2;
let resultadoDivision = num1 / num2;
let resultadoModulo = num1 % num2;
// resultados para los ejercicios requeridos
let resultadoTexto = "su suma es " + resultadoSuma + "\n ";
resultadoTexto += "su resta es " +  resultadoResta + "\n ";
resultadoTexto += "su multiplicación es " + resultadoMultiplicacion + "\n ";
resultadoTexto += "su división es " + resultadoDivision + "\n ";
resultadoTexto += "su modulo es " + resultadoModulo + "\n ";
alert(resultadoTexto);



