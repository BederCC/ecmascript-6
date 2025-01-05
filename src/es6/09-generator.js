function* iterate(array){
    for(let value of array){
        yield value;
    }
}

const it = iterate(['beder', 'david', 'jose', 'julio', 'javier']);
console.log(it.next().value); // beder
console.log(it.next().value); // david
console.log(it.next().value); // jose
console.log(it.next().value); // julio
console.log(it.next().value); // javier
console.log(it.next().value); // undefined