// Pedir al usuario la cantidad de días
const diasIngresados = parseInt(prompt("Ingrese la cantidad de días: "));

// Calcular los años
const anios = Math.floor(diasIngresados / 365);

// Calcular los días restantes después de los años
const diasRestantes = diasIngresados % 365;

// Calcular las semanas
const semanas = Math.floor(diasRestantes / 7);

// Calcular los días restantes después de las semanas
const diasFinales = diasRestantes % 7;

// Mostrar el resultado

let resultado = "Equivalente en años, semanas y días \n ";
resultado += "Años: " + anios + "\n ";
resultado += "Semanas: " + semanas + "\n ";
resultado += "Días: " + diasFinales;

alert(resultado);
