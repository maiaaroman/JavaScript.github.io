class Producto {
  constructor(nombre, precio, img, id, cantidad) {
    this.nombre = nombre
    this.precio = precio
    this.img = img
    this.id = id
    this.cantidad = cantidad
  }
}

const collarPlata = new Producto(
  'Collar Plata',
  5600,
  './images/Collar Plata.jpeg',
  1,
  1
)
const collarOro = new Producto(
  'Collar Oro',
  6500,
  './images/Collar Oro.jpg',
  2,
  1
)
const anilloSol = new Producto(
  'Anillo Sol',
  2100,
  './images/Anillo Sol.jpeg',
  3,
  1
)
const anilloLuna = new Producto(
  'Anillo Luna',
  2100,
  './images/Anillo Luna.jpg',
  4,
  1
)
const anilloCorazon = new Producto(
  'Anillo Corazon',
  2500,
  './images/Anillo Corazon.jpeg',
  5,
  1
)
const pulseraPlata = new Producto(
  'Pulsera Plata',
  3700,
  './images/Pulsera Plata.jpg',
  6,
  1
)
const pulseraOro = new Producto(
  'Pulsera Oro',
  4200,
  './images/Pulsera Oro.jpg',
  7,
  1
)
const aritosPlata = new Producto(
  'Aritos Plata',
  2900,
  './images/Aritos Plata.jpg',
  8,
  1
)
const aritosOro = new Producto(
  'Aritos Oro',
  4200,
  './images/Aritos Oro.jpg',
  9,
  1
)

const arrayProductos = [
  collarPlata,
  collarOro,
  anilloSol,
  anilloLuna,
  anilloCorazon,
  pulseraPlata,
  pulseraOro,
  aritosPlata,
  aritosOro
]
