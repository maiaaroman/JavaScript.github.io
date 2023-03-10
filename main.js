class Producto {
    constructor(nombre, precio, img, id) {
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.id = id;
        this.cantidad = 1;
    }
}

const collarPlata = new Producto("Collar Plata", 5600, "./images/Collar Plata.jpeg", 1);
const collarOro = new Producto("Collar Oro", 6500, "./images/Collar Oro.jpg", 2);
const anilloSol = new Producto("Anillo Sol", 2100, "./images/Anillo Sol.jpeg", 3);
const anilloLuna = new Producto("Anillo Luna", 2100, "./images/Anillo Luna.jpg", 4);
const anilloCorazon = new Producto("Anillo Corazon", 2500, "./images/Anillo Corazon.jpeg", 5);
const pulseraPlata = new Producto("Pulsera Plata", 3700, "../images/Pulsera Plata.jpg", 6);
const pulseraOro = new Producto("Pulsera Oro", 4200, "../images/Pulsera Oro.jpg", 7);

const arrayProductos = [collarPlata, collarOro, anilloSol, anilloLuna, anilloCorazon, pulseraPlata, pulseraOro];

console.log(arrayProductos);

let carrito = [];

if(localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
}

const contenedorProductos = document.getElementById("contenedorProductos");
const contenedorCarrito = document.getElementById("contenedorCarrito");

arrayProductos.forEach( producto => {
    const div = document.createElement("div");
    div.className = "caja";
    div.innerHTML = `<div class="card" style="width: 13rem;">
                        <img src="${producto.img}" class="card-img-top" alt="producto">
                        <div class="card-body">
                            <p class="card-text">${producto.nombre}</p>
                            <p class="card-text">${producto.precio}</p>
                            <button type="button" id="add${producto.id}" class="buttonProduct btn btn-outline-primary">Agregar al carrito</button>
                         </div>
                    </div>
                    `;

    contenedorProductos.appendChild(div);

    const boton = document.getElementById(`add${producto.id}`);
    boton.addEventListener("click", () => {
        agregarAlCarrito(producto.id)
        console.log("click");
        console.log(carrito);
    })
})

const agregarAlCarrito = (prodId) => {
    const item = arrayProductos.find((prod) => prod.id === prodId);
    carrito.push(item);
    calculo();

    localStorage.setItem("carrito", JSON.stringify(carrito));
}

const ver = document.getElementById('ver');

ver.addEventListener("click", () => {
    mostrarCarrito();
})

const mostrarCarrito = () => {
    contenedorCarrito.innerHTML = "";
    contenedorCarrito.classList.toggle('inactive');

    carrito.forEach( producto => {
        const div = document.createElement("div");
        div.className = "caja";
        div.innerHTML = `<ul class="list-group list-group-flush">
                            <li class="list-group-item">${producto.nombre}</li>
                            <p class="card-text">${producto.precio}</p>
                            <p class="card-text">${producto.cantidad}</p>
                            <button type="button" id="eliminar${producto.id}" class="buttonProduct btn btn-outline-primary">Eliminar</button>
                        </ul>
                        `;
    
        contenedorCarrito.appendChild(div);

        const boton2 = document.getElementById(`eliminar${producto.id}`);
        boton2.addEventListener("click", () => {
            eliminarProducto(producto.id);
        })

        const eliminarProducto = (id) => {
            const producto = carrito.find(producto => producto.id === id);
            const indice = carrito.indexOf(producto);
            carrito.splice(indice,1);
            mostrarCarrito();
            calculo();
            
            localStorage.setItem("carrito", JSON.stringify(carrito));
        }

        const vaciar = document.getElementById(`vaciar`);

        vaciar.addEventListener(`click`, () => {
            eliminarCarrito();
            calculo();
        })

        const eliminarCarrito = () => {
            carrito = [];
            mostrarCarrito();

            localStorage.clear();
        }
        
    })
}

const totalCompra = document.getElementById("totalCompra");

const calculo = () => {
    let total = 0;
    carrito.forEach( producto => {
        total += producto.precio * producto.cantidad;
    })

    totalCompra.innerHTML = `$${total}`;
}


/*
btn.onmousedown = () => {
    console.log(mousedown)
}
*/