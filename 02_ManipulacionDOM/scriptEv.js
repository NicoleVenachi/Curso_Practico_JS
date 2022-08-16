// vamos a calcular cuando escribamos el botón
const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

pResult.style.display = "none";
console.log({
    h1,
    input1,
    input2,
    btn
})
function inputOnChange(){
}
function btnOnClick(){
    // saco el valor de los objetos inputs y sumo.
    const suma = Number(input1.value) + Number(input2.value)
    pResult.innerText = `Resultado: ${suma}`
    console.log(pResult.getAttribute('display'))
    pResult.style.display = "block";


}