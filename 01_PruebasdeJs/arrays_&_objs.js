new_arr = [4,2,3]

print_arr_elems = (element) => console.log(element)

new_arr.map(print_arr_elems);

new_arr.map((element,idx) => {
    if (idx == 0) {
        console.log(element)
    }
    else{
    }   
});



new_obj = {
    nombre: 'Nicole',
    age: 24,
    favortie_foods: ['a', 'b']
}

let print_objValues = (new_obj) => console.log(Object.values(new_obj))



Object.values(new_obj)
Object.keys(new_obj)