// const precioOriginal = 120;
// const descuento = 18;
//
// const porcentajeConDescuento = 100 - descuento; // i.e 75 % es lo que paga en verdad
// const precioReal = ((precioOriginal * (porcentajeConDescuento)) / 100) ;

// console.log({
//   precioOriginal,
//   descuento,
//   porcentajeConDescuento,
//   precioReal
// });

function calcularPrecioReal(precio, descuento) {
  const porcentajeConDescuento = 100 - descuento; // i.e 75 % es lo que paga en verdad
  const precioReal = ((precio * (porcentajeConDescuento)) / 100) ;

  return precioReal;
}


function buttonPriceDiscount() {

  //calculo precio
  const inputPrice = document.getElementById('inputPrice');
  const priceValue = inputPrice.value;

  const inputDiscount = document.getElementById('inputDiscount');
  const discountValue = inputDiscount.value;

  const buttonPriceDiscount = calcularPrecioReal(priceValue, discountValue)

  //imprimir
  const pContent = document.getElementById('resultP');
  pContent.innerText = `El precio con descuento son $${buttonPriceDiscount} dólares`;
}
