alert("Bienvenido/a a la calculadora de gastos");

const nombreCompleto = "Maia Roman";
const contraseniaAutorizada = "2023";

for(let i = 0; i = 1; i++) {
    let nombre = prompt("Ingrese su nombre completo: ");
    let contrasenia = prompt("Ingrese su contraseña: ");

    if(nombre === nombreCompleto && contraseniaAutorizada === contrasenia) {
    alert("Inicio de sesion autorizado " + nombreCompleto);
    break;
    } else {
    alert("Nombre o Contraseña incorrecto/a, intente nuevamente");
}

do {
    contrasenia = prompt("Ingrese su contraseña: ");
} while(contrasenia != contraseniaAutorizada);
}

let cantidadGastos = parseInt(prompt("Ingrese la cantidad de gastos que tuvo este mes: "));

for(let i = 0; i < 1; i++) {
    let primerMonto = parseInt(prompt("Ingrese primer monto: "));
    let segundoMonto = parseInt(prompt("Ingrese segundo monto: "));
    let tercerMonto = parseInt(prompt("Ingrese tercer monto: "));
    let total = calcular(primerMonto, segundoMonto, tercerMonto);
    alert("El gasto total de este mes fue de $" + total.toFixed(2));
}

function calcular(primerMonto, segundoMonto, tercerMonto) {
    let total = (primerMonto + segundoMonto + tercerMonto);
    return total;
}

let gasto = buenGasto(total);

if(buenGasto) {
    alert(nombreCompleto + " estuvo bien este mes");
} else {
    alert(nombreCompleto + " te pasaste un poco este mes!");
}

function buenGasto(total) {
    if(total <= 50000) {
        return true;
    } else {
        return false;
    }
}