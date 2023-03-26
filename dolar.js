const dolarButton = document.getElementById('dolar');

let myHeaders = new Headers()
myHeaders.append('apikey', 'ToJogN0f6VxKTIuGu1hjCQi4zPikfY9N')

let requestOptions = {
  method: 'GET',
  headers: myHeaders
}

fetch(
  'https://api.apilayer.com/exchangerates_data/latest?base=USD&symbols=ARS',
  requestOptions
)
  .then((response) => response.json())
  .then((data) => {
    const precioDolar = data.rates.ARS
    console.log(precioDolar)

    dolarButton.addEventListener('click', () => {
      let precioCarrito = carrito.reduce(
        (acc, prod) => acc + prod.cantidad * prod.precio,
        0
      )
      let precioCarritoDolar = precioCarrito / precioDolar
      let precioRedondo = Math.round(precioCarritoDolar)
      totalCompra.innerHTML = '$' + precioRedondo + ' USD'
    })
  })
  .catch((error) => console.log('error', error));
