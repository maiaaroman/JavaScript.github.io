class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    sumaStock(cantidad) {
        this.stock += cantidad;
    }

    venta(cantidad) {
        if (this.stock >= cantidad) {
            this.stock -= cantidad;
            console.log("Se vendieron " + cantidad + " unidades del producto: " + this.nombre);
        }
    }
}

const sillon = new Producto("Sillon", 55000, 15);
const mesa = new Producto("Mesa", 25000, 10);
const silla = new Producto("Silla", 5400, 20);
const vitrina = new Producto("Vitrina", 34000, 5);
const mesaRatona = new Producto("Mesa ratona", 12000, 11);

const arrayProductos = [sillon, mesa, silla, vitrina, mesaRatona];

console.log(arrayProductos);

arrayProductos.forEach( producto => {
    console.log(producto);
})

alert("Bienvenido/a a la tienda de ML deco");
let prodstock = prompt("Desea ver los productos en stock? Indique Si o No");

if (prodstock === "Si") {
    alert("Los productos en stock son los siguientes: Sillon, Mesa, Silla, Vitrina, Mesa ratona.");
    let compra = prompt("Le interesaron nuestros productos? Indique Si o No para continuar");

    if (compra === "Si") {
        function menu() {
            let opciones = parseInt(prompt("Ingrese la opcion que desea: 1)Sillon 2)Mesa 3)Silla 4)Vitrina 5)Mesa Ratona 6)Salir"));
            return opciones;
        }
        
        
        function Sillon() {
            let sillon = arrayProductos.find(producto => producto.nombre === "Sillon");
            alert("El producto seleccionado tiene un valor de $" + sillon.precio);
        }
        
        function Mesa() {
            let mesa = arrayProductos.find(producto => producto.nombre === "Mesa");
            alert("El producto seleccionado tiene un valor de $" + mesa.precio);
        }
        
        function Silla() {
            let silla = arrayProductos.find(producto => producto.nombre === "Silla");
            alert("El producto seleccionado tiene un valor de $" + silla.precio);
        }
        
        function Vitrina() {
            let vitrina = arrayProductos.find(producto => producto.nombre === "Vitrina");
            alert("El producto seleccionado tiene un valor de $" + vitrina.precio);
        }
        
        function MesaRatona() {
            let mesaRatona = arrayProductos.find(producto => producto.nombre === "Mesa ratona");
            alert("El producto seleccionado tiene un valor de $" + mesaRatona.precio);
        }
        
        function Salir() {
            alert("Hasta luego!");
        }
        
        let opciones = menu();
        
        switch(opciones) {
            case 1:
                Sillon();
                break;
            case 2:
                Mesa();
                break;
            case 3:
                Silla();
                break;
            case 4:
                Vitrina();
                break;
            case 5:
                MesaRatona();
                break;
            case 6:
                Salir();
                break;
            default:
                alert("Opcion incorrecta");
                break;
        }

        let valor = prompt("Desea continuar con la compra? Indique Si o No");
        
        if (valor === "Si") {
            let clienteNombre = prompt("Ingrese su nombre: ");
            let clienteApellido = prompt("Ingrese su apellido: ");
            let clienteDni = parseInt(prompt("Ingrese su dni: "));
            let clienteMail = prompt("Ingrese su mail: ");
            let clienteDirec = prompt("Ingrese su direccion: ");
            alert("Su pedido ha sido realizado, le llegara un mail indicando el recorrido de su paquete en las proximas 24hs. De lo contrario comuniquese con nuestro centro de atencion. Gracias por su compra!");
        } else {
            alert("Hasta luego!");
        }
    } else {
        alert("Hasta luego!");
    }
} else {
    alert("Hasta luego!");
}
