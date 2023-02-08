alert("Bienvenido/a a la calculadora de gastos");

const nombreCompleto = prompt("Ingrese su nombre: ");
const passwordAutorizado = prompt("Cree una contraseña: ");

let nombre = prompt("Ingrese su nombre completo: ");
let password = prompt("Ingrese la contraseña creada: ");

while(nombreCompleto != nombre || passwordAutorizado != password) {
    alert("Nombre o contraseña incorrecta, ingrese nuevamente")
    nombre = prompt("Ingrese su nombre completo: ");
    contrasenia = prompt("Ingrese la contraseña creada: ");
}
alert("Ingreso correctamente")

let cantidadGastos = parseInt(prompt("Ingrese la cantidad de gastos que tuvo este mes: "));
let suma = 0;

for(let i = 0; i < cantidadGastos; i++) {
    
    let n = i + 1
    let monto = parseInt(prompt("Ingrese el monto numero " + n))
    suma = suma + monto
    console.log(suma)
}
alert("El total gastado este mes fue de $" + suma)

function buenGasto(Total) {
    if(Total <= 50000) {
        alert("Buen gasto este mes")
    } else {
        alert("Gastaste mucho este mes")
    }
}

buenGasto(suma)