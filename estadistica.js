// Promedio
const lista1 = [
  100,
  200,
  300,
  500
];
const reducer = (acum, list_element) => acum += list_element

const mediaAritmetica = (lista) => {
  let sumaLista = lista.reduce(reducer, 0); // sumo todos los elementos
  const promedioLista = sumaLista / lista.length; // los divido entre el numero de elementos
  return promedioLista;
};


// Mediana
const lista2 = [
  100,
  200,
  300,
  50000
];
const lista3 = [
  100,
  200,
  300,
  600,
  50000
];
const mitadLista = (lista) => lista.length / 2;
const esPar = length => {
  // const resultado = mitad % 2 === 0 ? true : false;
  return length % 2 === 0 ? true : false;
}

const medianaAritmetica = (lista) => {
  const mitad = mitadLista(lista) // devuelvo el idx de la mitad
  const mediana = esPar(lista.length) === true ? ((lista[mitad] + lista[mitad-1]) / 2): lista[Math.floor(mitad)];
  // si es par la lita, sumo los dos del medio, sino devuelvo el de la mitad
  return mediana;
}


// Moda

const lista4 = [
  1,
  2,
  3,
  4,
  2,
  3,
  5,
  3,
  2,
];
const listaCount = {}; // creo json vacio.

const counter = list_element => {
  listaCount[list_element] === undefined ? listaCount[list_element] = 1 : listaCount[list_element] += 1;
  // si existe le sumo 1, sino lo creo

}; // se llena formato {[#]: [cuantas veces aparecio], }

const calcModa = list => {
  list.map(counter); // agrego en el json cuantas veces se repite cada elemento

  //ordeno el json para tener la moda en la ultima posicion
  const listaCountArray = Object.entries(listaCount); // devuelve un array de arrays (array con cada elemento del json)
  listaCountArray.sort(
    function(previousValue, newValue) {
      return previousValue[1] - newValue[1] // de cada array ordeno segun la posicion 2, que me da el numero de repeticiones del elemnto 'value' del json
     }
   );

   return listaCountArray[listaCountArray.length - 1];
}
