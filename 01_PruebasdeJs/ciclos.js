for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

let i=0
while (i < 5){
    console.log("El valor de i es: " + i);
    i++;
}

let i=10
while (i >= 2){
    console.log("El valor de i es: " + i);
    i--;
}

let condition = false
while (condition == false) {
    
    answer = prompt('Cuánto es 2 + 2?')
    if(Number(answer) == 4) {
       condition = true
    }
    else {
        continue
    }
}