const tipoDeSuscripcion = "Basic";


let print_subscription_details = (substype) =>{
    if (substype == 'Free') {
        console.log("Solo puedes tomar los cursos gratis");
        return;
    }
    else if (substype == 'Basic') {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return;
    }
    else if (substype == 'Expert') {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        return;
    }
    else if (substype == 'ExpertPlus') {
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        return;
    }
    else {
        console.log('Inválido')
        return;
    }
    console.warn('No debo salir')
}

print_subscription_details(tipoDeSuscripcion)

console.warn('alerta')

const tipoDeSuscripcion = "basic";
subscriptions_types= {
    free: "Solo puedes tomar los cursos gratis",
    basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    expertPlus: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
}

let get_SubsType = (subscriptions_types, tipoDeSuscripcion) => {
    if (subscriptions_types[tipoDeSuscripcion]) { //si existe, la imprimo
        console.log(subscriptions_types[tipoDeSuscripcion])
    }
    else{

    }
}

get_SubsType(subscriptions_types,tipoDeSuscripcion)