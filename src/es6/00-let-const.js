var lastName = 'Beder';
lastName = 'Danilo';
console.log(lastName); // Danilo

let fruit = 'Banana';
fruit = 'Apple';
console.log(fruit); // Apple

const animal = 'Dog';
animal = 'Cat'; // TypeError: Assignment to constant variable.
console.log(animal); // Dog

const fruits = () => {
  if (true) {
    var fruit1 = 'Banana'; //function scope
    let fruit2 = 'Apple'; //block scope
    const fruit3 = 'Orange'; //block scopewdddddd
  }
    console.log(fruit1); // Banana
    console.log(fruit2); // ReferenceError: fruit2 is not defined
    console.log(fruit3); // ReferenceError: fruit3 is not defined
}
fruits();

