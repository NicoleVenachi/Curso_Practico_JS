//helpers
const isolateSalaries = colombian => colombian.salary;
const esPar = length => length % 2 === 0; // veo el tamano de la lista //halloo mediana

//logica de negocio
const salariosCol = colombia.map(isolateSalaries); //saco solo salarios

const salariosColSorted = salariosCol.sort(
  function(previousValue, newValue) {
  return previousValue - newValue // de cada array ordeno segun la posicion 2, que me da el numero de repeticiones del elemnto 'value' del json
}); //ordeno para hallar mediana
const medianaAritmetica = (lista) => {
  const mitad = lista.length / 2;
  const mediana = esPar(lista.length) === true ? ((lista[mitad] + lista[mitad-1]) / 2): lista[Math.floor(mitad)];
  return mediana;
}; //halloo mediana

// NO fue necesario hacer import en el JS porque el HTML ya referenciaba al otro js. Pero siempre hacer import

// *****Calcular top 10
//helpers

//
const spliceStart = ((salariosColSorted.length * 90) / 100); //saco el 90%
const spliceCount = salariosColSorted.length - spliceStart; // saco todo el restante del punto del cual parti
const top10Salaries = salariosColSorted.splice(spliceStart, spliceCount);
