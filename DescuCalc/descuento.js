// Precio * (100 - D)] / 100
/*
function calculaDescuento(precio, descuento) {
    return precio * (100 - descuento) / 100
}
*/
const inputPrecio = document.querySelector("#precio");
const inputDescuento = document.querySelector("#descuento");
const btn = document.querySelector("button")
const h1 = document.querySelector("h1")

btn.addEventListener("click", calculaDescuento)

function calculaDescuento(evento) {
    // para que no ser recargue la pagina
    evento.preventDefault()

    const precio = parseFloat(inputPrecio.value)
    const descuento = parseFloat(inputDescuento.value)
    let mensaje;

    // calculamos el descuento (Precio * (100 - D)] / 100)
    const precioConDescuento = precio * (100 - descuento) / 100
    mensaje = `El descuento aplicado es: ${precioConDescuento}`

    // mensaje en la pantalla de la web
    h1.innerText = mensaje;
};