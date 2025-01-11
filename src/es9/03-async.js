async function* anotherGenerator(){
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const other = anotherGenerator();
other.next().then(response => console.log(response.value)); // 1
other.next().then(response => console.log(response.value)); // 2
other.next().then(response => console.log(response.value)); // 3
console.log('Hello!'); // Hello!

async function arrayOfNames(array){
    for await (let name of array){
        console.log(name);
    }
}
const names = arrayOfNames(['Beder', 'Alejandra', 'Mariana']);
console.log('after'); // Hello!