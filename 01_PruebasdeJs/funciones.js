let username = 'Niluve';
let age = 24;
let mail = 'ludwing@unicauca.edu.co'
var is_ofAge = True;


let full_name = (f_name, l_name) => f_name + l_name;
let net_money = (saved_money, debts) => saved_money - debts;

full_name('Nicole', 'Venachi');
net_money(0,0);

let greetings = (name, lastname, nickname) => {
    completeName = full_name(name, lastname)
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
}

greetings("Juan David", "Castro Gallego", "juandc")