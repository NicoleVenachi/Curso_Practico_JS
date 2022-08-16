console.log('Hola')

console.log()

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});
console.log(h1, p, parrafito, pid, input);

const ps = document.querySelectorAll('p');
console.log(ps);

h1.innerHTML = 'New <br> title';
h1.innerText = 'New <br> title';

console.log(h1.getAttribute('class'));
h1.setAttribute('class', 'rojo')

h1.classList.add('verde') //agrego esta
console.log(h1.classList.contains('rojo')); //veo si contiene rojo
h1.classList.remove('rojo') //quito rojo
console.log(h1.classList.contains('rojo')); //veo si contiene rojo

input.value = '666';

console.log(document.createElement('span'));

const newImgTag = document.createElement('img');
newImgTag.setAttribute('src', 'https://i.imgur.com/sOdxRIj.jpeg')

pid.appendChild(newImgTag);



