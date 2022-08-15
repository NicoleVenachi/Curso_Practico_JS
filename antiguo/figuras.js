console.log('Hello World');

// Código del cuadrado
console.group('Cuadrados')

// const ladoCuadrado = 5;
// console.log('Los lados del cuadrado miden: ' + ladoCuadrado);

function perimetroCuadrado(lado) {
  return lado * 4;
  // console.log('El perímetro del cuadrado es: ' + perimetroCuadrado + 'cm');
}

function areaCuadrado(lado) {
  return lado * lado;
  // console.log('El área del cuadrado es: ' + areaCuadrado + 'cm^2');
}
console.groupEnd();

// Código del Triángulo
console.group('Triangulo');

// console.log('Los lados del Triángulo miden: '
// + ladoTriangulo1 + 'cm, '
// + ladoTriangulo1 + 'cm, '
// + baseTriangulo + 'cm'
// );
//
// const alturaTriangulo = 4;
// console.log('La altura del triangulo es de: ' + alturaTriangulo + 'cm');

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 * lado2 * base;
}
// console.log('El perímetro del cuadrado es: ' + perimetroTriangulo + 'cm');

function areaTriangulo(base, altura) {
  return ((base * altura) / 2 );
}
// console.log('El área del Triangulo es: ' + areaTriangulo + 'cm^2');

console.groupEnd();

// Código Círculo
console.group('Circulo')
PI = Math.PI;

function diametroCirculo(radio) {
  return radio * 2
}

// console.log('El radio del círculo es: ' + radioCirculo);
// console.log('El diámetro del círculo es: ' + diametroCirculo);

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// console.log('El perímetro del cuadrado es: ' + perimetroCirculo + 'cm');

function areaCirculo(radio) {
  return ((radio * radio) * PI);
}
// console.log('El área del Circulo es: ' + areaCirculo + 'cm^2');

console.groupEnd();

function calcPCuadrado() {
  const input = document.getElementById('inputCuadrado');
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcACuadrado() {
  const input = document.getElementById('inputCuadrado');
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}
