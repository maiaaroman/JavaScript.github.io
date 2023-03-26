const contenedorProductos = document.getElementById('contenedorProductos');
const contenedorCarrito = document.getElementById('contenedorCarrito');
const carritoCompras = document.getElementById('carrito-de-compras');
const contCarrito = document.getElementById('contCarrito');
const vaciarButton = document.getElementById('vaciar');
const totalCompra = document.getElementById('totalCompra');
const comprarButton = document.getElementById('comprar');
const form = document.getElementById('form');
const enviarButton = document.getElementById('Enviar');
const cancelarButton = document.getElementById('Cancelar');
const flecha = document.getElementById('flechita');
let email = document.getElementById('inputEmail4');
let password = document.getElementById('inputPassword4');
let address = document.getElementById('inputAddress');
let city = document.getElementById('inputCity');

let carrito = [];

if (localStorage.getItem('carrito')) {
  carrito = JSON.parse(localStorage.getItem('carrito'));
}

arrayProductos.forEach((producto) => {
  const div = document.createElement('div');
  div.className = 'caja'
  div.innerHTML = `<div class="card" style="width: 13rem;">
                        <img src="${producto.img}" class="card-img-top" alt="producto">
                        <div class="card-body">
                            <p class="card-text">${producto.nombre}</p>
                            <p class="card-text">$${producto.precio}</p>
                            <button type="button" id="add${producto.id}" class="buttonProduct btn btn-light add">Agregar al carrito</button>
                         </div>
                    </div>
                    `;

  contenedorProductos.appendChild(div);

  const boton = document.getElementById(`add${producto.id}`);
  boton.addEventListener('click', () => {
    agregarAlCarrito(producto.id);
    console.log('click');
    console.log(carrito);
  })
})

const agregarAlCarrito = (prodId) => {
  const existe = carrito.some((prod) => prod.id === prodId)
  if (existe) {
    const produ = carrito.map((prod) => {
      if (prod.id === prodId) {
        prod.cantidad++
      }
    })
  } else {
    const item = arrayProductos.find((prod) => prod.id === prodId);
    carrito.push(item);
  }

  localStorage.setItem('carrito', JSON.stringify(carrito));
  mostrarCarrito();
}

carritoCompras.addEventListener('click', () => {
  contenedorCarrito.classList.toggle('inactive');
  form.classList.add('inactive');
  mostrarCarrito();
})

const mostrarCarrito = () => {
  contCarrito.innerHTML = '';

  carrito.forEach((producto) => {
    const div = document.createElement('div');
    div.className = 'caja';
    div.innerHTML = `<ul class="list-group list-group-flush">
                            <li class="list-group-item">${producto.nombre}</li>
                            <p class="card-text">${producto.precio}</p>
                            <p class="card-text">${producto.cantidad}</p>
                            <button type="button" id="eliminar${producto.id}" class="buttonProduct btn btn-light eliminar">Eliminar</button>
                        </ul>
                        `;

    contCarrito.appendChild(div);

    const boton2 = document.getElementById(`eliminar${producto.id}`);
    boton2.addEventListener('click', () => {
      eliminarProducto(producto.id);
    })

    const eliminarProducto = (id) => {
      const producto = carrito.find((producto) => producto.id === id);
      const indice = carrito.indexOf(producto);
      carrito.splice(indice, 1);
      mostrarCarrito();
      ActualizarPrecio();
      producto.cantidad = 1
      localStorage.setItem('carrito', JSON.stringify(carrito));
    }

    vaciarButton.addEventListener('click', () => {
      carrito = [];
      mostrarCarrito();
      ActualizarPrecio();
      producto.cantidad = 1
      localStorage.clear();
    })
  })

  ActualizarPrecio();
}

const ActualizarPrecio = () => {
  totalCompra.innerText =
    '$' + carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0);
}

const finalizarCompra = () => {
  const leng = carrito.length

  if (leng === 0) {
    Swal.fire(
      'Por favor para finalizar la compra agregue al menos un producto al carrito'
    );
  } else {
    contenedorCarrito.classList.add('inactive');
    form.classList.remove('inactive');

    enviarButton.addEventListener('click', (event) => {
      event.preventDefault();

      if (
        email.value === '' ||
        password.value === '' ||
        address.value === '' ||
        city.value === ''
      ) {
        Swal.fire('Por favor complete los campos antes de finalizar la compra');
        return false;
      }
      Swal.fire(
        'Su pedido ha sido realizado, le llegara un mail indicando el recorrido de su paquete en las proximas 24hs. De lo contrario comuniquese con nuestro centro de atencion. Gracias por su compra!'
      );
      form.classList.add('inactive');
      return true;
    })

    cancelarButton.addEventListener('click', (event) => {
      event.preventDefault();
      Swal.fire('Gracias por su visita, vuelva pronto!');
      form.classList.add('inactive');
    })
  }
}

comprarButton.addEventListener('click', () => {
  finalizarCompra();
})

flecha.addEventListener('click', () => {
  form.classList.add('inactive');
})
